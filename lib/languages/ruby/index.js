const { load } = require("cheerio");

const ruby = async () => {
  const URL = "http://bestgems.org/daily";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);

  const libraries = [];
  $("tbody tr").map((k, val) => {
    const [_, downloads, name] = $(val)
      .find("td")
      .toArray();
    libraries.push({
      name: $(name).text(),
      downloads: $(downloads).text().replace(/,/g,'')
    });
  });
  return libraries;
};

module.exports = ruby;
