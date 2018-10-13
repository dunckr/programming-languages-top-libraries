const fetch = require("node-fetch");
const { load } = require("cheerio");

const { LIBRARIES_SIZE } = require("../constants");

const ruby = async () => {
  const URL = "http://bestgems.org/daily";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);

  const libraries = [];
  $("tbody tr")
    .slice(0, LIBRARIES_SIZE)
    .map((k, val) => {
      const [_, downloadsEl, nameEl] = $(val)
        .find("td")
        .toArray();
      const name = $(nameEl).text();
      libraries.push({
        name,
        downloads: $(downloadsEl)
          .text()
          .replace(/,/g, ""),
        url: `https://rubygems.org/gems/${name}`
      });
    });
  return libraries;
};

module.exports = ruby;
