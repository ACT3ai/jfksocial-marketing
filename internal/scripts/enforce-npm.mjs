// Runs as `preinstall`, so it fires before yarn/pnpm/bun can write a second
// lockfile next to package-lock.json. Two lockfiles make VS Code's package
// manager auto-detection ambiguous and it stops running npm scripts.
const agent = process.env.npm_config_user_agent ?? "";
const name = agent.split("/")[0];

if (name && name !== "npm") {
  console.error(
    `\nThis project uses npm. Detected "${name}".\n` +
      `Run "npm install" (or "npm ci") instead so package-lock.json stays the only lockfile.\n`
  );
  process.exit(1);
}
