alert ("calculadora de credito");


let creditoInteres = 0.05;

let precioProducto = parseInt(prompt(`ingrese el valor del electrodomestico`))
let mesesCredito = parseInt(prompt(`ingrese el numero de meses del credito`))

let precioFinal = Math.round (precioProducto /mesesCredito) * (1 + creditoInteres);

alert (`el producto fue financiado a ${mesesCredito} meses con cuotas de este valor = ${precioFinal}`)


