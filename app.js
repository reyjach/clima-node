const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {


    let opt;

    const busquedas = new Busquedas();

    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                // Mostrar mensaje

                const lugar = await leerInput('Ciudad: ');

                await busquedas.ciudad( lugar );

                // Buscar lugares

                // Seleccionar lugar

                // Clima

                // Mostrar resultados

                console.log('\nInformacion del lugar\n'.green);
                console.log('Ciudad: ');
                console.log('Latitud: ');
                console.log('Longitud: ');
                console.log('Temperatura: ');
                console.log('Temperatura Minima: ');
                console.log('Temperatura Maxima: ');

            break;
            case 2:
            
            break;
        }

        if (opt !== 0 ) await pausa();
    }while(opt !== 0);
        
    


}

main();