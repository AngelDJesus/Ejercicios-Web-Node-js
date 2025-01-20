const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce la longitud del cateto a: ", function (a) {
    rl.question("Introduce la longitud del cateto b: ", function (b) {
        // Convertir las entradas a números
        let catetoA = parseFloat(a);
        let catetoB = parseFloat(b);

        if (!isNaN(catetoA) && catetoA > 0 && !isNaN(catetoB) && catetoB > 0) {
            // Calcular la hipotenusa usando el teorema de Pitágoras
            let hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2);
            console.log(`El largo de la hipotenusa es: ${hipotenusa.toFixed(2)}`);
        } else {
            console.log("Por favor, introduce números válidos y mayores que cero para los catetos.");
        }
        rl.close();
    });
});
