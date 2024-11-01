const express = require("express");
const path = require("node:path");
const PORT = process.env.PORT || 3000;

const addMessageRoute = require("./routes/addMessageRoute");
const messageRouter = require("./routes/messagesRoute");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/new", addMessageRoute);
app.use("/", messageRouter);

app.listen(PORT, (req, res) => {
  console.log("Listening on port 3000");
});
