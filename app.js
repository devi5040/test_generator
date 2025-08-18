const express = require("express");
require("dotenv").config();
const routes = require("./routes/generateTest");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");
const PORT = process.env.PORT || 5050;
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
