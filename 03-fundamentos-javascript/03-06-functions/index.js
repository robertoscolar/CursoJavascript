pessoa = {
  nome : 'Daniel',
  greet() {
    console.log(this)
    return 'batata'
  }
}

pessoa.greet()

function getRemainingYearsToMajority(age) {
  return 18 - age
}

const remainingYears = getRemainingYearsToMajority(15)
console.log(remainingYears)

