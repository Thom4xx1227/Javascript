//21. Escriba un programa que verifique si un número es primo utilizando dos funciones: ● esPrimo(numero): determina si un número es primo. 
// ● imprimirResultado(numero): imprime si el número es primo o no, llamando a la función esPrimo.



function esPrimo(numero) {

    if( numero <= 1){

        return false
    }else if ( numero == 2){

        return true
    }

for (let index = 0; index <= Math.sqrt(numero); index++) {

    if (numero %2 === 0 ){

        return false
    }
    
     
}
return true   
}

console.log(esPrimo(5))


function imprimirResultado(numero) {

    if (esPrimo(numero)){

        return `el numero es primo`
    }else {
        return `el numero no es primo`
    }
    
}

console.log (imprimirResultado())