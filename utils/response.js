const response = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      payload: data,
      totalData: data.length,
      message,
      requestAt: req.requestTime,
    },
  ]);
};

module.exports = { response };
