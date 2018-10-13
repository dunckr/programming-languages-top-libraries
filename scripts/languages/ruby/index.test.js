const nock = require("nock");

const ruby = require(".");

nock("http://bestgems.org")
  .get(/.*/)
  .times(200)
  .replyWithFile(200, `${__dirname}/__fixtures__/daily.html`);

describe("Ruby", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await ruby();
    expect(libraries.length).toEqual(10);
    expect(libraries).toEqual([
      {
        downloads: "676756",
        name: "rubygems-update",
        url: "https://rubygems.org/gems/rubygems-update"
      },
      {
        downloads: "669610",
        name: "rspec-core",
        url: "https://rubygems.org/gems/rspec-core"
      },
      {
        downloads: "669331",
        name: "rspec-expectations",
        url: "https://rubygems.org/gems/rspec-expectations"
      },
      {
        downloads: "668061",
        name: "rspec-mocks",
        url: "https://rubygems.org/gems/rspec-mocks"
      },
      {
        downloads: "667100",
        name: "rspec-support",
        url: "https://rubygems.org/gems/rspec-support"
      },
      {
        downloads: "663704",
        name: "diff-lcs",
        url: "https://rubygems.org/gems/diff-lcs"
      },
      {
        downloads: "645002",
        name: "rspec",
        url: "https://rubygems.org/gems/rspec"
      },
      {
        downloads: "247400",
        name: "i18n",
        url: "https://rubygems.org/gems/i18n"
      },
      {
        downloads: "234887",
        name: "rack",
        url: "https://rubygems.org/gems/rack"
      },
      {
        downloads: "227140",
        name: "multi_json",
        url: "https://rubygems.org/gems/multi_json"
      }
    ]);
  });
});
