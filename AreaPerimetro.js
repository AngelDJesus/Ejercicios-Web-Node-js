var rad;
var peri;
var area;
process.stdout.write("Introdusca el valor del radio: \n");
process.stdin.on('data', function(data){
    rad = data.toString().trim();
    peri = 2 * 3.1416 * rad;
    area = rad * rad
    process.stdout.write("El perimetro es: "+peri+".\nEl área es: "+area+".\n");
    process.exit();
});