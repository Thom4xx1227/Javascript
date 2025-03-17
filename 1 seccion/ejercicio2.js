
let opcionseleccionada = prompt(`por que producto desea conocer el iva \n lentejas \n crema \n arroz \n vino`)



 if (opcionseleccionada === "lentejas" || opcionseleccionada === "arroz" ){
    alert("no tiene iva ")
}
 else if (opcionseleccionada === "crema" || opcionseleccionada === "vino"){
    alert("tiene iva")
}
 else {

    alert("ingrese algo valido")
 
}; 


