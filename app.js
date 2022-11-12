const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const errorHandler = require("./utils/middlewares/errorHandler");
const helmet = require("helmet");
const clusterRouter = require("./routes/cluster.router");
const fileUpload = require("express-fileupload");

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());

app.use("/cluster", clusterRouter);

app.use(errorHandler);

module.exports = app;
