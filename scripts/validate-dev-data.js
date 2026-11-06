// data/dev/*.json 검사. 모양은 비개발자용과 같고 kind(회사 서비스/오픈소스/공개 모델)와 ai_native가 더 있다.
// 사용법: node scripts/validate-dev-data.js [YYYY-MM-DD]
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate } from '../js/recommend.js';
import { validateGlossary, validatePurposes, validateTools } from './validate-data.js';

export const DEV_PURPOSE_ID = /^[a-z][a-z_]*$/;

export function validateDevData({ tools, purposes, glossary = [], today }) {
  return [
    ...validatePurposes(purposes, DEV_PURPOSE_ID),
    ...validateTools(tools, purposes, today, { dev: true }),
    ...validateGlossary(glossary).map((e) => `dev/${e}`),
  ];
}

export function loadDevData(dir = new URL('../data/dev/', import.meta.url)) {
  const read = (name) => JSON.parse(readFileSync(new URL(name, dir), 'utf8'));
  return { tools: read('tools.json'), purposes: read('purposes.json'), glossary: read('glossary.json') };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const today = process.argv[2] ?? new Date().toISOString().slice(0, 10);
  if (!isValidDate(today)) {
    console.error(`날짜 형식이 틀렸습니다: ${today}`);
    process.exit(2);
  }
  const data = loadDevData();
  const errors = validateDevData({ ...data, today });
  if (errors.length > 0) {
    console.error(`개발자용 데이터 검사 실패 (${errors.length}건)`);
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }
  console.log(`개발자용 데이터 검사 통과: 도구 ${data.tools.length}개, 단계 ${data.purposes.length}개 (기준일 ${today})`);
}
