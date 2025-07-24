const somar = (a, b) => {
  return a + b;
 };

const subtrair = (a,b) =>{
    return a - b;

}

const multiplicar = (a, b) => a * b;

function calculadora(num1, num2, operacaoCallback, nomeOperacao) {
  if (typeof operacaoCallback !== 'function') {
    console.log("Erro: O terceiro argumento deve ser uma função de operação.");
    return; // Encerra a função se não for um callback válido
  }

  const resultado = operacaoCallback(num1, num2)};



console.log("--- Testes da Calculadora ---");


const resultadoSoma = calculadora(10,5, somar);
console.log(`10 + 5 = ${resultadoSoma}`);

const resultadoSubtracao = calculadora(20, 7, subtrair);
console.log(`20 - 7 = ${resultadoSubtracao}`);

const numE = 8;
const numF = 4;
console.log(calculadora(numE, numF, multiplicar, "multiplicação"));



const resultadoSomaDireta = calculadora(
  100,
  50,
  (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero
);
console.log(`100 + 50 (direta) = ${resultadoSomaDireta}`);

const resultadoSubtracaoDireta = calculadora(
  50,
  10,
  (a, b) => a - b
);
console.log(`50 - 10 (direta) = ${resultadoSubtracaoDireta}`);

console.log("\n--- Teste de erro ---");
calculadora(5, 3, "operacaoInvalida"); 

const numI = 50;
const numJ = 10;
const fraseDivisaoDireta = calculadora(
  numI,
  numJ,
  (a, b) => a / b,
  "divisão" 
);
console.log(fraseDivisaoDireta); 

console.log("\n--- Teste de erro ---");
calculadora(5, 3, "operacaoInvalida", "invalida");


