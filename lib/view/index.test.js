const fs = require("fs");
const path = require("path");
const util = require("util");

const deleteFile = util.promisify(fs.unlink);
const readFile = util.promisify(fs.readFile);

const languages = require("./__fixtures__/languages.json");
const outputPath = path.join(__dirname, "./__fixtures__/test.md");
const view = require(".");

const setup = async () => {
  await view(languages, outputPath);
  const data = await readFile(outputPath);
  await deleteFile(outputPath);
  return {
    text: data.toString()
  };
};

describe("View", () => {
  it("injects markdown into file", async () => {
    const { text } = await setup();
    expect(text).toContain("# Programming Languages Top 10 Libraries");
  });
});
