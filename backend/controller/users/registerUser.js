import { saveUser } from "../../services/userService.js";

export async function createUser(req, res) {
  try {
    const user = await saveUser(req.body)

    res.json(user)
  } catch (error) {
    res.json({ erro: error.message })
  }
}