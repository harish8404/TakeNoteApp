const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../utils/generateToken");

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
      token: generateToken(createUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Erro Occured in User Creation");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userFind = await User.findOne({ email });

  if (userFind && (await userFind.matchPassword(password))) {
    res.json({
      _id: userFind._id,
      name: userFind.name,
      email: userFind.email,
      isAdmin: userFind.isAdmin,
      pic: userFind.pic,
      token: generateToken(userFind._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

module.exports = { registerUser, authUser };
