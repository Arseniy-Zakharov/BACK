const createError = require("http-errors")

const errorHandler = (err, req, res, next) => {
  const error = process.env.NODE_ENV === "development"? err: createError(err.code);
  console.log(err);
  res.status(err.code).json(error);
}

module.exports = errorHandler;