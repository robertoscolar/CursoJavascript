const ingredients = ['ovo', 'presunto'];
const spices = ['sal', 'pimenta'];

//ingredients.push.apply(ingredients,spices);
ingredients.push(...spices);


console.log(ingredients);

