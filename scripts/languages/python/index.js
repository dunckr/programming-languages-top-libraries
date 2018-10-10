const fetch = require("node-fetch");
const { load } = require("cheerio");

const { LIBRARIES_SIZE } = require("../constants");

const python = async () => {
  const URL = "https://pypistats.org/top";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const libraries = [];
  $("table table tr")
    .slice(0, LIBRARIES_SIZE)
    .map((k, val) => {
      const [_, nameEl, downloadsEl] = $(val)
        .find("td")
        .toArray();
      const name = $(nameEl)
        .text()
        .trim();
      libraries.push({
        name,
        downloads: $(downloadsEl)
          .text()
          .trim()
          .replace(/,/g, ""),
        url: `https://pypi.org/project/${name}`
      });
    });
  return libraries;
};

module.exports = python;
