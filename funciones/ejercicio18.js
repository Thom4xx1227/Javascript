/*18. Escriba una función que tenga una cadena de ADN como parámetro y retorne un string con el número de bases en ella, 
por ejemplo, si la cadena es “AACAGT” entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1, Cantidad de G: 1, Cantidad de T: 1” */


function adn(AACAGT) {

    let A = 0
    let C = 0
    let G = 0 
    let T = 0

    for (let index = 0; index < AACAGT.length; index++) {

        if (AACAGT[index] == "A"){

            A++
        } else if (AACAGT[index] == "C"){

            C++
        }else if (AACAGT[index]== "G"){

            G++
        }else if (AACAGT[index]== "T"){
            T++
        }

        
    }

    let cantidad = `cantidad de A = ${A}, Cantidad de C = ${C}, Cantidad de G = ${G}, Cantidade de T = ${T}`

    return cantidad

    
}

console.log(adn("AACAGT"))