let operatorButtons = document.getElementsByClassName('operator');
let numberButtons = document.getElementsByClassName('no');
let numberInput = document.getElementById('numberInput');
let firstNum = 0;
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
                 console.log("Greska! Nepostojeci broj");
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
                     console.log("Greska! Nepostojeci broj");
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

            break;
        }
        else 
        {
            console.log("Greska! Unesite prvi broj!");
            return;
        }

    case '=':
            if(firstNum == null || firstNum == undefined || secondNum == undefined || secondNum == null || operation == undefined || operation == null){
                alert("Greska! Vrijednosti nisu pravilno uensene!");
            }
            else{
            result = calc(firstNum, secondNum, operation);
            alert(result);
            }
            x = '';
            y = '';
            operation = undefined;
    }
    }


for (let i = 0; i < numberButtons.length + operatorButtons.length; i++)
{
    let currentBtn = numberButtons[i];
    currentBtn.addEventListener('click', reakcija1);
}





