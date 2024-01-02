const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");
const input = document.querySelector("input");

const productos = [
{ id: "AT12S", nombre: "Helado 5L", precio: 14990 },
{ id: "YEEM1", nombre: "Hielo 1kg", precio: 5990 },
{ id: "PSIQ4", nombre: "Agua 1.5L", precio: 14990 },
{ id: "MEPC7", nombre: "Soda 400Ml", precio: 890 }
];

btn.addEventListener("click", () => {
    const precio = input.value;
    const productosFiltrados = productos.filter(
        (producto) => producto.precio >= precio
    );
    renderRows(productosFiltrados)
});

function renderRows(productos) {
tbody.innerHTML = "";
productos.forEach((producto) => {
tbody.innerHTML += `
<tr>
<td>${producto.id}</td>
<td>${producto.nombre}</td>
<td>${producto.precio}</td>
</tr>`;
});
}

renderRows(productos);