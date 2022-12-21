const axios = require('axios');

class Busquedas {

    historial = ['Bogota','lima','quito'];

    constructor(){

    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': 'pk.eyJ1IjoicmV5amFjaCIsImEiOiJjbGJ5OTFhN3ExanY4M29xb3BrY2RibWswIn0.nk8XDTFXIS-3Pbtm_zfjtQ'
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