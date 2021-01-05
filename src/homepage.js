const fs = require('fs')

module.exports = {
    leerJSON:function(){
        //siempre lee de la carpeta raiz, por eso un solo punto
        return JSON.parse(fs.readFileSync('./data/movies.json','utf-8'));
    }
}