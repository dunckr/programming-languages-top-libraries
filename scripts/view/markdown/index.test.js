const generate = require("./index");
const languages = require("../__fixtures__/languages.json");

describe("Generate", () => {
  it("creates markdown", () => {
    expect(generate(languages)).toContain("# JAVASCRIPT");
  });
});
