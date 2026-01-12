const { execSync } = require("child_process");

if (process.env.NETLIFY) {
  console.log("[postinstall] NETLIFY detected — skipping `prisma generate`.");
  process.exit(0);
}

try {
  console.log("[postinstall] Running `npx prisma generate`...");
  execSync("npx prisma generate", { stdio: "inherit" });
} catch (e) {
  console.warn("[postinstall] prisma generate failed; continuing.");
  process.exit(0);
}
