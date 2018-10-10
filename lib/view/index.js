const fs = require("fs");
const path = require("path");
const util = require("util");

const markdown = require("./markdown");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const output = path.join(__dirname, "../../readme.md");
const selector = "{{>content}}";
const template = path.join(__dirname, "template.md");

const view = async (languages, outputPath = output) => {
  const content = markdown(languages);
  const file = await readFile(template);
  const text = file.toString().replace(selector, content);
  await writeFile(outputPath, text);
};

module.exports = view;
