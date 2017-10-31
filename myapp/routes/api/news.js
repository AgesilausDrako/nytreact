const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/article/books"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/article/:id"
router
  .route("/api/saved")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;