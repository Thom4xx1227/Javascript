//Escriba una función la cual permita o no la entrada a un parque de atracciones, 
// dicha función recibe la edad, estatura y permiso parental como parámetros. 
// Para permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm, 
// en caso de ser menor de edad debe contar con un permiso parental para que sea concedido el acceso.

function parque( edad, estatura , permiso){


if (edad >= 18 && estatura >= 150 && permiso == true){

    return true
} else {
    return false

}

}

console.log (parque( 18, 170, true))
