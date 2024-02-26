export function listProducts(req, res, listProduct) {
    const orderedList = listProduct.toSorted((a, b) =>
        a.preco - b.preco
    );

    res.json(orderedList);
}