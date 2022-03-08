// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const student =[ 'sharifu' , 'soborna ' ,{name: 'arif', age: '20', frome: 'india'}, ' taizul islam' , 'Afrin'];
// Object k JSON a korte stringify use korte hoy 
const studentJSON = JSON.stringify(student[2].frome);



// Objectr js file k JSON a convert korte jay aei vabe  
const studentJSON = JSON.stringify(student);
// Objectr json file k normal a convert korte jay aei vabe  
const studentJSON1 = JSON.parse(studentJSON);

console.log(studentJSON);
console.log(studentJSON1);
console.log(student);

//2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));



// for 
const numbers = [23, 54, 67, 87, 23, 78];
// numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);




// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
// create a new array without one specific item 
const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const valueOfproducts = [...products,newProduct];
// console.log(valueOfproducts);

// remove phone means create a new array without the phone
const filterofobject = products.filter(n => n.name !=='phone');
console.log(filterofobject);



