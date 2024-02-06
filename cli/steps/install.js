const { exec } = require("child_process");
const chalk = require("chalk");

const installDependecies = async ({
  destinationFolderPath,
  packageManager
}) => {
  if (packageManager.startsWith("pnpm")) {
    exec(
      `cd ${destinationFolderPath} && pnpm i`,
      { encoding: "utf-8" },
      (err) => {
        if (err) {
          console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
          process.exit(1);
        }

        console.log(`installed dependecies with pnpm`);
      }
    );
  } else if (packageManager.startsWith("yarn")) {
    exec(`yarn i`, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
        process.exit(1);
      }

      console.log(`installed dependecies with yarn`);
    });
  } else {
    exec(`npm i`, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
        process.exit(1);
      }

      console.log(`installed dependecies with npm`);
    });
  }
};

module.exports = installDependecies;
