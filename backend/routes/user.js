const express = require("express");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const {User, Account} = require("../userSchema");
// const Account = require("../userSchema");
const { authMiddleware } = require("../middleware");

// signup schema

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

// signup route

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);

  if (!success) {
    return res
      .status(411)
      .json({ message: "Email already exist / Incorrect inputs" });
  }

  const existingUser = await User.findOne({
    username: body.username,
  });

  if (existingUser) {
    return res
      .status(411)
      .json({ message: "Email already exist / Incorrect inputs" });
  }

  const user = await User.create(body);

  // creating account of the user with some random balance

  const userID = user._id;

  await Account.create({
    userId:userID,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );
  
  res.json({
    message: "user created successfully",
    token: token,
  });
});

// signin schema

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

// signin route

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

// updation of the profile

const updateBody = zod.object({
  firstName: zod.string().optional(),
  password: zod.string().optional(),
  LastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
});

// to serach for users for payment either by last name or first name

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  // const users = await User.find({
  //   $or: [
  //     {
  //       firstName: {
  //         $regex: filter,
  //       },
  //     },
  //     {
  //       lastName: {
  //         $regex: filter,
  //       },
  //     },
  //   ],
  // }).lean();

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
