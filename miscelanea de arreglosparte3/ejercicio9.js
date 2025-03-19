//12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos 
// forEach(una dentro del otro) para determinar cuáles números con consecutivos con otros, 
// p.e. dos a y b son consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos 
// porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 21.

let arreglo = [5, 7, 90, 2, 5, 3, 8, 99]
let pares = []

arreglo.forEach((numeroA, indiceA) => {
    arreglo.forEach((numeroB, indiceB) => {

        if (indiceA !== indiceB) {

            if (numeroA + 1 === numeroB || numeroB + 1 === numeroA) {
                pares.push(`${numeroA} y ${numeroB} son consecutivos`);
            }
        }
    });
});


let resultado = [...new Set(pares.map(par => {
    let [a, b] = par.split(" y ").map(num => parseInt(num));
    return a < b ? `${a} y ${b} son consecutivos` : `${b} y ${a} son consecutivos`;
}))];

resultado.forEach(par => {
    console.log(par);
});