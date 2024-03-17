const fs = require("fs");

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../api/cars.json`));

module.exports = { fs, cars };
