const students = [
  {name: 'Lucas', grade:8},
  {name: 'Mario', grade:5},
  {name: 'Rogério', grade:9},
  {name: 'Matheus', grade: 7},
  {name: 'Carlos', grade: 2},
]

//prev será o valor de 0(declarado no final da função)
const classroomTotalPoints = students.reduce((prev,current) => {
  console.log(prev)
  console.log(current)
  return prev + current.grade;
}, 0)