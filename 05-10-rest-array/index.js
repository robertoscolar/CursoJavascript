const fruits = ['manga','morango', 'kiwi', 'maracujá','banana']
const [firstItem, secondItem, ...otherItems] = fruits;
//const otherFruits = fruits.slice(2);

console.log(otherItems);