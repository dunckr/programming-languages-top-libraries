const fs = require("fs");
const path = require("path");
const util = require("util");

const deleteFile = util.promisify(fs.unlink);
const readFile = util.promisify(fs.readFile);

const languages = require("./__fixtures__/languages.json");
const jsonPath = path.join(__dirname, "./__fixtures__/test.json");
const markdownPath = path.join(__dirname, "./__fixtures__/test.md");
const view = require(".");

const setup = async () => {
  await view(languages, jsonPath, markdownPath);
  const markdown = await readFile(markdownPath);
  const json = await readFile(jsonPath);
  await deleteFile(markdownPath);
  await deleteFile(jsonPath);
  return {
    json: json.toString(),
    markdown: markdown.toString()
  };
};

describe("View", () => {
  it("injects markdown into file", async () => {
    const { markdown, json } = await setup();
    expect(markdown).toContain("# Programming languages Top Libraries");
    expect(json).toContain("javascript");
  });
});
