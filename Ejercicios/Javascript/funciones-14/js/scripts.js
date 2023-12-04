document.addEventListener("keydown", function(event) {
if (event.key === "a" || event.key === "A") {
agregarElemento();
} else if (event.key === "d" || event.key === "D") {
    eliminarElemento();
}})

function agregarElemento() {
    elDiv = document.getElementById("elDiv");
    nuevoElemento = document.createElement("div");
    nuevoElemento.textContent = "Elemento agregado";
    elDiv.appendChild(nuevoElemento)
}

function eliminarElemento() {
    elDiv = document.getElementById("elDiv");
    elementos = elDiv.querySelectorAll("div");
    if (elementos.length > 0) {
        elDiv.removeChild(elementos[elementos.length - 1]);
    }
}