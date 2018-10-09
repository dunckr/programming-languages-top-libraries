const fetch = require("node-fetch");
const format = require("date-fns/format");
const { load } = require("cheerio");

const dependencies = async () => {
  const URL = "https://www.npmjs.com/browse/depended";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const names = [];
  $("section h3").map((k, val) => {
    names.push($(val).text());
  });
  return names;
};

const dependency = async name => {
  const date = format(new Date(), "YYYY-MM-DD");
  const URL = `https://api.npmjs.org/downloads/point/${date}/${name}`;
  const res = await fetch(URL);
  return await res.json();
};

const javascript = async () => {
  const names = await dependencies();
  const libraries = [];
  for (let k in names) {
    const name = names[k];
    const { downloads } = await dependency(name);
    libraries.push({
      name,
      downloads
    });
  }
  return libraries;
};

module.exports = javascript;
