function soma (a,b) {
  console.log(this);
  return a + b;
}

const me = {
  nome : 'Daniel'
}

//function.call passa os parâmetros em forma de tipo primitivo
console.log(soma.call(me, 1, 2));

//function.apply passa os parâmetros em forma de array
console.log(soma.apply(me,[1,2]));