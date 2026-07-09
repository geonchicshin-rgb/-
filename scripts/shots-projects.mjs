import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

// 핀 섹션(히어로+매니페스토)을 지나 각 프로젝트 씬 중앙으로 스크롤
const ids = ["app-365", "b2b-diesel", "ai-hub"];
const scenes = await page.evaluate(() => {
  return Array.from(document.querySelectorAll("[data-p-media]")).map((el) => {
    const r = el.getBoundingClientRect();
    return window.scrollY + r.top - 150;
  });
});

for (let i = 0; i < scenes.length; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), scenes[i]);
  await page.waitForTimeout(1800);
  await page.screenshot({ path: `shots/p-${ids[i]}.png` });
  console.log("saved", ids[i]);
}

await browser.close();
