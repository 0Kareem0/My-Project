const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
    const { name } = req.body
    if (name) {
      return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send({ success: false, msg: 'Enter anything u dumb fuck' })
  })


  module.exports = router