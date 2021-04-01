var me = {
  nome : 'Roberto',
  idade : 22
}

function checaIdade(pessoa) {
  if (pessoa.idade > 17) {
    console.log('Essa pessoa é maior de idade.')
  }else {
    console.log('Menor de idade. Prenda-o!')
  }
}

console.log(me.nome + ' tem ' + me.idade + ' anos.')
checaIdade(me)