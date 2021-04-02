const age = 21
//não é possivel redeclarar]

me = {
  nome: 'Daniel',
  idade: 23
}

me.idade = 21

const list = ['banana', 'batata']
list.push('morango')

console.log(list)
console.log(me)

//constantes são delimitadas por blocos
//ex:

if(me.idade > 18) {
  const pastYears = me.idade - 18
  console.log(pastYears)
}

//nesse momento não existe mais a constante pastYears
