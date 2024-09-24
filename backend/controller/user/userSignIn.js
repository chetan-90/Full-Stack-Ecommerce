const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const userModel = require("../../models/userModel");

async function userSignInController(req, res) {
  try {
    const { email, password} = req.body
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({email})
   
    
    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 ,
      });

      const isProduction = process.env.NODE_ENV === 'production';

      const tokenOption = {
        httpOnly: true,
        secure: isProduction,  // Secure in production, not in development
        sameSite: isProduction ? 'None' : 'Lax',  // SameSite=None for production
        path: '/',
      };

      res.cookie("token", token, tokenOption).status(200).json({
        message: "Login successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please check Password");
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;

