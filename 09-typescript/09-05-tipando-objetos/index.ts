//para o meu código ficar menor e eu ter mais aproveitamento do mesmo
//farei um type aliasing listando a tipagem do objeto person 
/*
const person:{
    name: string
    age: number
    contacts: string[]
    isAlive: boolean
} = {
    name : 'Lucas',
    age : 22,
    isAlive: true,
    contacts: []
}

*/
type Person = {
    name: string
    age: number
    contacts?: string[]
    //contacts também poderia ser codado assim:
    //contacts: string[] | undefined,
    isAlive: boolean
}

const person: Person = {
    name : 'Lucas',
    age : 22,
    isAlive: true,
    contacts: ['Lucazao@gmail.com']
}

const person2: Person = {
    name: 'Cleiton',
    age: 17,
    isAlive: false,
}

console.log(person);
console.log(person2);

