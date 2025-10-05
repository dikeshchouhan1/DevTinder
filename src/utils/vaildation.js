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

const validateEditProfileData=(req)=>{
  const allowedEditFields=[
    "firstName","lastName","email","photoUrl","gender","age","about","skills",
  ]
 const isEditAllowed=  Object.keys(req.body).every((field)=>
   allowedEditFields.includes(field)
)
return isEditAllowed;
}


module.exports = {
  valiidateSignUpDate,
  validateEditProfileData
};
