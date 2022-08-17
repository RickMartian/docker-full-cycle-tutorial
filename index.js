const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
);

const app = express();
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("Successfully connected to database");
});

app.get("/", async (request, response) => {
  response.status(200).send("Hello World com Node!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at ${port} port`);
});
