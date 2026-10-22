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
