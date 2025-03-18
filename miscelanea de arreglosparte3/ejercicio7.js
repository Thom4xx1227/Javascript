//Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] 
// use ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales elementos 
// sería posible formar la palabra adso.

let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"] 

let a = true
let d = true
let s = true
let o = true
for (let i = 0; i < arreglo.length; i++) {

    if (arreglo[i]=="a") {

        a = true
        
    } else if (arreglo[i]== "d"){

        d = true
    }else if (arreglo[i]== "s"){

        s = true
    }else if (arreglo[i]=="o"){

        o = true
    }

}


if ( a && d && s && o){

    console.log (`contiene las letras`)
}else {
    console.log (`no contiene las letras`)
}

    