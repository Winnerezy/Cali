const answer = document.getElementById('answer');
const numValue = document.getElementById('value');
let result;

let currentNum = '';
let previousNum = '';
let operators = '';

//execute the function to click on the predefined numbers to get the current input 
function number(num){
   currentNum += num;
   numValue.textContent = currentNum;
}

//function to add an operator
function operator(op){
    operators = op;
    numValue.textContent = operators;
    previousNum = currentNum;
    currentNum = '';
}

//calculate function to execute when the "=" is clicked 
function calculate(){
    const num1 = parseFloat(previousNum);
    const num2 = parseFloat(currentNum);

    //if any operator is clicked the piece of code will be executed
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

const clear = document.getElementById('clear');

//clears the screen when AC is clicked
clear.addEventListener('click', () => {
    answer.textContent = '';
    numValue.textContent = '';
})
