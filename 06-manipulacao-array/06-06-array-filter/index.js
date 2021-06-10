const students = [
  {name: 'Lucas', grade:8},
  {name: 'Mario', grade:5},
  {name: 'Rogério', grade:9},
  {name: 'Matheus', grade: 7},
  {name: 'Carlos', grade: 2},
]

const flushed = students.filter((pupil) => {
  return pupil.grade < 6;
})

console.log(flushed)
