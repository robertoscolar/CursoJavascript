const parts = ['ombro', 'joelho'];
//const sentence = ['cabeça', parts[0], parts[1], 'pé'];
//spread:
const sentence = ['cabeça', ...parts, 'pé'];
console.log(sentence);

function createUser (name, age, ...contacts) {
  console.log(`Nome: ${name} || Idade ${age} || Contato1: ${contacts[0]} || Contato2: ${contacts[1]} || Contato3: ${contacts[2]}`)
  return {
    name,
    age,
    contacts
  }
}

createUser('Lucas',32,'lucas.manuel@hotmail.com','(11)55491-1515','(11)1212-1519');

const immutableArray = ['select','*','from','posts'];
//sem [...] o mutableArray só vai ser uma referência de immutableArray
//desse jeito eu estaria mudando o valor original de immutableArray indiretamente
//para que eu altere o valor só de um deles vou precisar clonar o array
const mutableArray = [...immutableArray];
mutableArray.push('where id = 1');
