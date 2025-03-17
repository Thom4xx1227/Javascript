//Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
//condicionales y otra con switch-case


let numero = parseInt(prompt("ingrese el numero"))

let resul = numero % 5 ===0

switch (resul) {
    case resul === 0:
        alert(" no es divisible por 5")
        break;

    default:
        alert(" es divisible por 5")
        break;
}