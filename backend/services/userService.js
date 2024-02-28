import { UserModel } from '../model/userModel.js'

export async function saveUser(data) {
    try {
        const user = await UserModel.create(data)

        return user
    } catch (error) {
        throw Error(error)
    }
}

export async function findAllUsers() {
    try {
        const users = await UserModel.find()

        return users
    } catch (error) {
        throw Error(error)
    }
}

export async function updateUserById(userId, data) {
    const user = await UserModel.findByIdAndUpdate(userId, data)

    return user
}

export async function deleteUserById(userId) {
    const user = await UserModel.findByIdAndDelete(userId)

    return user
}