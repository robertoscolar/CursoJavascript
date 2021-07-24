/*
type Person = {
    name: string,
    age: number
}
*/

interface Animal {
    sex: 'male' | 'female'
}

interface Human {
    name: string,
    age: number
}

type Person = Animal & Human

const person:Person = {
    name: 'Daniel',
    age: 21,
    sex: 'female'
}

//---------------------------------------------------------------------
//outro jeito de fazer a mesma coisa:

interface Animal1 {
    sex: 'male' | 'female'
}

interface Human1 extends Animal1 {
    name: string,
    age: number
}

const human:Human1 = {
    name: 'Daniel',
    age: 21,
    sex: 'female'
}

console.log(person)
console.log('------------------------------------------------------')
console.log(human)