const fetch = require("node-fetch");
const { load } = require("cheerio");

const { LIBRARIES_SIZE } = require("../constants");

const dependencies = async () => {
  const URL = "https://www.nuget.org/stats/packages";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const urls = [];
  $("table")
    .first()
    .find("tbody tr")
    .slice(0, LIBRARIES_SIZE)
    .map((k, val) => {
      const el = $(val)
        .find("a")
        .first();
      urls.push({
        name: el.text(),
        url: `https://www.nuget.org${el.attr("href")}`
      });
    });
  return urls;
};

const dependency = async url => {
  const res = await fetch(url);
  const text = await res.text();
  const $ = load(text);
  const [label] = $(".ms-Icon.ms-Icon--Financial")
    .parent()
    .text()
    .trim()
    .split(" ");
  return label.replace(/,/g, "");
};

const csharp = async () => {
  const deps = await dependencies();
  const libraries = [];
  for (let k in deps) {
    const dep = deps[k];
    const downloads = await dependency(dep.url);
    libraries.push({
      ...dep,
      downloads
    });
  }
  return libraries;
};

module.exports = csharp;
