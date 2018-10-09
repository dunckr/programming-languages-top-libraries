const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const template = data => {
  //   const body = data
  //       .map(item => {
  //           // TODO format downloads
  //           return `| ${item.name}  | ${item.downloads} |`;
  //       })
  //       .join("\n");
  //
  //   const template = `${selector}
  //
  // | Library | Downloads |
  // | --- | --- | --- |
  // ${body}`;
  //
  //   const update = text.replace(selector, template);
  return "# blah";
};

const view = async (selector = "# Daily downloads", path, data) => {
  // const file = await readFile(path);
  // const text = file.toString();

  // TODO different languages

  // await fs.writeFile(path, update);
};

module.exports = view;
