const express = require('express')
const app = express()
const users = []

app.use(express.json())

app.get('/users', (re,res) => {
    res.json(users)
})

app.post('/users', (re,res) => {
    const user = { name: req.body.name, password: req.body.password }
    users.push(user)
    res.status(201).send()
})

app.listen(3000)
