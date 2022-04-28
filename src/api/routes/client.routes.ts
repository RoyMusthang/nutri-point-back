import { Router } from "express"

const clientRoute = Router()

// get
clientRoute.get('/', async (req, res) => {
  res.send(req)
})

// List
clientRoute.get('/:id', async (req, res) => {
  res.send(req)
})

// add
clientRoute.post('/', async (req, res) => {
  res.send(req)
})

// edit
clientRoute.put('/:id', async (req, res) => {
  res.send(req)
})

// remove
clientRoute.delete('/:id', async (req, res) => {
  res.send(req)
})

export { clientRoute }
