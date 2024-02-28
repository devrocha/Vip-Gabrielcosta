import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    age: String,
    email: String,
    password: String
})

export const UserModel = model('User', userSchema)