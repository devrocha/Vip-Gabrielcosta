import { createRouter } from "./routes/routes.js";
import { app, startServer } from "./config/servidor.js";

const instanceExpress = app

createRouter(instanceExpress)
startServer()

// app.get("/:id", (req, res) => {
//   const productId = req.params.id

//   const findProduct = listProduct.find((element) =>
//     element.id == productId
//   );

//   if (!findProduct) {
//     return res.send('Produto não encontrado')
//   }

//   res.json(findProduct)
// })

// app.patch("/:id", (req, res) => {
//   const productId = req.params.id
//   const index = listProduct.findIndex((element) => element.id == productId)
//   const body = req.body

//   const newProduct = {
//     id: listProduct[index].id,
//     ...listProduct[index],
//     ...body
//   }

//   listProduct.splice(index, 1, newProduct)

//   res.json(newProduct)
// })

// app.delete("/:id", (req, res) => {
//   const productId = req.params.id
//   const index = listProduct.findIndex((element) => element.id == productId)

//   listProduct.splice(index, 1)

//   res.json(listProduct)
// })
