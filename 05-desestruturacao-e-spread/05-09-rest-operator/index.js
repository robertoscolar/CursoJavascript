//function createUser(name,age,contact1,contact2,contact3) {
//  const args = Array.from(arguments);
//  return{
//    name,
//    age,
//    contacts: args.slice(2)
// }
//}

//function createUser(name,age,contact1,contact2,contact3) {
//  return{
//    name,
//    age,
      //se forem declarados na função serão associados mesmo sem valor(undefined)
//    contacts: [contact1, contact2, contact3]
//  }
//}

//exemplo:
//const person = createUser('Lucas',32,'email');

//outra limitação é que desse jeito ele só armazena três dados
//se eu passar um quarto contato essa informação será esquecida

function createUser(name,age,...contacts ) { //...contacts = spread operator
  return {
    name,
    age,
    contacts,
  }
}

const person = createUser('Roberval', 34, 'email1', 'email2', 'email3','email4','email5');
console.log(person);




