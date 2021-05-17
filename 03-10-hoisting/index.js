//isso não funcionaria:
//a função soma deveria ser declarada antes de ser utilizada
//isso é conhecido como hoisting

//const resultado = soma(1,5);
//const soma = (a = 1, b = 2) => a + b;
//console.log(resultado);

const resultado = soma (1,5);
function soma (a = 1, b = 2) {
  return a + b;
}
console.log(resultado);

//o de cima já funcionaria
//a questão do hoisting é mais específica á arrow functions
//no caso de funções declaradas dessa maneira o motor do javascript consegue adaptar

