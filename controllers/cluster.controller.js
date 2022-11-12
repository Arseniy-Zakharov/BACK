const createError = require("http-errors");
const path = require("path");

class ClusterController {
  static createClusters(req, res, next) {
    try {
      console.log(req.files);
      console.log(req.files);
      if (
        !req.files ||
        Object.keys(req.files).length === 0
      ) {
        const err = createError(
          400,
          "No file were uploaded."
        );
        return res.status(err.status).json(err);
      }

      return res
        .status(200)
        .sendFile(path.join(__dirname, "../1.jpg"));
    } catch (err) {
      next(createError(500), err.message);
    }
  }
}

module.exports = ClusterController;
