export function updateUsers(req, res, arrayUser) {
  const index = arrayUser.findIndex(user => user.id === req.params.id)

  const newUser = {
    id: arrayUser[index].id,
    ...arrayUser[index],
    ...req.body
  }

  arrayUser.splice(index, 1, newUser)

  res.json(arrayUser[index])
}