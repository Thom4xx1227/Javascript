//Escriba una función generarContraseña la cual reciba n como parámetro
//  y esta cree una contraseña de n caracteres aleatorios. 
// (Los caracteres pueden ser números, letras o signos).

function generarContraseña (n) {

    let caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?`;
    let contraseña = ``;

    for (let index = 0; index < n; index++) {

        let b = Math.floor(Math.random() *caracteres.length );

          contraseña += caracteres[b] 
        
    }

    return contraseña

}

console.log (generarContraseña(6))