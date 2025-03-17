//Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena, 
// La idea es que los números recibidos se puedan operar según la operación que hallamos recibido en la cadena,
// ejemplo miFuncion(2, 5, ”suma”).


function op (a, b , operacion) {

if (operacion == "suma"){

    return a + b 
}else if (operacion == "resta"){

    return a - b
}else if( operacion == "multiplicacion"){

    return a * b
    
}else if (operacion == "division"){

    return a / b


}else {
    return false
}

}

console.log(op (5, 6 , "suma"))