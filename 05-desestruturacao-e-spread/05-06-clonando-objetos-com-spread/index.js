const user = {
  name: 'Daniel Bonifacio',
  email: 'danielbonifacio@hotmail.com'
}

function introduce ({name, email}) {
    console.log(`Nome: ${name} ||| Email: ${email}`);
}

//desse jeito eu apenas crio mais uma referência para o mesmo objeto:
//const newUser = user;

//vamos clonar o objeto com as propriedades acima e depois alterá-los individualmente:
const newUser = {...user};

console.log('Antes de alterado:');
introduce(newUser);

newUser.name = 'Joãozinho';
newUser.email = 'joaozinho@hotmail.com'

console.log('Depois de alterado:');
introduce(newUser);
