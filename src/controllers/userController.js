import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req , res) => {
    const {name , email , password} = req.body;

    const hashedPassword = await bcrypt.hash(password , 10);

    const user = new User({name , email , password: hashedPassword});
    await user.save();

    res.status(201).json({
        message: "User registered successfully",
    });
};

export const loginUser = async (req , res) => {
    const {email , password} = req.body;

    const user = await User.findOne({email});

    if(!user || !(await bcrypt.compare(password , user.password))){
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});

    res.json({
        message: "Login successful",
        token
    })
}

