import mongoose, { mongo } from "mongoose"
import { BACKEND_URL } from "./config";
mongoose.connect(BACKEND_URL);
const ObjectId = mongoose.Schema.Types.ObjectId


const userSchema = new mongoose.Schema({
    email: {type:String , require:true},
    password: {type:String , require:true}
});

const tagSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }

});  


const contentSchema = new mongoose.Schema({
    type: {type: String, require: true},
    link: {type: String, require: true},
    title: {type: String, require: true},
    tags: [{type: ObjectId, ref: 'Tag' , default:[]}],
    userId: {type: ObjectId, ref: 'User', required: true },

});

const linkSchema = new mongoose.Schema({
    hash:{ type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

});


export const usermodel = mongoose.model("User", userSchema);
export const tagmodel = mongoose.model("Tag", tagSchema);
export const contentmodel = mongoose.model("Content", contentSchema);
export const linkmodel = mongoose.model("Link", linkSchema);