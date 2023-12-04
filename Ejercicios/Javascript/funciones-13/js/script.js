function pintar(color) {
    elemento = document.querySelector("body");
    elemento.style.backgroundColor = color;
    }
    btn = document.querySelector("button");
    btn.addEventListener("click", pintar);