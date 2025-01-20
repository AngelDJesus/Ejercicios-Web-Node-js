const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce el primer número: ", (num1) => {
  rl.question("Introduce el segundo número: ", (num2) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero2 !== 0 ? numero1 / numero2 : "No se puede dividir entre 0";

    console.log(`\nResultados:
    Suma: ${suma}
    Resta: ${resta}
    Multiplicación: ${multiplicacion}
    División: ${division}`);

    rl.close();
  });
});
