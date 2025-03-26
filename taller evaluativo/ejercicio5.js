let persona = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};

for (let clave in persona) {
    console.log(persona[clave]);
}

persona.peso = 77;
persona ["edad"] = 21;

delete persona.apellidos

console.log (persona)