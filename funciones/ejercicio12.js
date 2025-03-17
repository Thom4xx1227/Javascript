//Escriba una función la cual reciba 5 notas de un estudiante y 
// genere un mensaje informando si el estudiante aprobó o no la materia, 
// para que la materia se de como aprobada el promedio del estudiante debe ser mayor o igual a 3,0.




function aprob(apr){

let n1 = 1.3
let n2 = 1.5
let n3 = 1.5
let n4 = 1.7
let n5 = 1.0

let promedio = (n1 * n2 *n3 *n4*n5) /5

let aprobo = "aprobo"

let reprobo = "reprobo"

if (promedio >= 3.0 ){

    return aprobo
}else{

    return reprobo
}


}

console.log (aprob())