const fruits = ['banana','morango','laranja']

//foreach traria um valor undefined no caso de retorno das funções do tipo array
//pra isso usamos .map
//atribui elas ao valor capitalizedFruits, sem mexer no valor original da fruits
const capitalizedFruits = fruits.map((fruit) => {
  return fruit.toUpperCase()
})

console.log(capitalizedFruits)
console.log(fruits)