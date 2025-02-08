import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import chatRoutes from "./src/routes/chatRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import {registerUser , loginUser} from "./src/controllers/userController.js";
import User from "./src/models/User.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));
