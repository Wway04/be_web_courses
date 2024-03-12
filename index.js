const express = require("express");
const app = express();
const route = require("./src/routes");
var methodOverride = require("method-override");

const port = 3333;

// middleware for form data
app.use(
  express.urlencoded({
    extended: true,
  })
);
// middleware for code js: fetch,
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
