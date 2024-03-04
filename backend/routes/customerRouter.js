import { Router } from 'express'
import { createCustomer } from '../controller/customer/registerCustomer.js'

const router = Router()

router.post(`/`, createCustomer)

export const customerRouter = router