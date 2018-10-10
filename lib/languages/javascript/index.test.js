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
        name: "lodash",
        url: "https://www.npmjs.com/package/lodash"
      },
      {
        downloads: 3152589,
        name: "request",
        url: "https://www.npmjs.com/package/request"
      },
      {
        downloads: 3152589,
        name: "chalk",
        url: "https://www.npmjs.com/package/chalk"
      },
      {
        downloads: 3152589,
        name: "react",
        url: "https://www.npmjs.com/package/react"
      },
      {
        downloads: 3152589,
        name: "express",
        url: "https://www.npmjs.com/package/express"
      },
      {
        downloads: 3152589,
        name: "commander",
        url: "https://www.npmjs.com/package/commander"
      },
      {
        downloads: 3152589,
        name: "async",
        url: "https://www.npmjs.com/package/async"
      },
      {
        downloads: 3152589,
        name: "moment",
        url: "https://www.npmjs.com/package/moment"
      },
      {
        downloads: 3152589,
        name: "bluebird",
        url: "https://www.npmjs.com/package/bluebird"
      },
      {
        downloads: 3152589,
        name: "debug",
        url: "https://www.npmjs.com/package/debug"
      }
    ]);
  });
});
