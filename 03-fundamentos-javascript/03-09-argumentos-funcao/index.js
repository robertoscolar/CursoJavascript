//Função padrão: os valores 1 e 2 são atribuídos aos nomes A e B

function soma (a,b) {
  return a + b;
}

console.log(soma(1,2)); // 3

//Argumentos da função
//Funções não recebem nomes mas mesmo assim os argumentos são computados
//Dessa forma consigo recuperá-los em forma de lista 
//mesmo sem nomeá-los pela palavra reservada: arguments 

function subtracao () {
  return arguments[0] - arguments[1];
}

console.log(subtracao(3,2));  // 1

//eu também posso passar os valores na própria função
//assim não precisaria fazê-lo na declaração

function multiplicacao (a, b = 2 ) {
  return a * b;
} 

console.log(multiplicacao(10)); // 10(a) * 2(b) = 20