const { Parser } = require("json2csv");

module.exports = (data) => {
  const fields = ["name", "email", "gender"];
  const opts = { fields };

  console.log("json2csv conversion");

  try {
    const parser = new Parser(opts);
    const csv = parser.parse(data);
    console.log(csv);
    return csv;
  } catch (err) {
    console.error(err);
  }
};
