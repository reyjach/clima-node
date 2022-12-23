require('dotenv').config();
require('colors');

const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {


    let opt;

    const busquedas = new Busquedas();

    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                // Mostrar mensaje

                const terminos = await leerInput('Ciudad: ');

                const lugares = await busquedas.ciudad( terminos );

                // Buscar lugares
                const id = await listarLugares( lugares )
                const lugarSel = lugares.find( l => l.id === id);
               
                // Seleccionar lugar

                const {nombre, lng, lat} = lugarSel;

                // Clima
                const clima = await busquedas.climaLugar(lat,lng);
                const { desc, min, max, temp} = clima
                // Mostrar resultados

                console.log('\nInformacion del lugar\n'.green);
                console.log('Ciudad: ', nombre.green);
                console.log('Latitud: ', lat);
                console.log('Longitud: ', lng);
                console.log('Temperatura: ', temp);
                console.log('Temperatura Minima: ', min);
                console.log('Temperatura Maxima: ', max);
                console.log('Como esta el clima: ', desc.green);

            break;
            case 2:
            
            break;
        }

        if (opt !== 0 ) await pausa();
    }while(opt !== 0);
        
    


}

main();