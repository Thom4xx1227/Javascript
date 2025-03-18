//Dado el arreglo [true, true, false, true, false, false] 
// use ciclo while y una variable contadora(diferente al contador del ciclo) 
// para mostrar cuántas veces aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora.

let arreglo = [true, true, false, true, false, false] 

let contador = 0;

while (arreglo.length > 0) {

    if (arreglo[0] === false) {

        contador++
        
    }

    arreglo.splice(0, 1);

    

}

console.log (contador)