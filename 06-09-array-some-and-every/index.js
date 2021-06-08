const guests = [
  {name: 'Lucas', age:18},
  {name: 'Mario', age:17},
  {name: 'Rogério', age:15},
  {name: 'Matheus', age: 22},
  {name: 'Carlos', age: 20},
]

//existem maiores de idade na lista de convidados?
const hasAdults = guests.some(guest => guest.age >= 18);
console.log(hasAdults)

//todos os convidados são maiores de idade?

const everyoneIsAnAdult = guests.every(guest => guest.age >= 18);
console.log(everyoneIsAnAdult)