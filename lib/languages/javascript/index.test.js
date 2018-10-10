const nock = require("nock");

const javascript = require(".");

nock("https://www.npmjs.com")
  .get(/.+/)
  .replyWithFile(200, `${__dirname}/__fixtures__/dependencies.html`);
nock("https://api.npmjs.org")
  .get(/.+/)
  .times(200)
  .replyWithFile(200, `${__dirname}/__fixtures__/dependency.json`);

describe("JavaScript", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await javascript();
    expect(libraries.length).toEqual(10);
    expect(libraries).toEqual([
      {
        downloads: 3152589,
        name: "lodash"
      },
      {
        downloads: 3152589,
        name: "request"
      },
      {
        downloads: 3152589,
        name: "chalk"
      },
      {
        downloads: 3152589,
        name: "react"
      },
      {
        downloads: 3152589,
        name: "express"
      },
      {
        downloads: 3152589,
        name: "commander"
      },
      {
        downloads: 3152589,
        name: "async"
      },
      {
        downloads: 3152589,
        name: "moment"
      },
      {
        downloads: 3152589,
        name: "bluebird"
      },
      {
        downloads: 3152589,
        name: "debug"
      }
    ]);
  });
});
