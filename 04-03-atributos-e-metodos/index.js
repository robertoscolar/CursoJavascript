class Human {
//atributo
  hungry = true;
//metodo
  eat() {
    this.hungry = false;
  }
}

const person = new Human();

console.log(person.hungry);

person.eat();

console.log(person.hungry);