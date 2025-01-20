const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce la base del triángulo: ", (base) => {
  rl.question("Introduce la altura del triángulo: ", (altura) => {
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);

    const area = (baseNum * alturaNum) / 2;

    console.log(`El área del triángulo es: ${area}`);

    rl.close();
  });
});
