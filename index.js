const languages = require("./lib/languages");
const view = require("./lib/view");

const libraryDownloads = async () => {
  const list = await languages();
  await view(list);
};

libraryDownloads();
