//executa uma ação em x segundos.

//setTimeout(() => {
//  console.log('executou')
//}, 5000);

//executa uma ação de x em x segundos.

//setInterval(() => {
//  console.log('executou')
//}, 5000);

//posso usar manipular os dois dentro de uma mesma função
//no exemplo abaixo irei colocar uma ação de 5 em 5 segundos
//em 21 segundos irei pará-la
//ela deve executar 4 vezes

//primeiro atribuo a repetição da ação á uma variável

const intervalo = setInterval(() => {
  console.log('executou');
}, 5000);

//depois atribuo ela á outra função para limpar esse intervalo

setTimeout(() => {
  clearInterval(intervalo);
}, 21000);