const express = require('express')
const app = express()
const bp = require('body-parser')
const roteador = require('./rotas/restaurantes')
app.use('/api/restaurantes', roteador)

app.use(bp.json())

app.listen(3000, ()=>{
    console.log('3k')
})