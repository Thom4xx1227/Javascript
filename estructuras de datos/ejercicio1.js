//1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los productos son:
//Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior
//  con su respectivo producto.

let objeto = {Papa: 500, Arroz: 2500, Lentejas: 2000, Aceite: 3000,}


for (let clave in objeto){
    console.log (clave)
    console.log (objeto[clave])
    console.log ("------")
}