const fetch = require("node-fetch");
const { load } = require("cheerio");

const dependencies = async () => {
  const URL = "https://www.nuget.org/stats/packages";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const links = [];
  $("table")
    .first()
    .find("tbody tr")
    .map((k, val) => {
      const el = $(val)
        .find("a")
        .first();
      links.push({
        name: el.text(),
        link: el.attr("href")
      });
    });
  return links;
};

const dependency = async link => {
  const URL = `https://www.nuget.org${link}`;
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const [label] = $(".ms-Icon--Download")
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
    const downloads = await dependency(dep.link);
    libraries.push({
      ...dep,
      downloads
    });
  }
  return libraries;
};

module.exports = csharp;
