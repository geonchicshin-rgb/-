import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("shots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const total = await page.evaluate(
  () => document.documentElement.scrollHeight - window.innerHeight
);

const stops = [
  ["01-hero", 0],
  ["02-hero-zoom", 0.06],
  ["03-manifesto", 0.18],
  ["04-works-head", 0.32],
  ["05-project-365", 0.42],
  ["06-project-b2b", 0.56],
  ["07-project-aihub", 0.7],
  ["08-process", 0.84],
  ["09-contact", 1.0],
];

for (const [name, ratio] of stops) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(total * ratio));
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `shots/${name}.png` });
  console.log("saved", name);
}

// 모바일 뷰 확인
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
await mobile.waitForTimeout(2000);
const mTotal = await mobile.evaluate(
  () => document.documentElement.scrollHeight - window.innerHeight
);
for (const [name, ratio] of [
  ["m1-hero", 0],
  ["m2-project", 0.45],
  ["m3-contact", 1.0],
]) {
  await mobile.evaluate((y) => window.scrollTo(0, y), Math.round(mTotal * ratio));
  await mobile.waitForTimeout(1500);
  await mobile.screenshot({ path: `shots/${name}.png` });
  console.log("saved", name);
}

await browser.close();
