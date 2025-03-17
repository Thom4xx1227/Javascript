//Escriba una función que reciba un número entero y dicha 
// función pueda determinar si el número enviado es positivo o negativo.

function numero (n) {

  

    let positivo = "positivo"
    let negativo = "negativo"

    let cero = " el numero es 0 "

    if (n > 0 ){

        return positivo
    }else if (n == 0){
        return cero
    }else {

        return negativo
    }
    

    
}

console.log(numero(-1))