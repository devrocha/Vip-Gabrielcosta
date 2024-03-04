import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    age: String,
    email: String,
    password: String,
    customer: [{
        type: Schema.Types.ObjectId,
        ref: 'Customer'    
    }]
})

export const UserModel = model('User', userSchema)