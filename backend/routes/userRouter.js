import { Router } from 'express'
import { createUser } from '../controller/users/registerUser.js'
import { listUser } from '../controller/users/listUsers.js'
import { updateUsers } from '../controller/users/updateUsers.js'
import { deleteUser } from '../controller/users/deleteUser.js'

const router = Router()

router.get(`/`, listUser)
router.post(`/`, createUser)
router.patch('/:id', updateUsers)
router.delete('/:id', deleteUser)

export const userRouter = router