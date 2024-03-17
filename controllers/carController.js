const { fs, cars } = require("../utils/readingJSON");

const getAllCar = (req, res, next) => {
  res.status(200).json({
    status: "success",
    totalData: cars.length,
    requestAt: req.requestTime,
    data: { cars },
  });
};

module.exports = {
  getAllCar,
};
