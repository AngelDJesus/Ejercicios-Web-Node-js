let calificaciones = [];
let contador = 0;

process.stdout.write("Introduce la calificacion 1 para calcular el promedio:\n");

process.stdin.on("data", function (data) {
    let input = parseFloat(data.toString().trim());

    // Validar que el dato introducido sea un número válido
    if (!isNaN(input) && input >= 0 && input <= 10) {
        calificaciones.push(input);
        contador++;
        if (contador < 4) {
            process.stdout.write(`Introduce la calificación ${contador + 1}:\n`);
        } else {
            let suma = calificaciones.reduce((acc, curr) => acc + curr, 0);
            let promedio = suma / calificaciones.length;
            process.stdout.write(`El promedio de las calificaciones es: ${promedio.toFixed(2)}\n`);
            process.exit();
        }
    } else {
        process.stdout.write("Por favor, introduce un número válido entre 0 y 10.\n");
    }
});