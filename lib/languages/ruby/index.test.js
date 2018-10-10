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
      { downloads: "676756", name: "rubygems-update" },
      { downloads: "669610", name: "rspec-core" },
      { downloads: "669331", name: "rspec-expectations" },
      { downloads: "668061", name: "rspec-mocks" },
      { downloads: "667100", name: "rspec-support" },
      { downloads: "663704", name: "diff-lcs" },
      { downloads: "645002", name: "rspec" },
      { downloads: "247400", name: "i18n" },
      { downloads: "234887", name: "rack" },
      { downloads: "227140", name: "multi_json" }
    ]);
  });
});
