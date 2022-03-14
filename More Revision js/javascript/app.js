const FirstNames = " Taizul";
const listName = " Islam";
const country = " bangladesh";


const about = `Name${FirstNames}${listName} frome ${country}`;



// console.log(about); 
// const totalNubar = []

let numbar = [5, 23, 45, 53,56,56];
let numbar2 = [9,1]

// console.log(...numbar,...numbar2);
var name = "hero alom";
var lname = "Uganda";
//আমরা  যদি  সাধারণ  ভাবে  করি  তাহলে এভাবে  করতে   পারি
// console.log("Hello " + name + " Welcome to " + lname);

//এবং  খুব  সহজে  টেমপ্লেট স্ট্রিং  বাববার  করে  যে  কোনো  জায়গায়  ডাইনামিক  ভ্যালু  ব্যবহার  করতে   পারি
// console.log(`Hello, ${name}!Welcome to ${lname}`);

// spread operators can be used for arrays or objects

// cloning to prevent mutation.
let numList = [1, 2, 3];
let numListClone = [...numList]; // [1, 2, 3]

// spread operator for destructuring.
let animal = undefined;
const { age, ...rest } = animal || {};
console.log(rest);

let animals ={
    name: 'sharif',
    color: 'brown',
    age: 20,
};

const sum = (data ) => {
    console.log(data.name)
    console.log(data.color)
}
// sum(animals);


//নেস্টেড  অবজেক্ট  অফ  এরে

const dreamGirl = [
    {
      dream1: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [
                { name: "rofik" },
                { name: "jobbar" },
                { name: "salam" },
                { name: "borkot" },
                undefined,
              ],
            },
          },
          { instagram: "https://www.instagram.com/" },
          { twitter: "https://twitter.com/" },
          { github: "https://github.com/" },
          { phone: ["01254823212", "02152457"] },
        ],
      },
    },
  ];
  
const valueObjst = dreamGirl;
const frindName = valueObjst[0].dream1.contactInfo[0].facebook.friendsList;

for (const frinds of frindName){
    // console.log(frinds.name);
}

// for loop
for (let i = 0; i < frindName.length; i++) {
    const element = frindName[i];
    // console.log(element.name);
  }
// loop for in loop
  const object = { a: 1, b: 2, c: 3 };
  for (const data in object){
    //   console.log(object[data]);
  }

  const numbars = [1,2,3,4,5,6,7,8,9];
  const tem = [];
  const sums = (num) => {
      return num * num;
  };
  for (const elements of numbars){
      const square = sums(elements);
      tem.push(square);
  }
// console.log(tem);
// ম্যাপ কি ?  কিভাবে  কাজ করে ?

// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে।
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে

const numbers = [1, 2, 4, 6, 5, 10];
// এক লাইনেই  ম্যাপ করে   ফেলা
const result = numbars.map((x) => x * x);
// console.log(result);


// ম্যাপ এ যেভাবে  ভিতরে ভিতরে  লুপ চলে

//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে তত খুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |

const products = [
    { id: 1, name: "apple", price: 500, color: "golden" },
    { id: 2, name: "xiaomi", price: 124, color: "black" },
    { id: 3, name: "samsung", price: 200, color: "black" },
    { id: 4, name: "samsung2", price: 200, color: "black" },
    { id: 5, name: "lenovo", price: 300, color: "pink" },
    { id: 6, name: "xiaomi", price: 100, color: "pink" },
    { id: 7, name: "lenovo", price: 300, color: "pink" },
  ];
  const output = products.filter((pd) => pd.name != "lenovo");
  const output1 = products.find((pd) => pd.name == "lenovo");
  console.log(output1);

//   index aei dekhote ole aei vabe ues korte hoy 
  const output2 = products.map ((pd, index) => {
    console.log(index);
  });
//   console.log(output);

//   const output1 = products.filter((pd) => pd.name == "lenovo");
//   console.log(output1);
