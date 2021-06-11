const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('123')
  }, 5000);
})

//encapsulando as promises dentro de uma função

function handleClick () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('123')
    }, 5000);
  })
}

//para acessar o valor de uma promise precisamos usar o método then
//o valor do retorno de then será o valor final da promise
//o código só irá ser aplicado se a promise estiver resolvida
const result = handleClick()
  .then(res => {
    console.log(res === 123 )
    return res
  })
  .catch(err => {
    console.log('houve um erro')
    console.log(err)
  })