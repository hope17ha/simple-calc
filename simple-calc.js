let input = document.getElementById('input');
const operators = document.querySelectorAll('.operators div');
let displayedResult = false;

function onClickNumber() {
    
    const numberButtons = document.querySelectorAll('.numbers div');

   

    numberButtons.forEach( button => {
        button.addEventListener('click' , () => {
            if (displayedResult) {
                input.textContent = '';
                displayedResult = false;
            }
            const value = button.textContent;
            input.textContent += value;
        })
    })
}

function onClearButton() {
    document.getElementById('clear').addEventListener('click', () => {
        input.textContent = '';
    })
}



function onOperatorsClick(){
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            const operatorsValue = operator.textContent;
            input.textContent += operatorsValue;
        })
    })
}

function resultClick() {
    const resultBtn = document.getElementById('result');

    resultBtn.addEventListener('click', () => {
        let currentInput = input.textContent;
        currentInput = currentInput.replace('×', '*').replace('÷', '/');
        

        const inputArray = currentInput.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);

        if (!inputArray){
            input.textContent = 'Error';
            displayedResult = true;
            return;
        }
        if (inputArray[0] === '+' || '-' || '*' || '/'){
            input.textContent = 'Error';
            displayedResult = true;
            return;
        }

        for (let i = 0; i < inputArray.length ; i++){
            if (inputArray[i] === '*' || inputArray[i] === '/') {
                const leftDigit = parseFloat(inputArray[i-1]);
                
                const rightDigit = parseFloat(inputArray[i+1]);
                
                let result;
                if (rightDigit === 0 && inputArray[i] === '/'){
                    input.textContent = 'Infinity';
                    displayedResult = true;
                }
                if (rightDigit[0] === 0 || leftDigit[0] === 0){
                    input.textContent = 'Infinity';
                    displayedResult = true;
                }
                inputArray[i] === '*' ? result = leftDigit * rightDigit : result = leftDigit / rightDigit;
                
                inputArray.splice(i - 1, 3, result.toString());
                i = -1;
            }

            if (inputArray[i] === '+' || inputArray[i] === '-'){

                const leftDigit = parseFloat(inputArray[i-1]);
                
                const rightDigit = parseFloat(inputArray[i+1]);
                
                let result;
                inputArray[i] === '+' ? result = leftDigit + rightDigit : result = leftDigit - rightDigit;
                
                inputArray.splice(i - 1, 3, result.toString());
                i = -1;
            }
            
        }
        console.log(inputArray[0]);
        input.textContent = inputArray[0];
        displayedResult = true;
    })
    

}

function onStart() {
    onClickNumber();
    onClearButton();
    onOperatorsClick();
    resultClick();
}

onStart();