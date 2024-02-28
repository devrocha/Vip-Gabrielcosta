import { Router } from 'express'
import { createUser } from '../controller/users/registerUser.js'
import { listUser } from '../controller/users/listUsers.js'
import { updateUsers } from '../controller/users/updateUsers.js'
import { deleteUser } from '../controller/users/deleteUser.js'

const router = Router()

const arrayUser = []

router.get(`/`, listUser)
router.post(`/`, createUser)
router.patch('/:id', (req, res) => updateUsers(req, res, arrayUser))
router.delete('/:id', (req, res) => deleteUser(req, res, arrayUser))

export const userRouter = router