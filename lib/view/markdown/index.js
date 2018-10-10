const Row = library => {
  return `|\t${library.name}\t|\t${library.downloads}\t|`;
};

const Table = (title, libraries) => {
  const rows = libraries
    .map(v => {
      return Row(v);
    })
    .join("\n");
  return `# ${title.toUpperCase()}

|\tName\t|\tDownloads\t|
${rows}`;
};
const index = languages =>
  Object.entries(languages)
    .map(([k, v]) => {
      return Table(k, v);
    })
    .join("\n\n");

module.exports = index;
