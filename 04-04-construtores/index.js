class Human {
  //atributos
  hungry = true;
  name
  age
  sex

   //contrutor
   constructor(props) {
    if (!props.name) {
      throw Error ('Nome é obrigatório')
    }
    this.name = props.name;
    this.age = props.age;
    this.sex = props.sex;
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
  