const fs = require("fs");

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../api/cars.json`));

const getAllCar = (req, res, next) => {
  res.status(200).json({
    status: "success",
    totalData: cars.length,
    requestAt: req.requestTime,
    data: { cars },
  });
};

const addNewCar = (req, res, next) => {
  const newCar = req.body;

  customers.push(newCar);
  fs.writeFile(
    `${__dirname}/../api/cars.json`,
    JSON.stringify(customers),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          cars: newCar,
        },
      });
    }
  );
};

module.exports = {
  getAllCar,
  addNewCar,
};
