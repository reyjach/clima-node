const axios = require('axios');

class Busquedas {

    historial = ['Bogota','lima','quito'];

    constructor(){

    }

    async ciudad( lugar = '' ) {
        //peticion
        //console.log('Ciudad ',lugar);
        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');

            console.log(resp.data);

            return[]; //retornar los lugares
        }catch(err) {
            return[];
        }
        
    }
}

module.exports = Busquedas;