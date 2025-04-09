const express = require('express')
const app = express()
const port = 8383

const logger = require('./middleware/logger')
const peopleRoutes = require('./routes/peopleRoutes')
const authRoutes = require('./routes/auth')

// Middleware
app.disable('etag')
app.disable('x-powered-by')
app.use(logger)
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/api/people', peopleRoutes)
app.use('/login', authRoutes)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
 