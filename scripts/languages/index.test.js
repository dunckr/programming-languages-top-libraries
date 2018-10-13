const csharp = require("./csharp");
const javascript = require("./javascript");
const php = require("./php");
const python = require("./python");
const ruby = require("./ruby");

const languages = require(".");

jest.mock("./csharp");
jest.mock("./javascript");
jest.mock("./php");
jest.mock("./python");
jest.mock("./ruby");

describe("Languages", () => {
  it("downloads and builds the languages object", async () => {
    const list = await languages();
    expect(list).toHaveProperty(
      "csharp",
      "javascript",
      "php",
      "python",
      "ruby"
    );
  });
});
