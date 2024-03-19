const { fs, cars } = require("../utils/readingJSON");
const { generateRandomId } = require("../utils/generateId");
const { response } = require("../utils/response");
const { carPostValidation } = require("../utils/newCarValidation");
const { validateUpdateData } = require("../utils/updateValidation");

// GET Method Start ==========================
const getAllCar = (req, res) => {
  try {
    response(200, cars, "Successfully fetched all cars", req, res, true);
  } catch (error) {
    response(500, null, "Internal Server Error", req, res);
  }
};

const getCarById = (req, res) => {
  try {
    const getId = req.params.id;
    const car = cars.find((car) => car.id === getId);

    if (!car) {
      return response(404, null, `Car with ID : ${getId} not found`, req, res);
    }

    response(200, car, `Successfully fetched car by ID : ${getId}`, req, res);
  } catch (error) {
    response(500, null, "Internal Server Error", req, res);
  }
};

// POST Method Start ==========================
const addNewCar = (req, res) => {
  try {
    const {
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      type,
      year,
      options,
      specs,
    } = req.body;

    const isValid = carPostValidation(req.body);
    if (!isValid) {
      return response(400, req.body, `Invalid Data Format`, req, res);
    }

    const newCar = {
      id: generateRandomId(),
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      type,
      year,
      options,
      specs,
    };

    cars.push(newCar);
    fs.writeFileSync(`${__dirname}/../api/cars.json`, JSON.stringify(cars));

    response(201, newCar, "Car added successfully", req, res, true);
  } catch (error) {
    response(500, null, "Internal Server Error", req, res);
  }
};

// UPDATE [PUT] Method Start ================
const updatePutById = (req, res) => {
  try {
    const { id } = req.params;
    const { plate, manufacture, model, year, ...rest } = req.body;
    const index = cars.findIndex((car) => car.id === id);

    if (index === -1) {
      return response(404, null, `Car with ID : ${id} not found`, req, res);
    }

    const allowedKeys = [
      "plate",
      "manufacture",
      "model",
      "year",
      ...Object.keys(rest),
    ];

    if (!validateUpdateData(req.body, allowedKeys)) {
      return response(400, null, `Invalid update data format`, req, res);
    }

    const updatedCar = {
      ...cars[index],
      plate,
      manufacture,
      model,
      year,
      ...rest,
    };
    cars[index] = updatedCar;
    fs.writeFileSync(`${__dirname}/../api/cars.json`, JSON.stringify(cars));

    response(
      200,
      updatedCar,
      `Car with ID : ${id} updated successfully`,
      req,
      res
    );
  } catch (error) {
    response(500, null, "Internal Server Error", req, res);
  }
};

// UPDATE [PATCH] Method Start ================
const updatePatchById = (req, res) => {
  try {
    const { id } = req.params;
    const { plate, manufacture, model, year, ...rest } = req.body;
    const index = cars.findIndex((car) => car.id === id);

    if (index === -1) {
      return response(404, null, `Car with ID : ${id} not found`, req, res);
    }

    const allowedKeys = [
      "plate",
      "manufacture",
      "model",
      "year",
      ...Object.keys(rest),
    ];

    if (!validateUpdateData(req.body, allowedKeys)) {
      return response(400, null, `Invalid update data format`, req, res);
    }

    const updatedCar = {
      ...cars[index],
      plate,
      manufacture,
      model,
      year,
      ...rest,
    };
    cars[index] = updatedCar;
    fs.writeFileSync(`${__dirname}/../api/cars.json`, JSON.stringify(cars));

    response(
      200,
      updatedCar,
      `Car with ID : ${id} updated successfully`,
      req,
      res
    );
  } catch (error) {
    console.error(error);
    response(500, null, "Internal Server Error", req, res);
  }
};

// DELETE Method Start ========================
const deleteById = (req, res) => {
  try {
    const { id } = req.params;
    const index = cars.findIndex((car) => car.id === id);

    if (index === -1) {
      return response(404, null, `Car with ID : ${id} not found`, req, res);
    }

    const deletedCar = cars.splice(index, 1)[0];
    fs.writeFileSync(`${__dirname}/../api/cars.json`, JSON.stringify(cars));

    response(
      200,
      deletedCar,
      `Car with ID : ${id} deleted successfully`,
      req,
      res
    );
  } catch (error) {
    response(500, null, "Internal Server Error", req, res);
  }
};

module.exports = {
  getAllCar,
  getCarById,
  addNewCar,
  updatePutById,
  updatePatchById,
  deleteById,
};
