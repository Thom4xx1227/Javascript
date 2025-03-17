//Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
//triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.


let angulo1 = parseFloat(prompt("ingrese el primer angulo")) 
let angulo2 = parseFloat(prompt("ingrese el segundo angulo"))
let angulo3 = parseFloat(prompt("ingrese el tercer angulo"))

let suma = angulo1 + angulo2 + angulo3

if (suma <= 180){

    alert("es un triangulo")
}else {

    alert("no es un triangulo")
}