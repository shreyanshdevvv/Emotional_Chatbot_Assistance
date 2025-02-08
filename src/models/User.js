import mongoose from "mongoose";

const userSchema = new Schema ({
    name: String,
    email: {type: String, unique: true},
    password: String
});

export default mongoose.model("User", userSchema);
