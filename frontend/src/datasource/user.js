import axios from "./index.js";

export async function getUsers(){
    const users = await axios.get("/users")
    return users.data
}