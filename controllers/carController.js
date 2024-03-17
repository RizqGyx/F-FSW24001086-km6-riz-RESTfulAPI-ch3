const { fs, cars } = require("../utils/readingJSON");

// GET Method Start ==========================
const getAllCar = (req, res, next) => {
  res.status(200).json({
    status: "success",
    totalData: cars.length,
    requestAt: req.requestTime,
    data: { cars },
  });
};

const getCarById = (req, res, next) => {
  const getId = req.params.id;

  res.status(200).json({
    status: "success",
    totalData: cars.length,
    requestAt: req.requestTime,
    data: { cars },
  });
};

// POST Method Start ==========================
const addNewCar = (req, res, next) => {};

// UPDATE [PUT] Method Start ================
const updatePutById = (req, res, next) => {};

// UPDATE [PATCH] Method Start ================
const updatePatchById = (req, res, next) => {};

// DELETE Method Start ========================
const deleteById = (req, res, next) => {};

module.exports = {
  getAllCar,
  getCarById,
  addNewCar,
  updatePutById,
  updatePatchById,
  deleteById,
};
