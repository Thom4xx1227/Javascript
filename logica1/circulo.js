alert ("area y perimetro del circulo ")

let radio = parseFloat(prompt(`ingrese el radio del circulo`))

let area = Math.PI * Math.pow(radio,2)

let perimetro = 2 * Math.PI * radio;

alert (`el perimetro del circulo es = ${perimetro.toFixed(2)} 
el area del circulo es = ${area.toFixed(2)}`)
