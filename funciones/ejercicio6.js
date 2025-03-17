//Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal 
// (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.

function esVocal(vocal) {

if (vocal === "a" || vocal === "A" || vocal === "e"|| vocal === "E" ||  vocal === "i" ||    vocal === "I" || vocal === "o" || vocal === "O" || vocal === "u" || vocal === "U") {
    return true;


} else {

    return false;
}

}

console.log (esVocal(`g`))



