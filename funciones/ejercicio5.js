//Escriba una función que reciba un número n como parámetro y genere su factorial.
function factorial(n) {

    let res = 1
    for (let index = 1; index <=n; index++) {
        res *= index


    }
    return res;
}

console.log(factorial(4));