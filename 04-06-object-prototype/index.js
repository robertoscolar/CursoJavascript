class Human {
  //atributos
  hungry = true;
  awake = true;
  //metodos
  eat() {
    this.hungry = false;
  }
}

//prototype é usado para ter acesso aos métodos da classe
//com isso posso injetar métodos novos e até mesmo alterar os antigos
Human.prototype.sleep = function () {
  this.awake = false;
}

const person = new Human();

person.sleep();

console.log('acordado? ' + person.awake);