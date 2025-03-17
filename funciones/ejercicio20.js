//20. Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos funciones: 
// calcularArea(largo, ancho): calcula el área del rectángulo.  calcularPerimetro(largo, ancho): calcula el perímetro.

function  calcularArea(largo, ancho) {


    let op = largo * ancho
    return op
}

console.log("El area es = ",calcularArea( 10, 15))

function calcularPerimetro(largo , ancho) {

    let op = largo *2 + ancho * 2
    return op
}

console.log(" El perimetro es = ",calcularPerimetro(10,10))