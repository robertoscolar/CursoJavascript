"use strict";
//union:
function findPerson(cpf) {
    if (typeof cpf === 'string') {
        return cpf.toUpperCase();
    }
    return cpf.toFixed(2);
}
findPerson(123);
findPerson('123');
function getPersonStatus(person) {
    console.log(person);
    return person.sex;
}
var person = {
    sex: "female",
    hungry: true
};
console.log(getPersonStatus(person));
