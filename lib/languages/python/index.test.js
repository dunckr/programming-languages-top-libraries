const fetchMock = require("fetch-mock");
const fs = require("fs");
const path = require("path");

const dependenciesFixture = fs
  .readFileSync(path.join(__dirname, "./__fixtures__/top.html"))
  .toString();
const python = require(".");

fetchMock.get("glob:https://pypistats.org/*", dependenciesFixture);

describe("Python", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await python();
    expect(libraries).toEqual([
      { downloads: "2264218", name: "pip" },
      { downloads: "1636287", name: "urllib3" },
      { downloads: "1291870", name: "botocore" },
      { downloads: "1270395", name: "six" },
      { downloads: "1202839", name: "python-dateutil" },
      { downloads: "1071338", name: "s3transfer" },
      { downloads: "1037653", name: "pyyaml" },
      { downloads: "997327", name: "docutils" },
      { downloads: "973309", name: "setuptools" },
      { downloads: "947788", name: "requests" },
      { downloads: "940258", name: "pyasn1" },
      { downloads: "921333", name: "jmespath" },
      { downloads: "920114", name: "certifi" },
      { downloads: "911199", name: "wheel" },
      { downloads: "875078", name: "simplejson" },
      { downloads: "863295", name: "colorama" },
      { downloads: "827107", name: "idna" },
      { downloads: "825100", name: "rsa" },
      { downloads: "806735", name: "futures" },
      { downloads: "799493", name: "awscli" },
      { downloads: "15126106", name: "pip" },
      { downloads: "10357074", name: "urllib3" },
      { downloads: "7947675", name: "botocore" },
      { downloads: "7930926", name: "six" },
      { downloads: "7528471", name: "python-dateutil" },
      { downloads: "6692524", name: "s3transfer" },
      { downloads: "6456723", name: "pyyaml" },
      { downloads: "6184566", name: "docutils" },
      { downloads: "6101071", name: "setuptools" },
      { downloads: "5988300", name: "certifi" },
      { downloads: "5980687", name: "pyasn1" },
      { downloads: "5836413", name: "requests" },
      { downloads: "5767572", name: "jmespath" },
      { downloads: "5316728", name: "wheel" },
      { downloads: "5283489", name: "rsa" },
      { downloads: "5176095", name: "futures" },
      { downloads: "5157156", name: "simplejson" },
      { downloads: "5156374", name: "colorama" },
      { downloads: "5123221", name: "awscli" },
      { downloads: "4946513", name: "idna" },
      { downloads: "66887941", name: "pip" },
      { downloads: "45360182", name: "urllib3" },
      { downloads: "36006690", name: "six" },
      { downloads: "34569976", name: "botocore" },
      { downloads: "32600392", name: "python-dateutil" },
      { downloads: "29518188", name: "s3transfer" },
      { downloads: "27646801", name: "pyyaml" },
      { downloads: "26948029", name: "setuptools" },
      { downloads: "26704943", name: "docutils" },
      { downloads: "25773035", name: "requests" },
      { downloads: "25628404", name: "pyasn1" },
      { downloads: "25041913", name: "certifi" },
      { downloads: "24989230", name: "jmespath" },
      { downloads: "23139217", name: "futures" },
      { downloads: "22732300", name: "idna" },
      { downloads: "22611878", name: "rsa" },
      { downloads: "22219007", name: "awscli" },
      { downloads: "22168450", name: "colorama" },
      { downloads: "20762600", name: "simplejson" },
      { downloads: "19641754", name: "wheel" }
    ]);
  });
});
