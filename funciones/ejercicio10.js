function vocales(cadena) {

    let palabra = "";

    for (let index = 0; index < cadena.length; index++) {

        let param = cadena[index]

        if (param !== "a" && param !== "e" && param !== "i" && param !== "o" && param !=="u"){

            palabra += param
        }

        
    }
         return palabra;
}

console.log (vocales("hola"))