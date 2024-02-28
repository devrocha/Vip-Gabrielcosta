import { v4 } from "uuid";

export function createUser(req, res, arrayUser){
    const user = {
      id: v4(),
      ...req.body
    }
  
    arrayUser.push(user)
  
    res.json(arrayUser)
  }