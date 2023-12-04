function incrementar(valor = 1) {
let elemento = document.querySelector('#parrafo')
let fontSizeActual = parseInt(elemento.style.fontSize)
let nuevoFontSize = fontSizeActual + valor + "px" 
elemento.style.fontSize = nuevoFontSize
}