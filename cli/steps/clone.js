const currentDirectory = process.cwd();
const path = require("path");
const { exec } = require("child_process");
const chalk = require("chalk");

const cloneTemplate = async ({ name }, callback) => {
  const destinationFolderPath = path.join(currentDirectory, name);

  const command = `npx degit https://github.com/maxhu08/create-neutrino-app/templates/typescript-taildwind-sass ${destinationFolderPath}`;

  exec(`${command} > /dev/null 2>&1`, { encoding: "utf-8" }, (err) => {
    if (err) {
      console.error(`${chalk.red("✘")} err cloning template: ${err}`);
      process.exit(1);
    }

    console.log(`🌌 template cloned into ${destinationFolderPath}`);

    callback({ destinationFolderPath });
  });
};

module.exports = cloneTemplate;
