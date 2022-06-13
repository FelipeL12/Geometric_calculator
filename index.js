// * ECUACIONES

const PI = Math.PI;

// CODIGO DEL CUADRADO
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrada(lado) {
    return lado * lado;
}

// CODIGO DEL TRIANGULO
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//  CODIGO DEL CIRCULO 
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// CODIGO DEL RECTANGULO 
function perimetroRectangulo(base, altura) {
    return (2 * base) + (2 * altura);
}

function areaRectangulo(base, altura) {
    return base * altura;
}

// CODIGO DEL ROMBO 
function perimetroRombo(lado) {
    return lado * 4
}

function areaRombo(diagonalMayor, diagonalMenor) {
    return (diagonalMayor * diagonalMenor) / 2;
}

// CODIGO DEL ROMBOIDE 
function perimetroRomboide(base, altura) {
    return (2 * base) + (2 * altura);
}

function areaRomboide(base, altura) {
    return base + altura;
}

// CODIGO DEL TRAPECIO
function perimetroTrapecio(lado1, lado2, lado3, lado4) {
    return lado1 + lado2 + lado3 + lado4;
}

function areaTrapecio(altura, baseMayor, baseMenor) {
    return altura * (baseMayor + baseMenor) / 2;
}

// CODIGO DE UN PENTAGONO
function perimetroPentagono(base) {
    return base * 5;
}

function areaPentagono(base, apotema) {
    const perimetro = perimetroPentagono(base);
    return (perimetro * apotema) / 2;
}

// CODIGO DE UN HEXAGONO
function perimetroHexagono(base) {
    return base + 6;
}

function areaHexagono(base, altura) {
    const perimetro = perimetroHexagono(base);
    return (perimetro * altura) / 2;
}

// CODIGO DE UN ELIPSE 
function areaElipse(semiejeMayor, semiejeMenor) {
    return PI * semiejeMayor * semiejeMenor;
}

//* FUNCIONES PARA CALCULAR LOS DATOS 

// CODIGO DEL CUADRADO
function calcularCuadrado() {
    const lado = document.getElementById("inputCuadrado");
    const ladoValue = parseInt(lado.value);
    const perimetro = perimetroCuadrado(ladoValue);
    const area = areaCuadrada(ladoValue);
    const resultadoPerimetro = document.getElementById("resultadoPerimetro");
    const resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO DEL TRIANGULO 
function calcularTriangulo() {
    const lado1 = document.getElementById("inputLado1Triangulo");
    const lado2 = document.getElementById("inputLado2Triangulo");
    const base = document.getElementById("inputBaseTriangulo");
    const altura = document.getElementById("inputAlturaTriangulo");
    const lado1Value = parseInt(lado1.value);
    const lado2Value = parseInt(lado2.value);
    const baseValue = parseInt(base.value);
    const alturaValue = parseInt(altura.value);
    const perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
    const area = areaTriangulo(baseValue, alturaValue);
    const resultadoPerimetro = document.getElementById("resultadoPerimetro");
    const resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO DEL CIRCULO
function calcularCirculo() {
    const circulo = document.getElementById("inputCirculo");
    const circuloValue = parseInt(circulo.value);
    const diametro = diametroCirculo(circuloValue);
    const perimetro = perimetroCirculo(circuloValue);
    const area = areaCirculo(circuloValue);
    const resultadoDiametro = document.getElementById("resultadoDiametro");
    const resultadoPerimetro = document.getElementById("resultadoPerimetro");
    const resultadoArea = document.getElementById("resultadoArea");
    resultadoDiametro.innerHTML = diametro + "cm";
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO DEL RECTANGULO 
function calcularRectangulo() {
    const base = document.getElementById("inputBaseRectangulo");
    const altura = document.getElementById("inputAlturaRectangulo");
    const baseValue = parseInt(base.value);
    const alturaValue = parseInt(altura.value);
    const perimetro = perimetroRectangulo(baseValue, alturaValue);
    const area = areaRectangulo(baseValue, alturaValue);
    const resultadoPerimetro = document.getElementById("resultadoPerimetro");
    const resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO DEL ROMBO 
function calcularRombo() {
    const lado = document.getElementById("inputLadoRombo");
    const diagonalMayor = document.getElementById("inputDiagonalMayorRombo");
    const diagonalMenor = document.getElementById("inputDiagonalMenorRombo");
    const ladoValue = parseInt(lado.value);
    const diagonalMayorValue = parseInt(diagonalMayor.value);
    const diagonalMenorValue = parseInt(diagonalMenor.value);
    const perimetro = perimetroRombo(ladoValue);
    const area = (diagonalMayorValue * diagonalMenorValue) / 2;
    const resultadoPerimetro = document.getElementById("resultadoPerimetro");
    const resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO DEL ROMBOIDE 
function calcularRomboide() {
    const base = document.getElementById("inputBaseRomboide");
    const altura = document.getElementById("inputAlturaRomboide");
    const baseValue = parseInt(base.value);
    const alturaValue = parseInt(altura.value);
    const perimetro = perimetroRomboide(baseValue, alturaValue);
    const area = areaRomboide(baseValue, alturaValue);
    resultadoPerimetro = document.getElementById("resultadoPerimetro");
    resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO DEL TRAPECIO
function calcularTrapecio() {
    const lado1 = document.getElementById("inputLado1Trapecio");
    const lado2 = document.getElementById("inputLado2Trapecio");
    const lado3 = document.getElementById("inputLado3Trapecio");
    const lado4 = document.getElementById("inputLado4Trapecio");
    const altura = document.getElementById("inputAlturaTrapecio");
    const baseMayor = document.getElementById("inputBaseMayorTreapecio");
    const baseMenor = document.getElementById("inputBaseMenorTreapecio");
    const lado1Value = parseInt(lado1.value);
    const lado2Value = parseInt(lado2.value);
    const lado3Value = parseInt(lado3.value);
    const lado4Value = parseInt(lado4.value);
    const alturaValue = parseInt(altura.value);
    const baseMayorValue = parseInt(baseMayor.value);
    const baseMenorValue = parseInt(baseMenor.value);
    const perimetro = perimetroTrapecio(lado1Value, lado2Value, lado3Value, lado4Value);
    const area = areaTrapecio(alturaValue, baseMayorValue, baseMenorValue);
    resultadoPerimetro = document.getElementById("resultadoPerimetro");
    resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro = perimetro + "cm";
    resultadoArea = area + "cm²";
}

// CODIGO DE UN PENTAGONO 
function calcularPentagono() {
    const base = document.getElementById("inputBasePentagono");
    const apotema = document.getElementById("inputApotemaPentagono");
    const baseValue = parseInt(base.value);
    const apotemaValue = parseInt(apotema.value);
    const perimetro = perimetroPentagono(baseValue);
    const area = areaPentagono(baseValue, apotemaValue);
    resultadoPerimetro = document.getElementById("resultadoPerimetro");
    resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO  DE UN HEXAGONO 
function calcularHexagono() {
    const base = document.getElementById("inputBaseHexagono");
    const altura = document.getElementById("inputAlturaHexagono");
    const baseValue = parseInt(base.value);
    const alturaValue = parseInt(altura.value);
    const perimetro = perimetroHexagono(baseValue);
    const area = areaHexagono(baseValue, alturaValue);
    resultadoPerimetro = document.getElementById("resultadoPerimetro");
    resultadoArea = document.getElementById("resultadoArea");
    resultadoPerimetro.innerHTML = perimetro + "cm";
    resultadoArea.innerHTML = area + "cm²";
}

// CODIGO DE UN ELIPSE
function calcularElipse() {
    const semiejeMayor = document.getElementById("inputSemiejeMayorElipse");
    const semiejeMenor = document.getElementById("inputSemiejeMenorElipse");
    const semiejeMayorValue = parseInt(semiejeMayor.value);
    const semiejeMenorValue = parseInt(semiejeMenor.value);
    const area = areaElipse(semiejeMayorValue, semiejeMenorValue);
    resultadoArea = document.getElementById("resultadoArea");
    resultadoArea.innerHTML = area + "cm²";
}