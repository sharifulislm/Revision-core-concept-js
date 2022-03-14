
// Nurmal function start 

function multiply(num1 , num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(32 , 75);

// Object 3 ways to access property by name 

const student = {
    name : 'shakil khan',
    age: 36,
    movies: ['kink khan', 'dhakar Mastan']

}
// template string 
const about = `My name is ${student.name} movies name ${student.movies[1]} `;

// simple arrow function
const simpleArrow = () => 55;

// single parameter arrow function  
const addsixFive = num => num + 65;

// even arrow function
const isEven = x => x % 2 ==0;

// One way parameter arrow function  
const addThree = (x, y ,z) => x + y+ z;
// Multiply arrow function
const doMath = (num1 , num2) => {
    const sum = num1 + num2;
    return sum
    // multiply line arry function auto return kore nah 
}

const numbar = [10,20,40,41,10,10];

// create a new array from an older arry and add an element 
const newnUmbar =[...numbar,400];

numbar.push(99);
numbar.push(41);
numbar.push(942);
numbar.push(129);

numbar.pop(10);


// console.log(numbar);
// console.log(newnUmbar);
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const Mapvalu = products.map(sharifu => sharifu.name);
// console.log(Mapvalu);
// forEach use 
products.forEach(product=> {
    // console.log(product);
})
const filterValue = products.filter( products => products.price <= 2000);
// console.log(filterValue);
const findValue = products.find(n => n.name);
console.log(findValue);