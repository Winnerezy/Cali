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

