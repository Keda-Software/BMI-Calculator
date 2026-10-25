const btnEl=document.getElementById("btn");
const bmiInputEl=document.getElementById("bmi-result");
const weightCondition=document.getElementById("weight-condition");

function calculateBMI(){
const heightEl=document.getElementById("height").value/100;
const weightEl=document.getElementById("weight").value;

const bmiValue=(weightEl/(heightEl*heightEl)).toFixed(2);
bmiInputEl.value=bmiValue;

if(bmiInputEl.value<18.5){
    weightCondition.innerText="You are underweight";
    weightCondition.style.color="red";
}   
else if(bmiInputEl.value>=18.5 && bmiInputEl.value<=24.9){
    weightCondition.innerText="You are healthy";
    weightCondition.style.color="green";
}
else if(bmiInputEl.value>=25 && bmiInputEl.value<=29.9){
    weightCondition.innerText="You are overweight";
    weightCondition.style.color="orange";
}   
else if(bmiInputEl.value>=30){
    weightCondition.innerText="You are obese";
    weightCondition.style.color="red";
}
else{
    weightCondition.innerText="Please enter valid values";
    weightCondition.style.color="red";
}   
}

btnEl.addEventListener("click",calculateBMI);
