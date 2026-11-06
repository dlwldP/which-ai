// 문장 안의 용어집 단어에 밑줄 버튼을 씌우는 순수 함수. 누르면 풀이를 띄우는 건 app.js가 맡는다.

/** 단어 목록을 긴 것부터 정렬한 정규식. "무료 크레딧"이 "크레딧"보다 먼저 잡힌다. */
export function termMatcher(glossary) {
  const words = glossary.flatMap((g) => [g.term, ...g.aliases].map((word) => ({ word, term: g.term })));
  words.sort((a, b) => b.word.length - a.word.length || (a.word < b.word ? -1 : 1));
  if (words.length === 0) return null;
  const pattern = words.map((w) => w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  return { regex: new RegExp(pattern, 'g'), termOf: new Map(words.map((w) => [w.word, w.term])) };
}

/**
 * 이미 HTML 이스케이프된 문장(태그 없음)을 받아 용어에 버튼을 씌운다.
 * 같은 문장 안에서는 용어마다 처음 한 번만 표시한다.
 */
export function glossarize(escapedText, matcher) {
  if (!matcher) return escapedText;
  const used = new Set();
  return escapedText.replace(matcher.regex, (word) => {
    const term = matcher.termOf.get(word);
    if (used.has(term)) return word;
    used.add(term);
    return `<button type="button" class="term" data-term="${term.replace(/"/g, '&quot;')}">${word}</button>`;
  });
}

/** 문장에 들어 있는 첫 용어(원래 용어 이름). 비교 항목 이름 옆 ⓘ 표시에 쓴다. 없으면 null */
export function termIn(text, matcher) {
  if (!matcher) return null;
  const found = text.match(matcher.regex);
  return found ? matcher.termOf.get(found[0]) : null;
}

const INITIALS = ['ㄱ', 'ㄱ', 'ㄴ', 'ㄷ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅂ', 'ㅅ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/** 용어의 첫 글자 묶음: 한글은 초성(ㄲ→ㄱ처럼 합침), 영문은 대문자, 나머지는 "#" */
export function initialOf(word) {
  const c = word.trim().charAt(0);
  const code = c.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) return INITIALS[Math.floor((code - 0xac00) / 588)];
  if (/[a-z]/i.test(c)) return c.toUpperCase();
  return '#';
}

/** 용어집을 첫 글자 묶음으로. 한글 묶음(가나다순) → 영문(ABC순) → 나머지, 묶음 안은 이름순 */
export function glossaryGroups(glossary) {
  const rank = (k) => (/[ㄱ-ㅎ]/.test(k) ? 0 : /[A-Z]/.test(k) ? 1 : 2);
  const map = new Map();
  for (const item of glossary) {
    const k = initialOf(item.term);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(item);
  }
  return [...map.entries()]
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b, 'ko'))
    .map(([key, items]) => ({ key, items: items.sort((a, b) => a.term.localeCompare(b.term, 'ko')) }));
}

/** 찾는 말이 용어·다른 이름·풀이에 들어 있는지 (대소문자 무시) */
export function glossaryMatches(item, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [item.term, ...item.aliases, item.description].some((s) => s.toLowerCase().includes(q));
}
