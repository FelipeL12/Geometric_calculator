// * ECUACIONES

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
const PI = Math.PI;

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