// tools.json 두 버전을 비교해 변경 이력을 만드는 순수 함수. git 접근은 scripts/build-changelog.js가 맡는다.

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

/** { price: { free: true } } → { 'price.free': true }. 배열은 펼치지 않고 값 하나로 본다. */
function flatten(obj, prefix = '', out = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (isObject(value)) flatten(value, path, out);
    else out[path] = value;
  }
  return out;
}

const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/**
 * 툴 목록 두 개를 비교한다. 결과 순서는 툴 id, 필드 경로 순으로 정렬해서 항상 같다.
 * @returns {{ type: 'added'|'removed'|'changed', tool_id: string, name: string, field?: string, before?: any, after?: any }[]}
 */
export function diffTools(before, after) {
  const oldById = new Map(before.map((t) => [t.id, t]));
  const newById = new Map(after.map((t) => [t.id, t]));
  const ids = [...new Set([...oldById.keys(), ...newById.keys()])].sort();
  const changes = [];
  for (const id of ids) {
    const oldTool = oldById.get(id);
    const newTool = newById.get(id);
    if (!oldTool) changes.push({ type: 'added', tool_id: id, name: newTool.name });
    else if (!newTool) changes.push({ type: 'removed', tool_id: id, name: oldTool.name });
    else {
      const a = flatten(oldTool);
      const b = flatten(newTool);
      const fields = [...new Set([...Object.keys(a), ...Object.keys(b)])].filter((f) => f !== 'id').sort();
      for (const field of fields) {
        if (same(a[field], b[field])) continue;
        changes.push({ type: 'changed', tool_id: id, name: newTool.name, field, before: a[field] ?? null, after: b[field] ?? null });
      }
    }
  }
  return changes;
}

/**
 * @param {{ commit: string, date: string, before: object[], after: object[] }[]} versions  오래된 커밋부터
 * @returns 최신 커밋부터, 실제로 바뀐 게 있는 커밋만
 */
export function buildChangelog(versions) {
  return versions
    .map((v) => ({ date: v.date, commit: v.commit, changes: diffTools(v.before, v.after) }))
    .filter((entry) => entry.changes.length > 0)
    .reverse();
}
