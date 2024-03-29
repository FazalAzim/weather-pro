const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 8000;

const pages_path = path.join(__dirname, "./src/pages");
const components_path = path.join(__dirname, "./src/component");

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "hbs");
app.set("views", pages_path);
hbs.registerPartials(components_path);

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/about", (req, res) => {
  res.render("aboutpage");
});

app.get("/weather", (req, res) => {
  res.render("weatherpage");
});

app.get("*", (req, res) => {
  res.render("errorpage");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
