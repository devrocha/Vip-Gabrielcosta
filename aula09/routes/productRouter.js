import { Router } from 'express'
import { listProducts } from '../controller/products/listProducts.js'
import { createProduct } from '../controller/products/registerProduct.js'

const router = Router()

const arrayProducts = []

router.get('/', (req, res) => listProducts(req, res, arrayProducts))
router.post(`/`, (req, res) => createProduct(req, res, arrayProducts))

export const productRouter = router