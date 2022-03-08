// arry destructuring 


const numbar = [ 41 ,65];
const sharifu = numbar;
// const x = numbar[0];
// const y = numbar[1];
// const [x, y ] = [40,45];

const [x , y] = sharifu;
// console.log(sharifu);
function boxify(num1, num2) {
    const nums = [num1 + num2];
    return nums;
}

// const [first, second] = [90, 34

// console.log(boxify(90, 34));
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;
// console.log(secondMovie);

// object destructuring
// const { name, age } = { name: 'alu', age: 14 };
const { name, age,salary } = { id: 12, name: 'alu', salary: 3400, age: 14 };




const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}
// destructuring Object 
const { machine, ide } = employee;
const { weight, address } = employee.specification;

const { brand } = employee?.specification?.watch;

// destructuring arry 
const [numa, numb,numc] = employee.languages;
console.log(numb);