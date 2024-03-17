const express = require("express");

const { getAllCar } = require("../controllers/carController");

const router = express.Router();

router.route("/").get(getAllCar);
// router.route("/").get(getAllCar).post(addNewCar);
// router.route("/:id").get(getCarById).patch(updatePatchById).delete(deleteById);

module.exports = router;
