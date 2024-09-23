temperatura = prompt("Ingresa la temperatura actual")

if (temperatura > 30) {
    texto = document.querySelector("p")
    texto.innerHTML = ("Ya está haciendo calor")
}
else {
    texto = document.querySelector("p")
    texto.innerHTML = ("Ta helao")
}