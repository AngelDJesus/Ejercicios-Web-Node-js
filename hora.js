const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Qué hora es actualmente? ", function (t) {
    rl.question("¿Cuántas horas deseas avanzar? ", function (h) {

        let horaActual = parseInt(t);
        let horasAdicionales = parseInt(h);

        if (!isNaN(horaActual) && horaActual >= 0 && horaActual < 24 &&
            !isNaN(horasAdicionales) && horasAdicionales >= 0) {

            let nuevaHora = (horaActual + horasAdicionales) % 24;
            console.log(`En ${horasAdicionales} horas, el reloj marcará las ${nuevaHora}:00.`);
        } else {
            console.log("Por favor, introduce valores válidos: una hora entre 0 y 23, y un número entero no negativo.");
        }
        rl.close();
    });
});
