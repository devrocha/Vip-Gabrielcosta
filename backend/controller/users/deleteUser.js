export function deleteUser(req, res, arrayUser){
    const index = arrayUser.findIndex(user => user.id === req.params.id)
  
    arrayUser.splice(index, 1)
  
    res.json(arrayUser)
  }