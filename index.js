let operatorButtons = document.getElementsByClassName('operator');
let numberButtons = document.getElementsByClassName('no');
let numberInput = document.getElementById('numberInput');
let resultOutput = document.getElementById('result');
let firstNum = undefined;
let secondNum = undefined;
let operation = undefined;
let result = undefined;
let x = '';
let y = '';


var calc = (firstNum, secondNum, operation) =>
{
      if(operation == '+') {return firstNum + secondNum;}
      if(operation == '-') {return firstNum - secondNum;}
      if(operation == '*') {return firstNum * secondNum;}
      if(operation == '/') {return firstNum / secondNum;}

}

var reakcija1 = (ev) => { 
    resultOutput.value = '';
    if(operation == undefined || operation == null){
    switch(ev.target.innerText){
        case '1': 
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            x += ev.target.innerText;
            numberInput.value = x;
            if(x[0] == '0' && x.length >1 ) 
            {
                 alert("Greska! Nepostojeci broj");
                 numberInput.value = '';
                 x = '';
                 return;
            }
            if(x == '' || x == null || x == undefined)
            {
                alert("Greska! Nepostojeci broj");
                numberInput.value = '';
                return;
            }
            else{
                 firstNum = parseInt(x);
                 console.log(firstNum);
            }
    }}

    else{    
        switch(ev.target.innerText){
            case '1': 
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                y += ev.target.innerText;
                numberInput.value = y;
                if(x[0] == '0' && y.length >1 ) 
                {
                     alert("Greska! Nepostojeci broj");
                     numberInput.value = '';
                     return;
                }
                if(x == '' || x == null || x == undefined)
                {
                alert("Greska! Nepostojeci broj");
                numberInput.value = '';
                return;
                }
                else{
                     secondNum = parseInt(y);
                     console.log(secondNum);
                }
        
    }


    }
    switch(ev.target.innerText){
    case '+': 
    case '-':
    case '*':
    case '/':
        if(firstNum != null || firstNum != undefined)
        {
            numberInput.value = ev.target.innerText;
            operation = ev.target.innerText;
            console.log(firstNum);

            break;
        }
        else 
        {
            alert("Greska! Unesite prvi broj!");
            numberInput.value = '';
            return;
        }

    case '=':
            if(firstNum == null || firstNum == undefined || secondNum == undefined || secondNum == null || operation == undefined || operation == null){
                alert("Greska! Vrijednosti nisu pravilno uensene!");
                numberInput.value = '';
                return;
            }
            else{
            result = calc(firstNum, secondNum, operation);
            resultOutput.value = result;

            }
            x = '';
            y = '';
            operation = undefined;
            firstNum = undefined;
            secondNum = undefined;
            numberInput.value = '';
    }
    }


for (let i = 0; i < numberButtons.length + operatorButtons.length; i++)
{
    let currentBtn = numberButtons[i];
    currentBtn.addEventListener('click', reakcija1);
}





