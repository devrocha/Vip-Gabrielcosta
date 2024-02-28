import { findAllUsers } from "../../services/userService.js"

export async function listUser(req, res) {
  try {
    const users = await findAllUsers()

    res.json(users)
  } catch (error) {
    res.json({ erro: error.message })
  }
}