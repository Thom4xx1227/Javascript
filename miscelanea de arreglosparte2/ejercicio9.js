//9. Cree una función que reciba una letra del alfabeto 
// y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] 
// Use ciclo for (con .length) en la solución de este problema

function alfabeto(letra) {

    let arreglo = ["a", "b", "c", "d", "e", "f", "g"]

    for (let index = 0; index < arreglo.length; index++) {

        if (letra !== arreglo[index]){

            return `no corresponde`

        }
        return `corresponde`
    } 

}

console.log (alfabeto("z"))