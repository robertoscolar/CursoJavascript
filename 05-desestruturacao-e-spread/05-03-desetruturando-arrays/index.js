const fruits = ['morango','pera','maçã']
const person = {name: 'Gilberto', age: '32'}
const person1 = {name: 'Giovana', age: '35'}
const person2 = {name: 'Godofredo', age: '33'}

//const secondFruit = fruits[1];

//console.log(secondFruit);

const [firstItem, secondItem] = fruits;

console.log(firstItem, secondItem)

//caso eu queira recuperar somente o segundo valor do meu array (no caso 'pera)
//eu poderia fazer desse jeito:

const [,segundoItem] = fruits;

console.log(segundoItem);

//posso também fazer isso com vários objetos, transformando-os em array
//acima temos 3 pessoas e vou recuperá-los dessa forma

const friends = [person,person1,person2];

//vou recuperar somente uma propriedade do objeto (no caso, name)
//jeito antigo:

  //const secondPerson = friends[1]
  //const name = secondPerson.name;

const [,{name}] = friends;
console.log(name);