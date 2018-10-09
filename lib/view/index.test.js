const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./__fixtures__/markdown.md");
const view = require(".");

const data = [
  {
    downloads: 209569,
    link: "/packages/symfony/polyfill-mbstring",
    name: "symfony/polyfill-mbstring"
  },
  {
    downloads: 209569,
    link: "/packages/psr/log",
    name: "psr/log"
  },
  {
    downloads: 209569,
    link: "/packages/symfony/console",
    name: "symfony/console"
  }
];

describe("View", () => {
  it("injects into file", async () => {
    // await view("## Downloads", filePath, data);
    // const libraries = await python();
    // expect(libraries).toEqual([]);
  });
});
