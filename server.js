'use strict'

const express = require('express')
const app = express()
const fs = ('fs')


const port = 5445 || process.env.PORT


// External files
const users = require('./Users')

app.get('/users', (req,res) => {
    res.json({
        'users': users.users
    })
})



app.listen(port)
console.log(`Server listening on port ${port}`)
