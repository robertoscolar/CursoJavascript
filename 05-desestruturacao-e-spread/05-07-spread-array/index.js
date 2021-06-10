const parts = ['ombro','joelho']
const sentence = ['cabeça', ...parts, 'pé']

console.log(sentence);

//jeito antigo:
//const sentence = ['cabeça', parts[0], parts[1], 'pé']

//exemplo2 :

const immutableArray = ['select', '*', 'from'];
const mutableArray = [...immutableArray];
mutableArray.push('batata');

console.log(mutableArray);
console.log(immutableArray);