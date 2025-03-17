//Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero.

while (true) {

let suma = 0;

let n = parseFloat(prompt(`ingrese la cantidad de numeros a solicitar le promedio`))

for (let i = 1; i <= n; i++) {
        
    let numeros = parseFloat(prompt(`ingrese el numero ${i}`))

    if (numeros === 0){

        break; 
}

    suma += numeros  
}

if (n===0){
    
   alert("saliendo...")
   break; 
}
let promedio = suma / n

alert(` el promedio es: ${promedio}`)

}
















