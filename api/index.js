// const serverless = require("serverless-http");
// const app = require("../app"); // your existing Express app

// module.exports = (req, res) => {
//   const handler = serverless(app);
//   return handler(req, res);
// };
// api/index.js
const express = require("express");

const routes = require("../routes/generateTest");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

app.get("/integration-test", (req, res) => {
  res.json({ message: "Integration test working 🚀" });
});

// Export Express app directly
module.exports = app;
