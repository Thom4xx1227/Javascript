//Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
//condicionales y otra con estructura switch-case.


let numero = parseInt(prompt("ingrese el numero"))

if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13){

    alert("tu numero es primo")
}else {
    alert("tu numero no es primo ")
}