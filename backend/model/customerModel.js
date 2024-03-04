import { Schema, model } from 'mongoose'

const customerSchema = new Schema({
    name: String,
    address: {
        zipCode: String,
        street: String,
        neighborhood: String,
        state: String,
        city: String
    },
    createAt: Date,
    updateAt: Date
})

export const CustomerModel = model('Customer', customerSchema)