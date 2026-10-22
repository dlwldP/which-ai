// 화면 모드 설정 테스트 (js/modes.js)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MODES } from '../js/modes.js';
import { PROFILES } from '../js/recommend.js';
import { aiNativeText, formsText, openSourceText } from '../js/format.js';

const demo = JSON.parse(readFileSync(new URL('../data/demo-tools.json', import.meta.url), 'utf8'));
const devDemo = JSON.parse(readFileSync(new URL('../data/dev/demo-tools.json', import.meta.url), 'utf8'));

test('자세히 보기 비교 항목은 6개', () => {
  for (const [name, m] of Object.entries(MODES)) assert.equal(m.facts.length, 6, name);
});

test('모드의 profile이 추천 엔진에 있음', () => {
  for (const m of Object.values(MODES)) assert.ok(PROFILES[m.profile]);
});

test('개발자용 조건은 추천 엔진의 필터와 같음', () => {
  assert.deepEqual(MODES.dev.conditions.map((c) => c.key).sort(), Object.keys(PROFILES.dev.filters).sort());
});

test('조건의 주소 이름(param)이 겹치지 않음', () => {
  for (const m of Object.values(MODES)) {
    const params = m.conditions.map((c) => c.param);
    assert.equal(new Set(params).size, params.length);
  }
});

test('비교 항목이 예시 데이터에서 모두 문구를 만듦', () => {
  for (const [m, tools] of [[MODES.general, demo], [MODES.dev, devDemo]]) {
    for (const t of tools) {
      for (const [label, value] of [...m.facts, ...m.detailFacts]) {
        const text = value(t);
        assert.ok(typeof text === 'string' && text.length > 0, `${t.id} ${label}`);
      }
    }
  }
});

test('개발자용 문구', () => {
  assert.equal(formsText(['cli', 'ide_extension', 'self_host']), 'CLI, IDE 확장, 셀프 호스팅');
  assert.equal(aiNativeText('no'), 'AI 툴 아님 (AI와 같이 쓰는 도구)');
  assert.equal(aiNativeText('yes'), 'AI가 핵심');
  assert.equal(openSourceText(true), '예');
});

test('모드의 제보 사이트 값이 제보 양식의 선택지에 있음', () => {
  const form = readFileSync(new URL('../.github/ISSUE_TEMPLATE/wrong-info.yml', import.meta.url), 'utf8');
  for (const m of Object.values(MODES)) assert.ok(form.includes(`        - ${m.reportSite}\n`), m.reportSite);
});

test('요약 배지는 모드마다 3개, 예시 데이터에서 모두 문구를 만듦', () => {
  for (const [m, tools] of [[MODES.general, demo], [MODES.dev, devDemo]]) {
    for (const t of tools) {
      const badges = m.badges(t);
      assert.equal(badges.length, 3);
      for (const b of badges) assert.ok(b.text && ['good', 'warn', 'plain'].includes(b.tone), `${t.id} ${JSON.stringify(b)}`);
    }
  }
});

test('비교 항목 이름은 5글자 이하 (이름 칸에서 줄이 꺾이지 않게)', () => {
  for (const m of Object.values(MODES)) {
    for (const [label] of [...m.facts, ...m.detailFacts]) assert.ok(label.replace(/ /g, '').length <= 5, label);
  }
});
