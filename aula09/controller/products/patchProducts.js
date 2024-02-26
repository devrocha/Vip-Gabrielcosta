export function patchProducts(req, res,listProduct){
  const productId = req.params.id
  const index = listProduct.findIndex((element) => element.id == productId)
  const body = req.body

  const newProduct = {
    id: listProduct[index].id,
    ...listProduct[index],
    ...body
  }

  listProduct.splice(index, 1, newProduct)

  res.json(newProduct)
}
