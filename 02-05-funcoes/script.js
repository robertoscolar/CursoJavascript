function cumprimentar(nome = 'mergulhador') {
  return 'Boa madrugada, ' + nome
}

//não passando um valor especifico essa tarefa fica
//á critério da própria função

var resultado = cumprimentar('Daniel')

console.log(resultado)