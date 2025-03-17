alert ("calculadora de descuento")

let valor = parseFloat(prompt(`ingrese el valor del producto`))
let descuento = 0.10

let valorDescuento = valor * ( 1 - descuento)

alert (`el valor del producto con descuento es del = $${valorDescuento}`)
