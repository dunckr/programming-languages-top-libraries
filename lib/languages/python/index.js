const { load } = require("cheerio");

const python = async () => {
  const URL = "https://pypistats.org/top";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const libraries = [];
  $("table table tr").map((k, val) => {
    const [_, name, downloads] = $(val)
      .find("td")
      .toArray();
    libraries.push({
      name: $(name)
        .text()
        .trim(),
      downloads: $(downloads)
        .text()
        .trim()
        .replace(/,/g, "")
    });
  });
  return libraries;
};

module.exports = python;
