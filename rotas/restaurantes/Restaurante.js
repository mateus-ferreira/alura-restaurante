const TabelaRestaurantes = require('./modeloTabelaRestaurantes')

class Restaurante {
    constructor({ id, nome, telefone, endereco, dataCriacao, dataAtualizacao, versao }){
        this.id = id
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }
}

module.exports = Restaurante