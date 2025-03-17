 let n = parseInt(prompt("ingrese la cantidad de estudiantes"));
    
    for (let i = 1; i <= n; i++) {
    console.log(`estudiante ${i}`);
    
    let n1 = parseInt(prompt(`ingrese la primer nota del estudiante ${i}`))
    let n2 = parseInt(prompt(`ingrese la segunda nota del estudiante ${i}`))
    let n3 = parseInt(prompt(`ingrese la tercer nota del estudiante ${i}`))
    
    let promedio = (n1 + n2 + n3) /3
    
    alert (`el promedio del estudiante ${i} es ${promedio.toFixed(2)} `)
    

}

