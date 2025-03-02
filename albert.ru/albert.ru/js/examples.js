//1
/*
let num1 = 2
let num2 = 4
let sum = num1+num2

console.log("sum="+sum)
*/

//2
/*window.onload=function(){
    
    let num1 = Math.floor(Math.random()*(100-1))+1
    document.getElementById("num1").innerHTML=num1
    let num2 = Math.floor(Math.random()*(100-1))+1
    document.getElementById("num2").innerHTML=num2
    let sum = num1+num2
    
    document.getElementById("sum_result").innerHTML=sum
    //span=document.getElementById("sum_result")
    //txt=document.createTextNode(sum)
    //span.appendChild(txt)
}*/

//3
/*function generateNumber(max_num, min_num){
    return Math.floor(Math.random()*(max_num-min_num))+1
}

function sumTwoNumbers(num1, num2){
    return num1+num2
}

function printResult(){
    let num1=generateNumber(100,1)
    let num2=generateNumber(100,1)
    let sum=sumTwoNumbers(num1,num2)
    document.getElementById("num1").innerHTML=num1
    document.getElementById("num2").innerHTML=num2
    document.getElementById("sum_result").innerHTML=sum
}

window.onload=printResult 
*/

//4
let generateNumber = (max, min) => Math.floor(Math.random()*(max-min))+1

let sumTwoNumbers = (n1, n2) => n1+n2

let setElement = (id,val) => document.getElementById(id).innerHTML=val


let isPrime=(num)=>{
    let flag = true
    console.log(num)
    for(let i=2; i<num;i++){
        if(num%i == 0){
            flag=false
            break
        }
    }
    return flag
}

let generateNumberAndDivisors = () => {
    let number = Math.floor(Math.random() * 10000) + 1;
    
    let findDivisors = (num) => {
        return Array.from({ length: num }, (_, i) => i + 1)
            .filter(i => num % i === 0);
    };

    let divisors = findDivisors(number);

    let result = "Число: " + number + "<br>Делители:" + divisors.join(', ');
    document.getElementById('divisorsResult').innerHTML = result;
};


window.onload=()=>{
    // найти сумму 2 чисел
    let n1 = setElement("num1", generateNumber(1000,1))
    let n2 = setElement("num2", generateNumber(1000,1))
    setElement("sum_result", sumTwoNumbers (n1, n2))
    
    // проверка число простое или нет
    let num = setElement("num" , generateNumber(1000,1))
    if(isPrime(num)){
        setElement("prime_result", "простое")
    }else{
        setElement("prime_result", "имеет делители")
    }
    // показывает делители числа
    let generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateNumberAndDivisors);
}




