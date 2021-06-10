function createUser ({name, age, email}) {
  console.log(
    `Nome: ${name} || Idade: ${age} || Email: ${email}`);
  return {
    name: name,
    age: age,
    contact : { email: email}
  }
}

//aqui estou desestruturando a função já que estou recuperando só o nome e não todos os parâmetros
//const {name} = createUser('Lucas', 32, 'lucas.ola@hotmail.com');
//console.log(name);


const user = createUser ({
  name: 'Lucas',
  age: 32,
  email: 'lucas.ola@hotmail.com'
})

console.log(user);