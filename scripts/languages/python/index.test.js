const nock = require("nock");

const python = require(".");

nock("https://pypistats.org")
  .get(/.*/)
  .replyWithFile(200, `${__dirname}/__fixtures__/top.html`);

describe("Python", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await python();
    expect(libraries.length).toEqual(10);
    expect(libraries).toEqual([
      {
        downloads: "2264218",
        name: "pip",
        url: "https://pypi.org/project/pip"
      },
      {
        downloads: "1636287",
        name: "urllib3",
        url: "https://pypi.org/project/urllib3"
      },
      {
        downloads: "1291870",
        name: "botocore",
        url: "https://pypi.org/project/botocore"
      },
      {
        downloads: "1270395",
        name: "six",
        url: "https://pypi.org/project/six"
      },
      {
        downloads: "1202839",
        name: "python-dateutil",
        url: "https://pypi.org/project/python-dateutil"
      },
      {
        downloads: "1071338",
        name: "s3transfer",
        url: "https://pypi.org/project/s3transfer"
      },
      {
        downloads: "1037653",
        name: "pyyaml",
        url: "https://pypi.org/project/pyyaml"
      },
      {
        downloads: "997327",
        name: "docutils",
        url: "https://pypi.org/project/docutils"
      },
      {
        downloads: "973309",
        name: "setuptools",
        url: "https://pypi.org/project/setuptools"
      },
      {
        downloads: "947788",
        name: "requests",
        url: "https://pypi.org/project/requests"
      }
    ]);
  });
});
