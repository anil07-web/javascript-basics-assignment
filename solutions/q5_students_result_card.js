// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

const results=()=>{
    const studentsList=[
        {name:'kajal',subjects:[{subject:'Grammer',marks:50},{subject:'Accounts',marks:79}]},
        {name:'tejal',subjects:[{subject:'Grammer',marks:94},{subject:'Accounts',marks:94}]},
        {name:'urmita',subjects:[{subject:'Grammer',marks:98},{subject:'Accounts',marks:73}]},
        {name:'rahul',subjects:[{subject:'Grammer',marks:87},{subject:'Accounts',marks:49}]},
        {name:'akshay',subjects:[{subject:'Grammer',marks:38},{subject:'Accounts',marks:67}]},
        {name:'aashu',subjects:[{subject:'Grammer',marks:33},{subject:'Accounts',marks:34}]},
        {name:'pratik',subjects:[{subject:'Grammer',marks:34},{subject:'Accounts',marks:50}]}
    ]
    const result=()=>
    studentsList.reduce((obj,item)=>{

        let pres=item.subjects.reduce(()=>{
            return (item.subjects[0].marks+item.subjects[1].marks)/item.subjects.length;
        }, {})
        console.log({ 'name':item.name,'percentage':pres});
    }, {})
    const finResult=result(studentsList);
    return finResult;
}
results();