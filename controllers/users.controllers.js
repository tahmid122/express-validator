const { users } = require("../models/users.data");

exports.getUsers = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  let newUser = { username, email, password };
  users.push(newUser);
  res.status(200).json({
    users,
  });
};

exports.getLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === "tahmid@gmail.com" && password === "123456") {
    res.status(201).json({ message: "Successfully LogedIn" });
  } else {
    res.status(401).json({
      message: "email or password in invalid",
    });
  }
};
