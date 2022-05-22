function calculation(){

    let num1 = Number(prompt("Enter the numb1"));
    let num2 = Number(prompt("Enter the num2"));
    let operator = document.getElementById('operators');
    
    document.getElementById("result").innerHTML= ` ${num1}  +  ${num2}  = ${sum(num1 + num2)}`;
    document.getElementById("result").innerHTML= ` ${num1}  -  ${num2}  = ${sum(num1, num2)}`;
    document.getElementById("result").innerHTML= ` ${num1}  *  ${num2}  = ${sum(num1, num2)}`;
    document.getElementById("result").innerHTML = ` ${num1}  /  ${num2}  = ${sum(num1, num2)}`;

}

function sum(num1, num2){
    if (operator === '+')
    {
        return num1 + num2;
    } 
    
    if( operator === '-')

    {
        return num1 - num2;
    }
    
    if (operator === '*')

    {
        return num1 * num2;
    } 
    
    if (operator === '/')

    {
        return num1 / num2;
    }
} 