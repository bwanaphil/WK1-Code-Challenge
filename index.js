// Student Grade Generator
function generateGrade(){
const marks 
let grade 

//create the arguments
if(marks >= 0 && marks <= 100){
    if(marks>=80){
        grade="A";
    }
    else if(marks>=60){
        grade="B";
    }
    else if(marks>=50){
        grade="C";
    }
    else if(marks>=40){
        grade="D";
    }
    else {
        grade="E";
    }
    return grade ;
}
else {
    console.log("Invalid, grade not between 0 to 100!");
}
}
//call the function
generateGrade() 

// Speed Detector
function speedDetector(){
    // Declare variables
    const speed
    let limit = 70 ; 
    let ticket = 5 ; 
    let prompt

    //create the arguments
    if (speed <= limit){
        prompt="Ok";
    }
    else{
        const demeritPoints = ((speed - limit)/ticket)*1;
        let punishment;
        if (demeritPoints >12){
            punishment = "License suspended";
            return punishment
        } 
        else {
            punishment = `Points: ${demeritPoints}`; 
            return punishment
    }
}
}
//call the function
speedDetector()



// Net Salary Calculator

function netSalaryCalculator (){
    // Declare variables
    const basicSalary;
    const benefits;
    const payee;
    const nhif;
    const nssf;
    const gross = basicSalary + benefits;
    const net = gross - payee - nhif - nssf ; 
    function calculations (){
        console.log(`Your payee is ${payee}`);
        console.log(`Your NHIF deductions are ${nhif}`);
        console.log(`Your NSSF deductions are ${nssf}`);
        console.log(`Your Gross Salary is ${gross}`);
        console.log(`Your Net Salary is ${net}`); 
    }
   
}

//call the function
netSalaryCalculator()
















