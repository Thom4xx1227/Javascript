//Dado el objeto {
//162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
//4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
//786353: {nombres: "Raul", apellidos: "Castro", edad: 80}

//Use dos ciclos for-in para recorrer los objetos más internos y mostrar sus llaves y valores. Por ejemplo:

let objeto =  

{ "62544": { nombres: "Pepe", apellidos: "Perez", edad: 40},
    
"4357262": {nombres: "Maria",  apellidos: "Gomez", edad: 31},
    
"786353": {nombres: "Raul", apellidos: "Castro", edad: 80}};


for( clave in objeto){

    console.log(clave)
    
    for( let propiedad in objeto){

        console.log(propiedad + ":", objeto[clave][propiedad] )

        
    }

    console.log("---------")
}