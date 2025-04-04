import mongoose, {model, Schema} from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// const MONGODB_URI = process.env.MONGODB_URI?.trim(); // Ensure it's a string and remove spaces

// if (!MONGODB_URI || (!MONGODB_URI.startsWith("mongodb://") && !MONGODB_URI.startsWith("mongodb+srv://"))) {
//   console.error("❌ Invalid or missing MongoDB URI:", MONGODB_URI);
//   process.exit(1); // Stop the app if URI is missing
// }

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => console.log("✅ Connected to MongoDB successfully"))
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err);
//     process.exit(1); // Exit on error
//   });


 // Load environment variables

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ ERROR: Missing MongoDB URI. Check your .env file or environment variables.");
  process.exit(1); // Stop execution
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Stop execution
  });

// mongoose.connect("mongodb+srv://suyash24:suyash24@cluster01.vdwhb.mongodb.net/second-brain")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true }
    
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true ,
    unique: true},
    
})
export const LinkModel = model("Links", LinkSchema);


export const ContentModel = model("Content", ContentSchema);
