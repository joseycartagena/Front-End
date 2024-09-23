var peso = 700; // kg
var altura = 1.70; // metros
var resultado = peso / (altura * altura);

if (resultado < 18.5) {
    console.log('Tiene un IMC bajo');
} 
if (resultado >= 18.5) {
    console.log('Tiene un IMC normal');
}
if (resultado <= 24.9) {
    console.log('Tiene un IMC normal');
}
else {
    console.log('Tiene un IMC alto');
}
