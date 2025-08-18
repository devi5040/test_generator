const serverless = require("serverless-http");
const app = require("../app"); // your existing Express app

module.exports = (req, res) => {
  const handler = serverless(app);
  return handler(req, res);
};
