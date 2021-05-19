const person = {
  name: 'Italo',
  age: 14
}

function introduce ({name, age}) {
  console.log(`Meu nome é ${name} e eu tenho ${age} anos.`);
}

const fruits = ['morango', 'pera', 'banana'];

const [firstFruit, secondFruit] = fruits;

introduce(person);
