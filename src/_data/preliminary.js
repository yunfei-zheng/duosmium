module.exports = async () => {
  // don't run on serverless requests
  if (process.env.ELEVENTY_SERVERLESS) return;

  const yaml = require("js-yaml");
  const fs = require("fs/promises");

  try {
    const fileContents = await fs.readFile("./data/preliminary.yaml", "utf8");
    const doc = yaml.load(fileContents);

    if (typeof doc === "undefined") return [];

    return doc.map((name) => name.split(".")[0]);
  } catch (e) {
    console.error(e);
  }
};
