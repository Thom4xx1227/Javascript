//Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} 
// recorrer el objeto y mostrar cuáles de los valores son pares.

let objeto = {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} 

for (clave in objeto){

    let par = objeto[clave]

    if (par %2 == 0) {
        console.log(`el ${par} de ${clave} es par `)
        
    }
    
}


