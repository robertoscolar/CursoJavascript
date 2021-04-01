var person1 = {
  nome : 'Roberto',
  idade : 12
}

var person2 = {
  nome : 'Reinaldo',
  idade : 13
}

var person3 = {
  nome : 'Kokimoto',
  idade : 14
}

var list = [person1,person2,person3]

for(var person of list) {
  console.log(person)
}