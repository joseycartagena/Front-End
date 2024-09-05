var miPrimerArreglo = [5, 4, 3, 2, 1]
console.log(miPrimerArreglo)

miPrimerArreglo.reverse()
console.log(miPrimerArreglo)

miPrimerArreglo = miPrimerArreglo.map(
function(elemento){
    elemento *= 2;
    return elemento
}
    )

    console.log(miPrimerArreglo)

    miPrimerArreglo = miPrimerArreglo.map(
        function(ele) {
            ele *= ele;
            return ele
        }
    )

    console.log(miPrimerArreglo)

    miPrimerArreglo = miPrimerArreglo.map(Math.sqrt)
    console.log(miPrimerArreglo)


    miPrimerArreglo = miPrimerArreglo.join("*")
    console.log(miPrimerArreglo)

    miPrimerArreglo = miPrimerArreglo.split("")
    console.log(miPrimerArreglo)

    miPrimerArreglo.push(12)
    console.log(miPrimerArreglo)

    miPrimerArreglo.unshift(0)
    console.log(miPrimerArreglo)

    console.log(miPrimerArreglo.toString())


        console.log(miPrimerArreglo.pop())
        console.log(miPrimerArreglo)

        miPrimerArreglo.splice(1,2)
        console.log(miPrimerArreglo)

