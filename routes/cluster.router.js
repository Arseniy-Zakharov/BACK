const Router = require("express").Router;
const router = Router();
const ClusterController = require("../controllers/cluster.controller");

router.post(
  "/createClusters",
  ClusterController.createClusters
);

module.exports = router;
