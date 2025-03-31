import mongoose, {model, Schema} from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://suyash24:suyash24@cluster01.vdwhb.mongodb.net/second-brain";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined. Set it in environment variables.");
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch((err) => console.error("MongoDB Connection Error ❌", err));
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
