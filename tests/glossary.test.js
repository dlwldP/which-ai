// 용어 표시 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { termMatcher, glossarize, termIn } from '../js/glossary.js';

const glossary = JSON.parse(readFileSync(new URL('../data/glossary.json', import.meta.url), 'utf8'));
const matcher = termMatcher(glossary);
const btn = (term, word = term) => `<button type="button" class="term" data-term="${term}">${word}</button>`;

test('긴 단어를 먼저 잡음', () => {
  assert.equal(glossarize('무료 크레딧을 다 쓰면', matcher), `${btn('무료 크레딧')}을 다 쓰면`);
  assert.equal(glossarize('크레딧이 남았어요', matcher), `${btn('무료 크레딧', '크레딧')}이 남았어요`);
});

test('같은 문장에서는 용어마다 처음 한 번만', () => {
  assert.equal(glossarize('토큰과 토큰', matcher), `${btn('토큰')}과 토큰`);
});

test('다른 이름(aliases)도 원래 용어로 연결', () => {
  assert.equal(glossarize('파일 올리기', matcher), `파일 ${btn('업로드', '올리기')}`);
});

test('용어가 없으면 그대로', () => {
  assert.equal(glossarize('안녕하세요', matcher), '안녕하세요');
  assert.equal(glossarize('토큰', null), '토큰');
  assert.equal(termMatcher([]), null);
});

test('비교 항목 이름에서 용어 찾기 (ⓘ 표시용)', () => {
  assert.equal(termIn('무료 한도', matcher), '무료 한도');
  assert.equal(termIn('직접 설치 (개발 지식 필요)', matcher), '직접 설치');
  assert.equal(termIn('사용 기기', matcher), null);
  assert.equal(termIn('무료 한도', null), null);
});

test('용어집 첫 글자 묶음: 한글 초성(쌍자음 합침) → 영문 → 나머지', async () => {
  const { initialOf, glossaryGroups, glossaryMatches } = await import('../js/glossary.js');
  assert.equal(initialOf('토큰'), 'ㅌ');
  assert.equal(initialOf('꿀팁'), 'ㄱ');
  assert.equal(initialOf('api'), 'A');
  assert.equal(initialOf('3D'), '#');
  const g = glossaryGroups([
    { term: 'RAG', aliases: [], description: 'x' },
    { term: '프롬프트', aliases: [], description: 'x' },
    { term: '가격', aliases: [], description: 'x' },
    { term: '1분', aliases: [], description: 'x' },
  ]);
  assert.deepEqual(g.map((x) => x.key), ['ㄱ', 'ㅍ', 'R', '#']);
  assert.equal(glossaryMatches({ term: '토큰', aliases: ['token'], description: '글 조각' }, 'TOKEN'), true);
  assert.equal(glossaryMatches({ term: '토큰', aliases: [], description: '글 조각' }, '없는말'), false);
});
