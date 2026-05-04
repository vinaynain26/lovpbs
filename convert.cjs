const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
const puppeteer = require("puppeteer");

const pageName = process.argv[2] || "newPage";

// ─── Step 1: Build the Vite app ───
console.log("🔨 Building project...");
execSync("bunx vite build", { stdio: "inherit" });

// ─── Step 2: Get compiled CSS from dist ───
function getCompiledCSS() {
  const assetsDir = path.join("dist", "assets");
  if (!fs.existsSync(assetsDir)) return "";
  const cssFile = fs.readdirSync(assetsDir).find(f => f.endsWith(".css"));
  if (!cssFile) return "";
  console.log(`✅ Found compiled CSS: ${cssFile}`);
  return fs.readFileSync(path.join(assetsDir, cssFile), "utf-8");
}

// ─── Step 3: Get compiled JS filename from dist ───
function getCompiledJSFilename() {
  const assetsDir = path.join("dist", "assets");
  if (!fs.existsSync(assetsDir)) return "";
  const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith(".js"));
  if (!jsFiles.length) return "";
  const mainJS = jsFiles
    .map(f => ({ name: f, size: fs.statSync(path.join(assetsDir, f)).size }))
    .sort((a, b) => b.size - a.size)[0].name;
  console.log(`✅ Found compiled JS: ${mainJS}`);
  return mainJS;
}

// ─── Step 4: Serve dist and scrape ───
async function scrapeRenderedHTML() {
  let serverProcess;

  try {
    require.resolve("serve");
  } catch {
    console.log("📦 Installing serve...");
    execSync("bun add serve --dev", { stdio: "inherit" });
  }

  console.log("🌐 Starting local server...");
  serverProcess = spawn("bunx", ["serve", "dist", "-p", "5555", "--no-clipboard"], {
    stdio: "ignore",
    detached: true,
  });

  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log("🤖 Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log("📄 Visiting page...");
  await page.goto("http://localhost:5555", {
    waitUntil: "networkidle0",
    timeout: 30000,
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  const mainHTML = await page.evaluate(() => {
    const main = document.querySelector("main");
    if (main) return main.outerHTML;

    const root = document.querySelector("#root");
    if (!root) return document.body.innerHTML;

    const clone = root.cloneNode(true);
    const nav = clone.querySelector("nav, header");
    const footer = clone.querySelector("footer");
    if (nav) nav.remove();
    if (footer) footer.remove();
    return clone.innerHTML;
  });

  await browser.close();

  try {
    process.kill(-serverProcess.pid);
  } catch {
    serverProcess.kill();
  }

  return mainHTML;
}

// ─── Main ───
(async () => {
  try {
    const mainHTML = await scrapeRenderedHTML();
    const compiledCSS = getCompiledCSS();
    const jsFilename = getCompiledJSFilename();
    const indexCSS = fs.existsSync("src/index.css")
      ? fs.readFileSync("src/index.css", "utf-8")
      : "";

    const viewContent = `${mainHTML}`;

    const layoutContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{title}}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
    <style>
      ${indexCSS}
      ${compiledCSS}
    </style>
  </head>
  <body>
    {{> header/header}}
    {{{body}}}
    {{> footer/footer}}
    <script src="/assets/${jsFilename}"></script>
  </body>
</html>`;

    const routeContent = `
router.get("/${pageName}", function (req, res, next) {
  res.render("${pageName}", {
    layout: "${pageName}",
    title: "${pageName} page",
    isProd: process.env.NODE_ENV === "production",
  });
});
`;

    fs.mkdirSync("hbs-output/views/layouts", { recursive: true });
    fs.writeFileSync(`hbs-output/views/${pageName}.hbs`, viewContent);
    fs.writeFileSync(`hbs-output/views/layouts/${pageName}.hbs`, layoutContent);
    fs.writeFileSync(`hbs-output/route-${pageName}.js`, routeContent);

    console.log(`\n✅ Done! Files created in hbs-output/`);
    console.log(`   - hbs-output/views/${pageName}.hbs`);
    console.log(`   - hbs-output/views/layouts/${pageName}.hbs`);
    console.log(`   - hbs-output/route-${pageName}.js`);

  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
})();