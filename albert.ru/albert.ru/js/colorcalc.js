function calculateColor(num1, num2, operation, r, color_r){

    let c1=+document.getElementById(num1).value
    let c2=+document.getElementById(num2).value
    let op=document.getElementById(operation).value
    let res=+document.getElementById(r)
    let result
    switch(op){
        case '+':
            result=c1+c2
            break
        case '-':
            result=c1-c2
            break
        case '*':
            result=c1*c2
            break
        case '/':
            result=c1/c2
            break
        default:
            document.getElementById(r).innerHTML="ошибка: неизвестная операция"
            return false
    }
    document.getElementById(r).innerHTML=result
    let colorString = "#" + result.toString(16).padStart(6,'0')
    document.getElementById(color_r).style.backgroundColor=colorString
    return false




}
function convertToColor(num, colorNum){
    let c1=+document.getElementById(num).value
    let colorString = "#" + c1.toString(16).padStart(6,'0')
    document.getElementById(colorNum).style.backgroundColor=colorString
    return true

}
function makeRandomColor(){
    let number1 = Math.floor(Math.random() * 1000) + 1;
    let number2 = Math.floor(Math.random() * 1000) + 1;
    let znaks = ['/', '+', '-', '*']
    let znak = znaks[Math.floor(Math.random() * znaks.length)];
    document.getElementById("n1").value=number1
    document.getElementById("n2").value=number2
    document.getElementById("op").value=znak
}