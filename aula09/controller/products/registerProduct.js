import { v4 } from "uuid";

export function createProduct(req, res, arrayProduct) {
    const product = req.body;

    try {
        validations(product)

        arrayProduct.push({
            id: v4(),
            ...product
        });

        res.json({
            message: "Produto cadastrado com sucesso",
            data: arrayProduct,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

function validations(product) {
    validationName(product.name)
}

function validationName(name) {
    if (!name || name.length < 2) {
        throw Error('O nome do produto é obrigatório e deve ter pelo menos 2 caracters')
    }

    return
}