const languages = require("./languages/index");
const view = require("./view/index");

const update = async () => {
  const list = await languages();
  await view(list);
};

update();
