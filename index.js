'use strict'

const express = require('express')
const app = express()

const port = 5445 || process.env.PORT

app.listen(port)
console.log(`Server listening on port ${port}`)
