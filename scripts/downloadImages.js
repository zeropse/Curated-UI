import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";
import { sites } from "../src/data/sites.js";

const OUT_DIR = path.join(process.cwd(), "public", "images");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function main() {
  console.log(`Starting Puppeteer to capture ${sites.length} images...`);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    const fileName = `${site.imageSlug}.jpg`;
    const dest = path.join(OUT_DIR, fileName);

    // Check if we already have it to avoid redundant work
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`[${i + 1}/${sites.length}] Already exists: ${fileName}`);
      continue;
    }

    console.log(`[${i + 1}/${sites.length}] Capturing ${site.url}...`);
    try {
      await page.goto(site.url, { waitUntil: "networkidle2", timeout: 30000 });
      // Wait a bit for entrance animations to finish
      await new Promise((r) => setTimeout(r, 2000));
      await page.screenshot({ path: dest, type: "jpeg", quality: 85 });
      console.log(`    Saved to ${dest}`);
    } catch (err) {
      console.error(`    Failed to capture ${fileName}:`, err.message);
    }
  }

  await browser.close();
  console.log("Finished capturing images!");
}

main();
