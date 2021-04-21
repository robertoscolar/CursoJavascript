let age = 21
//não é possível redefinir uma variável com let
//let age = 22

//variável criada com var pode ser usada fora do bloco
//exemplo:
if (age > 18) {
  var test = 18
}

console.log(test)

//let só permite que a variável seja usada dentro do bloco em que foi declarada
//exemplo:

let idade = 23

if(idade > 18) {
  let test1 = 29
}

//console.log(test1)
//test1 is not defined