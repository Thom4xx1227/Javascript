alert ("calculadora de iva")

let precioSinIva = parseFloat(prompt(`ingrese el valor del producto`))

let iva = 0.19

let precioConIva = precioSinIva * (1 + iva)

alert (`el valor del producto con iva es del = $${precioConIva}`)

