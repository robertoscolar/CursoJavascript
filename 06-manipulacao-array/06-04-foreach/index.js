const fruits = ['banana','morango','laranja']

function eatAllFruits() {
  fruits.forEach ( (fruit, index) => {
    console.log(`Estou comendo ${fruit}`)
    console.log(`Ele era o ${index + 1}º índice da minha lista.`)
    console.log('--------------------------------')
  })
}

eatAllFruits();