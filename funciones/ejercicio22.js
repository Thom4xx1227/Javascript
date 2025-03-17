//22. Escriba un programa que calcule si un estudiante aprueba o reprueba con base en tres notas. Usa tres funciones: 
// ● calcularPromedio(notas): calcula el promedio de las tres notas. 
// ● esAprobado(promedio):determina si el estudiante aprueba o no (promedio >= 6). 
// ● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.


function calcularPromedio(notas) {

    let n1 = 8.4
    let n2 = 8.9
    let n3 = 7.8

    let promedio = (n1 + n2 + n3) / 3 

    return  promedio

}

let promedio = calcularPromedio();

console.log (calcularPromedio())

function esAprobado(promedio) {

    if ( promedio >= 6.0 ){

        return true
    }else {
        return false
    }
    
}

let aprobado = esAprobado(promedio);

console.log(esAprobado(promedio))

function mostrarResultado(aprobado) {

    if (aprobado == true){

        return `es aprobado`
    }else {

        return `no es aprobado`
    }

}

console.log (mostrarResultado(aprobado))