const chalk = require("chalk");

const pmText = (packageManager) => {
  if (packageManager === "pnpm") {
    return chalk.yellow("pnpm");
  }
  if (packageManager === "yarn") {
    return chalk.blue("yarn");
  }
  if (packageManager === "npm") {
    return chalk.green("npm");
  }
};

module.exports = pmText;
