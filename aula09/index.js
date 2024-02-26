import express, { json } from "express";
import { v4 } from "uuid";
const app = express();
const port = 3000;
app.use(json());

const listProduct = [];

app.get("/", (req, res) => {
  const orderedList = listProduct.toSorted((a,b) =>
    a.preco - b.preco
  );
  res.json(orderedList);
});

app.get("/:id" , (req, res) => {
    const productId = req.params.id
    const findProduct = listProduct.find((element) => 
        element.id == productId
    );
    if(!findProduct){
        return res.send('Produto não encontrado')
    }
    res.json(findProduct)
})

app.post("/", (req, res) => {
  const product = req.body;
  listProduct.push({
    id:v4(),
    ...product
  });
  res.json({
    message: "Produto cadastrado com sucesso",
    data: listProduct,
  });
});

app.patch("/:id", (req,res) => {
   const productId = req.params.id
   const index = listProduct.findIndex((element) => element.id == productId)
   const body = req.body

   const newProduct = {
    id:listProduct[index].id,
    ...listProduct[index],
    ...body
   }

   listProduct.splice(index, 1, newProduct)

   res.json(newProduct)
})

app.delete("/:id", (req,res) => {
  const productId = req.params.id
   const index = listProduct.findIndex((element) => element.id == productId)

   listProduct.splice(index, 1)

   res.json(listProduct)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

