import User from "../model/user.model.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const createdUser = new User({
      name,
      email,
      password,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created Successfully",
      user: {
        id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    let isMatch = true;
    if (user.password !== password) {
      isMatch = false;
    }
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    } else {
      res.status(200).json({
        message: "Login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
