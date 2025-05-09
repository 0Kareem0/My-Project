const express = require('express')
const app = express()
const port = 8383

const logger = require('./src/middleware/logger')
const peopleRoutes = require('./src/routes/peopleRoutes')
const authRoutes = require('./src/routes/auth')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.disable('etag')
app.disable('x-powered-by')
app.use(logger)
app.use(express.static('./methods-public'))
app.use(express.json())
console.log('im still here :"""D ');

// Routes
app.use('/api/people', peopleRoutes)
app.use('/login', authRoutes)





app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
