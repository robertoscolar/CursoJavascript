const person = {
  name: 'Roberto',
  age: 16,
  contact: {
    email: 'robertoony@gmail.com'
  }
}

const {name, age, contact: email} = person;

        //const {name, age, contact } = person

//isso também funcionaria
//pegaria todas as propriedades de contact, inclusive email




//consigo também alterar nome de atributos
//por exemplo:

        //const {name: batata} = person;

//aqui estou dizendo que o nome do atributo name agora é batata