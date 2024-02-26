const answer = document.getElementById('answer');
const numValue = document.getElementById('value');
let result;

let currentNum = '';
let previousNum = '';
let operators = '';
function number(num){
   currentNum += num;
   numValue.textContent = currentNum;
}

function operator(op){
    operators = op;
    numValue.textContent = operators;
    previousNum = currentNum;
    currentNum = '';
}

function calculate(){
    const num1 = parseFloat(previousNum);
    const num2 = parseFloat(currentNum);

    switch(operators){
        case '+':
            result = num1 + num2;
            if(num2 === ""){
            answer.textContent = num1;
            break;
            }else{
            answer.textContent = result;
            break;
            }  
        
        case '-':
         result = num1 - num2;
         answer.textContent = result;
         break;
         
        case 'x':
            result = num1 * num2;
            answer.textContent = result;
            break;

        case '/':
            result = num1 / num2;
            if(num2 === 0){
                answer.textContent = 'MATH ERROR';
                break;
            } else{
                answer.textContent = result;
                break;
            }
    }

}

function clear(){
    currentNum = '';
    previousNum = '';
    operators = '';
    answer.textContent = "";
    numValue.textContent = "";
}