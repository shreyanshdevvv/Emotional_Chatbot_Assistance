import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema ({
    userId : {type : mongoose.Schema.Types.ObjectId , ref: "User"},
    message: String,
    response: String,
    timeStamp: {type: Date, default: Date.now}
});

export default mongoose.model("Chat", chatSchema);
