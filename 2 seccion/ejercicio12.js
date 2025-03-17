let n = 10

let suma = 0


if (n > 0) {

    for (let index = 1; index <= n ; index++) {
        
        suma += index ** 2;
    }

    console.log (`la suma de los cuadrados de los numeros de 1 a ${n} es: ${suma}`)
} else {

    console.log("ingrese un numero valido")
}