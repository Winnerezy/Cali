const answer = document.getElementById('answer');

let currentNum = '';
let previousNum = '';
let operators = '';
function number(num){
   currentNum += num;
   console.log(currentNum);
}

function operator(op){
    operators = op;
    console.log(operators)
    previousNum = currentNum;
    currentNum = '';
}

function calculate(){
    const num1 = parseFloat(previousNum)
    const num2 = parseFloat(currentNum)

    switch(operators){
        case '+':
           const result = num1 + num2;
            answer.textContent = result
    }
}
