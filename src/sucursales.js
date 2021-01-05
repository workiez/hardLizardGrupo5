//const sucursales = require('./sucursales');//

const fs = require('fs')

module.exports = {
    sucursales : function(){
        return JSON.parse(fs.readFileSync('./data/theaters.json','utf-8'))
    }
    
}