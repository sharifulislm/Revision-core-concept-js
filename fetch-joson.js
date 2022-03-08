// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
// const student =[ 'sharifu' , 'soborna ' ,{name: 'arif', age: '20', frome: 'india'}, ' taizul islam' , 'Afrin'];
// Object k JSON a korte stringify use korte hoy 
// const studentJSON = JSON.stringify(student[2].frome);



// Objectr js file k JSON a convert korte jay aei vabe  
const studentJSON = JSON.stringify(student);
// Objectr json file k normal a convert korte jay aei vabe  
const studentJSON1 = JSON.parse(studentJSON);

console.log(studentJSON);
console.log(studentJSON1);
// console.log(student);