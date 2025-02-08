import { timeStamp } from "console";
import { response } from "express";
import mongoose, { Schema } from "mongoose";
import { type } from "os";

const chatSchema = new Schema ({
    userId : {type : mongoose.Schema.Types.ObjectId , ref: "User"},
    message: String,
    response: String,
    timeStamp: {type: Date, default: Date.now}
});

export default mongoose.model("Chat", chatSchema);
