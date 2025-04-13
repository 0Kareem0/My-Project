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

// Routes
app.use('/api/people', peopleRoutes)
app.use('/login', authRoutes)
console.log('finished express and now im gonna learn mongodb 1');





app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
