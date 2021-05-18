class Animal {
  sex

  constructor (props) {
    this.sex = props.sex;
  }
}

class Human extends Animal {
  //atributos
  hungry = true;
  name
  age
  

  //contrutor
  constructor(props) {
    super(props);
    if (!props.name) {
      throw Error ('Nome é obrigatório')
    }
    this.name = props.name;
    this.age = props.age;
  }

  //metodos
  eat() {
    this.hungry = false;
  }
}
  
const person = new Human({
  name: 'Kevin',
  age: 32,
  sex: 'male'
})
console.log(person);