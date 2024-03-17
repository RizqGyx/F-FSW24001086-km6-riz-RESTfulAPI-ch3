const app = require("./src/app.js");

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App Running On : http://localhost:${port}`);
});