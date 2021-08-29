const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  const createUser = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (createUser) {
    res.status(201);
    res.json({
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
      isAdmin: createUser.isAdmin,
      pic: createUser.pic,
    });
  } else {
    res.status(400);
    throw new Error("Erro Occured in User Creation");
  }
});

module.exports = { registerUser };
