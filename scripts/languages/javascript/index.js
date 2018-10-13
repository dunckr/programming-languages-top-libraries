const fetch = require("node-fetch");
const format = require("date-fns/format");
const startOfYesterday = require("date-fns/start_of_yesterday");
const { load } = require("cheerio");

const { LIBRARIES_SIZE } = require("../constants");

const dependencies = async () => {
  const URL = "https://www.npmjs.com/browse/depended";
  const res = await fetch(URL);
  const text = await res.text();
  const $ = load(text);
  const names = [];
  $("section h3")
    .slice(0, LIBRARIES_SIZE)
    .map((k, val) => {
      names.push($(val).text());
    });
  return names;
};

const dependency = async name => {
  const date = format(startOfYesterday(), "YYYY-DD-MM");
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
    const url = `https://www.npmjs.com/package/${name}`;
    libraries.push({
      downloads,
      name,
      url
    });
  }
  return libraries;
};

module.exports = javascript;
