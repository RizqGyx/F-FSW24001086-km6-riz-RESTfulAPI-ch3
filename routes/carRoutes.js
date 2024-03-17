const express = require("express");

const { getAllCar, addNewCar } = require("../controllers/carController");

const router = express.Router();

router.route("/").get(getAllCar).post(addNewCar);
// router.route("/:id").get(getCarById).patch(updatePatchById).delete(deleteById);

module.exports = router;
