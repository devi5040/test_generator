// const serverless = require("serverless-http");
// const app = require("../app"); // your existing Express app

// module.exports = (req, res) => {
//   const handler = serverless(app);
//   return handler(req, res);
// };
// api/index.js
const express = require("express");
const app = express();

app.get("/integration-test", (req, res) => {
  res.json({ message: "Integration test working 🚀" });
});

// Export Express app directly
module.exports = app;
