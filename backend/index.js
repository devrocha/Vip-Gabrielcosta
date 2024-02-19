import express, { json } from 'express'
import { v4 } from 'uuid'
const app = express()
const port = 3000

app.use(json())

// CRUD de usuários
const users = []

// localhost:3000
// GET - verbo para buscar informações
app.get('/', (req, res) => {
  res.json(users)
})

// localhost:3000
// POST - verbo de criação/adição
app.post('/', (req, res) => {
  const user = {
    id: v4(),
    ...req.body
  }

  users.push(user)

  res.json(users)
})

// localhost:3000
// PUT e PATCH - verbos para edição
app.put('/:id', (req, res) => {
  const index = users.findIndex(user => user.id === req.params.id)

  const newUser = {
    id: users[index].id,
    ...users[index],
    ...req.body
  }

  users.splice(index, 1, newUser)

  res.json(users[index])
})

// localhost:3000
app.delete('/:id', (req, res) => {
  const index = users.findIndex(user => user.id === req.params.id)

  users.splice(index, 1)

  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})