export function deleteProducts(req, res,listProduct){
  const productId = req.params.id
  const index = listProduct.findIndex((element) => element.id == productId)

  listProduct.splice(index, 1)

  res.json(listProduct)
}