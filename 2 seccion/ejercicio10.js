 /* let uno = Number(prompt("ingrese el primer numero"));
let dos = Number(prompt("ingrese el segundonumero"));
let tres = Number(prompt("ingrese el tercer numero"));
let cuatro = Number(prompt("ingrese el cuarto numero"));
let cinco = Number(prompt("ingrese el quinto numero"));
let seis = Number(prompt("ingrese el sexto numero"));
let siete = Number(prompt("ingrese el septimo numero"));
let ocho = Number(prompt("ingrese el octavo numero"));
let nueve = Number(prompt("ingrese el noveno numero"));
let diez = Number(prompt("ingrese el decimo numero"));



let suma = (uno+dos+tres+cuatro+cinco+seis+siete+ocho+nueve+diez) / 10



alert (suma) */


let n = 10;
let suma = 0;


for (let i= 1; i <= n; i++) {
    
let numeros = parseFloat(prompt(`ingrese el numero ${i}`))

suma += numeros 
}


let promedio = suma / n;

alert (`${promedio}`)




