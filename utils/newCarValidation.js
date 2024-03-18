const carPostValidation = (method, cars) => {
  const formatKeys = [
    "plate",
    "manufacture",
    "model",
    "image",
    "rentPerDay",
    "capacity",
    "description",
    "availableAt",
    "transmission",
    "available",
    "type",
    "year",
    "options",
    "specs",
  ];

  if (
    keys.length !== formatKeys.length ||
    !exampleKeys.every((key) => keys.includes(key))
  ) {
    return res.status(400).json({ error: "Invalid data format" });
  }
};

module.exports = { carValidation };
