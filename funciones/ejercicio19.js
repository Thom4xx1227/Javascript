//19. Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos funciones: ● 
//celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit. ● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius.


function celsiusToFahrenheit(celsius) {

    let op = (celsius * 5/9 ) + 32
    
    return op


    
}

console.log(celsiusToFahrenheit(0))


function fahrenheitToCelsius(fahrenheit) {


    let op = (fahrenheit - 32 ) * 5/9
    return op
    
}


console.log(fahrenheitToCelsius(32))