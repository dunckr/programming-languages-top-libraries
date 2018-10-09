const nock = require("nock");

const ruby = require(".");

nock("http://bestgems.org")
  .get(/.*/)
  .times(200)
  .replyWithFile(200, `${__dirname}/__fixtures__/daily.html`);

describe("Ruby", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await ruby();
    expect(libraries).toEqual([
      {
        downloads: "676756",
        name: "rubygems-update"
      },
      {
        downloads: "669610",
        name: "rspec-core"
      },
      {
        downloads: "669331",
        name: "rspec-expectations"
      },
      {
        downloads: "668061",
        name: "rspec-mocks"
      },
      {
        downloads: "667100",
        name: "rspec-support"
      },
      {
        downloads: "663704",
        name: "diff-lcs"
      },
      {
        downloads: "645002",
        name: "rspec"
      },
      {
        downloads: "247400",
        name: "i18n"
      },
      {
        downloads: "234887",
        name: "rack"
      },
      {
        downloads: "227140",
        name: "multi_json"
      },
      {
        downloads: "226892",
        name: "aws-sdk-core"
      },
      {
        downloads: "224678",
        name: "activesupport"
      },
      {
        downloads: "215101",
        name: "bundler"
      },
      {
        downloads: "213201",
        name: "rake"
      },
      {
        downloads: "209693",
        name: "concurrent-ruby"
      },
      {
        downloads: "208259",
        name: "tzinfo"
      },
      {
        downloads: "207212",
        name: "logstash-filter-translate"
      },
      {
        downloads: "207130",
        name: "logstash-output-sqs"
      },
      {
        downloads: "204880",
        name: "thor"
      },
      {
        downloads: "203249",
        name: "mime-types"
      }
    ]);
  });
});
