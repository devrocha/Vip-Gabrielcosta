import { deleteUserById } from "../../services/userService.js";

export async function deleteUser(req, res) {
  try {
    const user = await deleteUserById(req.params.id)

    res.json(user)
  } catch (error) {
    res.json({ erro: error.message })
  }
}