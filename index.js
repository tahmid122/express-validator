const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const PORT = 3434;
const router = require("./routes/user.router");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/register", (req, res) => {
  res.status(200).json({ users });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
