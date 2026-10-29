// 검색 등록(Google Search Console) 설정 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const SITE = 'https://dlwldp.github.io/which-ai/';

test('두 사이트 모두 소유 확인 태그와 대표 주소(canonical)가 있음', () => {
  for (const [file, url] of [['index.html', SITE], ['dev/index.html', `${SITE}dev/`]]) {
    const html = read(file);
    assert.match(html, /<meta name="google-site-verification" content="[^"]+"/, file);
    assert.ok(html.includes(`<link rel="canonical" href="${url}">`), file);
  }
});

test('사이트맵에 두 사이트 첫 화면이 있고, 배포할 때 함께 올라감', () => {
  const xml = read('sitemap.xml');
  assert.ok(xml.includes(`<loc>${SITE}</loc>`));
  assert.ok(xml.includes(`<loc>${SITE}dev/</loc>`));
  assert.match(read('.github/workflows/deploy.yml'), /cp -r [^\n]*sitemap\.xml/);
});

test('두 사이트 하단에 이용 안내가 있음', () => {
  for (const file of ['index.html', 'dev/index.html']) {
    const footer = read(file).match(/<footer[\s\S]*<\/footer>/)[0];
    assert.match(footer, /class="site-terms"/, file);
    for (const s of ['확인 날짜 기준', '공식 사이트에서 한 번 더 확인', '관계가 없어요', '방문자 정보를 모으지 않고']) {
      assert.ok(footer.includes(s), `${file}: ${s}`);
    }
  }
});
