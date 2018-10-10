const numberWithCommas = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Row = library => {
  const downloads = numberWithCommas(library.downloads);
  return `|\t[${library.name}](${library.url})\t|\t${downloads}\t|`;
};

const Table = (title, libraries) => {
  const rows = libraries.map(v => Row(v)).join("\n");
  return `# ${title.toUpperCase()}

|\tName\t|\tDownloads\t|
| ------------- | ------------- |
${rows}`;
};
const index = languages =>
  Object.entries(languages)
    .map(([k, v]) => Table(k, v))
    .join("\n\n");

module.exports = index;
