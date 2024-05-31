const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  const newList = errors.array().map((errMsg) => {
    return errMsg.msg;
  });
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: newList });
  }
  next();
};
