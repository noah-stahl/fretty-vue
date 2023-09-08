import express from 'express'
import type { Express, Request, Response } from 'express'
import { prisma } from './prisma'

const app: Express = express()
const port = 5001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/food', (req: Request, res: Response) => {
  res.send({
    oeuf: '🍳',
    fromage: '🧀'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
