let trabajadores = [
    {nombre: "Contanza", cargo: "Chef"},
    {nombre: "Luis", cargo: "garzón"},
    {nombre: "Estefany", cargo: "Administradora"},
    {nombre: "Andrés", cargo: "Recepcionista"},
    {nombre: "Pedro", cargo: "garzón"},
    {nombre: "Felipe", cargo: "Aseo"},
    {nombre: "Maria", cargo: "garzón"},
    {nombre: "Diego", cargo: "garzón"},
    ]

let garzones =
trabajadores.filter(mesero => mesero.cargo === "garzón")
console.log(garzones.length)