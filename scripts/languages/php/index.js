const fetch = require("node-fetch");
const { load } = require("cheerio");

const { LIBRARIES_SIZE } = require("../constants");

const dependencies = async () => {
  const URL = "https://packagist.org/explore/popular";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const urls = [];
  $(".package-item a")
    .slice(0, LIBRARIES_SIZE)
    .map((k, val) => {
      const el = $(val);
      urls.push({
        name: el.text(),
        url: `https://packagist.org${el.attr("href")}`
      });
    });
  return urls;
};

const dependency = async url => {
  const res = await fetch(`${url}.json`);
  const {
    package: {
      downloads: { daily }
    }
  } = await res.json();
  return daily;
};

const php = async () => {
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

module.exports = php;
