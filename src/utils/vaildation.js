const validator = require("validator");

const valiidateSignUpDate = (req) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  } else if (!validator.isEmail(email)) {
    throw new Error("email is not vaild");
  } else if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    throw new Error("Please enter the Strong Password");
  }
};

module.exports = {
  valiidateSignUpDate,
};
