require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const MONGO_DB = process.env.MONGO_DB;
const PORT = process.env.PORT


const app = express();
app.use(express.json());





mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
