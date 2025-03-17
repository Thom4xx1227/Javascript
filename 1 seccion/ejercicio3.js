 /* Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario. */

let numero1 = parseInt(prompt("ingresa el primer numero"))
let numero2 = parseInt(prompt("ingrese el segundo numero"))


if (numero1 > numero2){

alert(`el numero mayor es el ${numero1}`)

} else if (numero2 > numero1){

    alert (`el numero mayor es el ${numero2}`)
} else if (numero1 = numero2){

    alert  ("los numeros son iguales")
} else {

    alert ("ingrese un numero valido")
};