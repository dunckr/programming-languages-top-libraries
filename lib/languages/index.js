const csharp = require("./csharp");
const javascript = require("./javascript");
const php = require("./php");
const python = require("./python");
const ruby = require("./ruby");

const languages = async () => {
  return {
    csharp: await csharp(),
    javascript: await javascript(),
    php: await php(),
    python: await python(),
    ruby: await ruby()
  };
};

module.exports = languages;
