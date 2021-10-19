const Modelo = require('./modeloTabelaRestaurantes')

module.exports ={ 
    listar() {
        return Modelo.findAll({ raw: true })
    }
}