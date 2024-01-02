const peliculas = [
    {id: 1, nombre: "Thor"},
    {id: 2, nombre: "Ant-Man"},
    {id: 3, nombre: "Terminator"},
    {id: 4, nombre: "Ip Man"},
    {id: 5, nombre: "Rocky"},
    ]

const eliminarPelicula =  peliculas.findIndex(pelicula => pelicula.id === 3)
peliculas.splice(eliminarPelicula, 1)
console.log(peliculas)
