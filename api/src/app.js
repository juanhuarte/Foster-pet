const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setHeaders");
const fileupload = require("express-fileupload");

require("./db.js");

const server = express();

server.name = "API";

server.use(fileupload());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); // sirve para mandar archivos
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);

server.use(express.static("images"));

server.use("/", routes);

server.use(errorHandler);

module.exports = server;
