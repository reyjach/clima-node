const axios = require('axios');

class Busquedas {

    historial = ['Bogota','lima','quito'];

    constructor(){

    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY
        }
    }

    async ciudad( lugar = '' ) {
        //peticion
        try {
            const intace = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await intace.get();

            console.log(resp.data);

            return[]; //retornar los lugares
        }catch(err) {
            console.log(err);
            return[];
            
        }
        console.log('hola');
    }
}

module.exports = Busquedas;