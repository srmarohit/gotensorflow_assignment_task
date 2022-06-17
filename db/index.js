const mongoose = require("mongoose");

module.exports = mongoose
  .connect(
    process.env.MONGO_DB_URI ||
      "mongodb://localhost:27017/tensorflow?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(" Mongo DB 1 Connection Successfull!");
    require("../services")();
  })
  .catch((err) => {
    console.log(err);
  });
