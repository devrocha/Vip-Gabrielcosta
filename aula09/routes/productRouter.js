import { Router } from 'express'
import { listProducts } from '../controller/products/listProducts.js'
import { createProduct } from '../controller/products/registerProduct.js'
import { idProducts } from '../controller/products/idProduct.js'
import { patchProducts } from '../controller/products/patchProducts.js'
import { deleteProducts } from '../controller/products/deleteProducts.js'


const router = Router()

const arrayProducts = []

router.get('/', (req, res) => listProducts(req, res, arrayProducts))
router.get('/:id', (req, res) => idProducts(req, res, arrayProducts))
router.post(`/`, (req, res) => createProduct(req, res, arrayProducts))
router.patch('/:id', (req, res) => patchProducts(req, res, arrayProducts))
router.delete('/:id', (req, res) => deleteProducts(req, res, arrayProducts))

export const productRouter = router