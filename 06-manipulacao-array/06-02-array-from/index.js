function greet() {
  //array.from: transforma meus elementos em um array

  //abaixo temos uma map function
  //no caso estou colocando uma exclamação sempre depois do meu argumento que é name  
  const args = Array.from(arguments, function (name) {
    return name + '!';
  });  
  args.forEach(argument => {
    console.log(`Hello ${argument}`);
  });
}

greet('Roberto','Thomas','Harry');