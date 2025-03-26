let usuarios = []

function registro () {
    let documento = prompt("ingrese el documento")
    let nombre = prompt("ingrese el nombre")
    let apellidos= prompt("ingrese el apellido ")
    let edad = prompt("ingrese la edad")
    let peso = prompt("ingrese el peso ")
    let estatura= prompt("ingrese la estatura")


    let nuevoUsuario = {

        documento: documento,
        nombre: nombre,
        apellidos: apellidos,
        edad: edad,
        peso: peso,
        estatura: estatura,

    }

usuarios.push(nuevoUsuario);
console.log("registro exitoso", nuevoUsuario)
    
}


function consultarUsuario() {

    let documento = prompt ("ingrese el documento del usuario")
    let usuarioEncontrado = usuarios.find(user => user.documento === documento);
    
    if(usuarioEncontrado){
        console.log("datos del usuario:" ,usuarioEncontrado)
    }else{

        console.log("no se encuentra registrado")
    }
    
}

function menu () {

    let opcion;

    do{
        opcion = prompt (`selecciona una opcion \n 1 registrar usuario numero \n 2 consultar usuario \n 3 sali`)
    switch (opcion) {
        case "1":
            registro()
            break;

        case "2":
            consultarUsuario()
            break;

        case "3":
        console.log("saliendo")
        break;
    
        default:
            break;
    }
    
}while (opcion!==3)

}

menu ()
    

