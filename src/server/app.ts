import express from 'express'
import type { Express, Request, Response } from 'express'
import { prisma } from './prisma'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const app: Express = express()
const port = 5001
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

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

app.post('/register', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send('email and password are required')
  }

  if (await prisma.user.findUnique({ where: { email } })) {
    return res.status(409).send('email already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({
    data: {
      email: email.toLowerCase(),
      hashedPassword,
      salt
    }
  })

  if (!user) {
    return res.status(500).send('something went wrong')
  }

  const token = generateAccessToken(user.email)
  res.status(201).json(token)
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send('email and password are required')
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (user && bcrypt.compareSync(password, user.hashedPassword)) {
    const token = generateAccessToken(user.email)
    res.status(200).json(token)
  } else {
    res.status(401).send('invalid credentials')
  }
})

app.get('/secret', authenticateToken, async (req, res) => {
  //executes after authenticateToken
  res.send('you authenticated successfully!')
})

// JWT
function generateAccessToken(identifier: string) {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET is not defined')
  }

  return jwt.sign({ identifier }, secret, { expiresIn: 1800 })
}

function authenticateToken(req: Request, res: Response, next: any) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET is not defined')
  }

  jwt.verify(token, secret, (err: any, user: any) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    // req.user = user

    next()
  })
}
