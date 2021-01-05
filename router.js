const index = require('./src/index')

module.exports = function(req,res){
    switch (req.url) {
        case '/':
            //se va a acceder al homepage
            index.homePage(req,res)//metodo
            break;
        case '/en-cartelera':
            //se va a acceder a la cartelera
            index.enCartelera(req,res)
            break;
        case '/contacto' :
            index.contacto(req,res)
           break;
        case '/mas-votadas':
            //se va a acceder a mas-votadas
            index.masVotadas(req,res)
            break;    
        case '/sucursales':
            index.sucursales(req,res)
        break;
        case '/preguntas-frecuentes':
            index.preguntasFrecuentes(req,res)
        break;
        default:
            break;
    }
}


