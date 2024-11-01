const { Router } = require("express");

const { messages } = require("../db.js");
const addMessageRoute = Router();

addMessageRoute.get("/", (req, res) => {
  res.render("form", {});
});

addMessageRoute.post("/", (req, res) => {
  console.log(req.body);
  messages.push({
    text: req.body.author,
    user: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = addMessageRoute;
