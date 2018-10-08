const { load } = require("cheerio");

const dependencies = async () => {
  const URL = "https://packagist.org/explore/popular";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const links = [];
  $(".package-item a").map((k, val) => {
    const el = $(val);
    links.push({
      name: el.text(),
      link: el.attr("href")
    });
  });
  return links;
};

const dependency = async link => {
  const url = `https://packagist.org${link}`;
  const res = await fetch(url);
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
    const downloads = await dependency(dep.link);
    libraries.push({
      ...dep,
      downloads
    });
  }
  return libraries;
};

module.exports = php;
