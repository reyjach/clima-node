const fs = require('fs');

const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath='./db/database.json';

    constructor(){

    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY
        }
    }

    get paramsThea(){
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
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

            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

        }catch(err) {
            console.log(err);
            return[];
            
        }
    }

    async climaLugar( lat = '', lon ='') {
        try {
            
            const intace = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {...this.paramsThea, lat, lon}
            });

            const resp = await intace.get();
            const { weather, main} = resp.data

            return{
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial( lugar = '' ) {

        if(this.historial.includes( lugar.toLocaleLowerCase() )){
            return;
        }

        this.historial.unshift( lugar.toLocaleLowerCase() );

        this.guradarBD();

    }

    guradarBD(){

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync( this.dbPath, JSON.stringify( payload ))
    }

    leerDB(){

    }
}

module.exports = Busquedas;