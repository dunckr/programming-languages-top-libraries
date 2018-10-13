const numberWithCommas = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const upperCaseFirstLetter = word =>
  `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`;

const Row = library => {
  const name = upperCaseFirstLetter(library.name);
  const downloads = numberWithCommas(library.downloads);
  return `|\t[${name}](${library.url})\t|\t${downloads}\t|`;
};

const Table = (title, libraries) => {
  const rows = libraries.map(v => Row(v)).join("\n");
  return `# ${upperCaseFirstLetter(title)}

|\tName\t|\tDownloads\t|
| ------------- | ------------- |
${rows}`;
};
const index = languages =>
  Object.entries(languages)
    .map(([k, v]) => Table(k, v))
    .join("\n\n");

module.exports = index;
