// 초안 목록 만들기 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildChecklist, textFragmentUrl } from '../scripts/review-checklist.js';
import { KINDS } from '../scripts/draft.js';

test('짧은 근거 문장은 문장 전체로 강조 주소를 만듦', () => {
  assert.equal(textFragmentUrl('https://a.com/p', 'Free for everyone'), 'https://a.com/p#:~:text=Free%20for%20everyone');
});

test('긴 문장은 앞·뒤 5단어로 범위를 지정하고, - , ( ) 같은 글자는 인코딩함', () => {
  const url = textFragmentUrl('https://a.com/p', 'one two three four five six seven eight nine ten-eleven (twelve).');
  assert.equal(url, 'https://a.com/p#:~:text=one%20two%20three%20four%20five,seven%20eight%20nine%20ten%2Deleven%20%28twelve%29.');
});

test('주소에 이미 #이 있으면 :~:text=를 이어 붙임', () => {
  assert.equal(textFragmentUrl('https://a.com/p#faq', 'Hello'), 'https://a.com/p#faq:~:text=Hello');
});

test('실제 초안 파일로 만든 목록에 모든 툴과 근거 링크가 들어감', () => {
  const drafts = {};
  const purposes = {};
  for (const [name, kind] of Object.entries(KINDS)) {
    drafts[name] = JSON.parse(readFileSync(kind.draftUrl, 'utf8'));
    purposes[name] = kind.load().purposes;
  }
  const md = buildChecklist(drafts, purposes);
  for (const kind of ['general', 'dev']) {
    for (const d of drafts[kind]) {
      assert.ok(md.includes(`(\`${d.id}\`)`), d.id);
      for (const e of d.evidence) assert.ok(md.includes(textFragmentUrl(e.source, e.quote)), d.id);
    }
  }
});
