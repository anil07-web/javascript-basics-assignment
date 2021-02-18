// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here


const fruitArray=[
    {name:'Grapes',color:'green',price:100},
    {name:'Mango',color:'orange',price:250},
    {name:'banana',color:'yellow',price:70},
    {name:'cheery',color:'red',price:90},
];
const convertToobj=(fruitArray1,keyfield)=>
fruitArray1.reduce((obj,item) => {
    obj[item[keyfield]]=item;
    return obj;
}, {});
const fruitobj=convertToobj(fruitArray,'name');
// console.log(fruitobj);
// console.log(fruitobj.cheery);
// console.log(fruitobj.Mango);

