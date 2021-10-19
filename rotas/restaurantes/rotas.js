const roteador = require('express').Router()
const tabelaRestaurante = require('./tabelaRestaurante')
const Serializador = require('../../../Serializador').SerializadorProduto

roteador.get('/', async (req, res) => {
    const resultados = await TabelaFornecedor.listar()
    const serializador = new SerializadorFornecedor(
        res.getHeader('Content-Type')
    )
    res.status(200).send(
        serializador.serializar(resultados)
    )
})