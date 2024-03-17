const express = require("express");

const {
  getAllCar,
  getCarById,
  addNewCar,
  updatePutById,
  updatePatchById,
  deleteById,
} = require("../controllers/carController");

const router = express.Router();

router.route("/").get(getAllCar).post(addNewCar);
router
  .route("/:id")
  .get(getCarById)
  .put(updatePutById)
  .patch(updatePatchById)
  .delete(deleteById);

module.exports = router;
