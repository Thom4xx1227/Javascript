//Dado el arreglo [3, 50, 70, 600, 40]: 
// 1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos 
// 2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3 
// 3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos 
// 4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares

let arreglo = [3, 50, 70, 600, 40]

//arreglo.forEach(i => {console.log(i)})

//arreglo.forEach(i => { console.log (i*3)})

while (arreglo.length) {
    
    //console.log(arreglo)
    break;
}

for (let index = 0; index < arreglo.length; index++) {

    if( arreglo[index] %2 == 0 ){

        console.log(arreglo[index])
    }

    

    
    
}