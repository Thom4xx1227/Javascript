//cree una funcion que retorne las suma de los primeros n naturales 


function sumaNumeros (n) {

let control = 1;
let acumuladora = 0 
while (control <= n) {
    acumuladora = acumuladora + control;
    
    control++;
}

return acumuladora;

}

let resultado = sumaNumeros(5);

console.log("valor acumulado", resultado)
