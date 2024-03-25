import axios from "./index.js";

export async function getUsers() {
  const users = await axios.get("/users");
  return users.data;
}

export async function newUser(data) {
  const users = await axios.post("/users", data);
  return users.data;
}
