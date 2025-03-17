let a = 1, b = -3, c = 2;
let discriminante = b * b - 4 * a * c;

if (discriminante < 0) {
    console.log("La ecuación no tiene soluciones reales.");
} else {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log(`Las soluciones de la ecuación son x1 = ${x1} y x2 = ${x2}`);
}