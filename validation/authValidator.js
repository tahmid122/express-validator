const { check } = require("express-validator");

exports.userRegistrationValidator = [
  check("username")
    .trim()
    .notEmpty()
    .withMessage("Please provide your name")
    .isLength({ min: 3 })
    .withMessage("You have must provide 3 charecters")
    .isLength({ max: 10 })
    .withMessage("not up to 10 charecters"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Please provide your name")
    .isEmail()
    .withMessage("not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Plase provide password")
    .isLength({ min: 6 })
    .withMessage("minimum 6 charecter")
    .isLength({ max: 8 }),
];

exports.userLoginValidator = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Please provide your name")
    .isEmail()
    .withMessage("not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Plase provide password")
    .isLength({ min: 6 })
    .isLength({ max: 8 }),
];
