const students = [
  {name: 'Lucas', grade:8},
  {name: 'Mario', grade:5},
  {name: 'Rogério', grade:9},
  {name: 'Matheus', grade: 7},
  {name: 'Carlos', grade: 2},
]


//find retorna 1 item específico
//filter retorna em forma de lista
//find só busca o primeiro item correspondente á busca e depois para a iteração
const specificStudent = students.find((pupil) => {
    if (pupil.name === 'Lucas') {
      return true;
    }
});

console.log(specificStudent);
