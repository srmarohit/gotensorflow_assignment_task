const axios = require("axios");
const User = require("../models/User");

module.exports = async function fetchData() {
  let res = await axios.get("https://gorest.co.in/public/v2/users");
  let users = await User.find();
  if (users && users.length) return;
  console.log(res);

  await User.insertMany(res.data);
};
