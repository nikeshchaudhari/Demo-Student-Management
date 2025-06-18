const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const dbConnect =async () => {
  try {
    await mongoose.connect()
  } catch (err) {}
};

app.use(bodyParser.json());

module.exports = app;
