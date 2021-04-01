var person = {
  age: 14,
  name: 'Lucas'
}

//função pura = não altera valores do objeto
function getRemainingYearsToMajority(person) {
  return 18 - person.age
}

//var RemainingYears = getRemainingYearsToMajority(person)
//console.log(RemainingYears)

console.log(getRemainingYearsToMajority(person))
console.log(person.age)



//função impura (ou imperativa)
//altera valores do objeto

function increasePersonAge(person) {
  person.age = person.age + 1
}

increasePersonAge(person)
console.log(person.age)
