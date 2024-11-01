const { Router } = require("express");

const { messages } = require("../db.js");
const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  console.log(messages);
  res.render("index", { messages: messages });
});

messageRouter.get("/:id", (req, res) => {
  let id = req.params.id;
  res.render("message", { message: messages[id] });
});

module.exports = messageRouter;
