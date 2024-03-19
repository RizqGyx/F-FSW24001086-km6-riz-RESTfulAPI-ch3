const app = require("./src/app.js");
const dotenv = require("dotenv");

dotenv.config();

var port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Running On : http://localhost:${port}`);
});
