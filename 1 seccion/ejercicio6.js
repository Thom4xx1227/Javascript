//Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
//condicionales y 

let numero = parseInt(prompt(" ingrese el numero divisible por 5"))

let operacion = numero % 5

if (operacion === 0 ){

    alert (" es divisible por 5")
}else {

    alert (" no es divisible por 5")
}