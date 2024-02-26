export function idProducts(req, res, listProduct) {
  const productId = req.params.id;

  const findProduct = listProduct.find((element) => element.id == productId);

  if (!findProduct) {
    return res.send("Produto não encontrado");
  }

  res.json(findProduct);
};
