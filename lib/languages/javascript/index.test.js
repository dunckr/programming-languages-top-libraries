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
      },
      {
        downloads: 3152589,
        name: "prop-types"
      },
      {
        downloads: 3152589,
        name: "react-dom"
      },
      {
        downloads: 3152589,
        name: "underscore"
      },
      {
        downloads: 3152589,
        name: "fs-extra"
      },
      {
        downloads: 3152589,
        name: "mkdirp"
      },
      {
        downloads: 3152589,
        name: "babel-runtime"
      },
      {
        downloads: 3152589,
        name: "uuid"
      },
      {
        downloads: 3152589,
        name: "body-parser"
      },
      {
        downloads: 3152589,
        name: "glob"
      },
      {
        downloads: 3152589,
        name: "colors"
      },
      {
        downloads: 3152589,
        name: "classnames"
      },
      {
        downloads: 3152589,
        name: "yargs"
      },
      {
        downloads: 3152589,
        name: "axios"
      },
      {
        downloads: 3152589,
        name: "jquery"
      },
      {
        downloads: 3152589,
        name: "webpack"
      },
      {
        downloads: 3152589,
        name: "minimist"
      },
      {
        downloads: 3152589,
        name: "rxjs"
      },
      {
        downloads: 3152589,
        name: "babel-core"
      },
      {
        downloads: 3152589,
        name: "through2"
      },
      {
        downloads: 3152589,
        name: "yeoman-generator"
      },
      {
        downloads: 3152589,
        name: "tslib"
      },
      {
        downloads: 3152589,
        name: "q"
      },
      {
        downloads: 3152589,
        name: "inquirer"
      },
      {
        downloads: 3152589,
        name: "aws-sdk"
      },
      {
        downloads: 3152589,
        name: "vue"
      },
      {
        downloads: 3152589,
        name: "cheerio"
      }
    ]);
  });
});
