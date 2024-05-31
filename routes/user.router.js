const { users } = require("../models/users.data");
const {
  userRegistrationValidator,
  userLoginValidator,
} = require("../validation/authValidator");
const { runValidation } = require("../validation/auth.runValidation");
const { getUsers, getLogin } = require("../controllers/users.controllers");

const router = require("express").Router();
router.get("/register", (req, res) => {
  res.status(200).json({ users });
});

router.post("/register", userRegistrationValidator, runValidation, getUsers);

router.post("/login", userLoginValidator, runValidation, getLogin);

module.exports = router;
