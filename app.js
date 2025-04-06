const express = require('express')
const app = express()
const port = 3000

const logger = require('./middleware/logger')
const peopleRoutes = require('./routes/peopleRoutes')

// Middleware
app.disable('etag')
app.disable('x-powered-by')
app.use(logger)
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/api/people', peopleRoutes)

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send({ success: false, msg: 'Enter anything u dumb fuck' })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
