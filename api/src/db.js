const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_DB_URI } = process.env;

mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to mongoDB", error.message);
  });
