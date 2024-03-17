const express = require("express");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const User = require("../userSchema");

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
    return res.status(411).json({ message: "Email already exist / Incorrect inputs" });
  }

  const existingUser = User.findOne({
    username: body.username,
  });

  if (existingUser) {
    return res.status(411).json({ message: "Email already exist / Incorrect inputs" });
  }

  const dbuser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbuser._id, 
    },
    JWT_SECRET
  );
  res.json({
    message: "user created successfully",
    token: token
  });
});

// signin schema

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

// signin route

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

module.exports = router;
