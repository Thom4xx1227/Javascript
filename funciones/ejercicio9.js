

function vocal (cadena){

    let acumuladora = 0 

   

    for (let index = 0; index < cadena.length; index++) {

        let letra = cadena[index]

        if (letra == `a` || letra== "e" || letra == "i"||letra == "o" ||letra== "u"){

            acumuladora++;
        }
      
        
        
    }

    return acumuladora



}
console.log(vocal("hola como estas"))