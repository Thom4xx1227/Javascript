//Escriba un programa que genere una contraseña segura a partir de una palabra base y una serie de reglas. 
// Usa dos funciones: ● generarContraseña(palabraBase): genera una contraseña agregando números y caracteres especiales.
//  ● imprimirContraseña(contraseña): muestra la contraseña generada.


function generarContraseña(palabraBase) {

    let caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?0123456789`
    let contraseña = palabraBase 
    

    for (let index = 0; index < 5; index++) {

        let b = Math.floor(Math.random() *caracteres.length)


       contraseña += caracteres[b]
        
    }

    return contraseña
    
}

function imprimirContraseña(contraseña) {

    console.log(contraseña)
    
}

let pbase = generarContraseña ("gha")
