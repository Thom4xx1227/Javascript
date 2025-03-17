alert ("calculadora de segundos minutos y horas")

let valorMinutos = parseInt(prompt(`ingrese los segundos a calcular`));

let segundos = valorMinutos
let horas = (segundos / 3600);
let minutos =  ((segundos % 3600 )/ 60 )

alert (`${valorMinutos} segundos equivalen a ${horas.toFixed(0)} horas, ${minutos.toFixed(0)} minutos`)