import { updateUserById } from "../../services/userService.js";

export async function updateUsers(req, res) {
  try {
    const user = await updateUserById(req.params.id,req.body)

    res.json(user)
  } catch (error) {
    res.json({ erro: error.message })
  }
}