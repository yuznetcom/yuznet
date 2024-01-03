let result = document.getElementById('result');
let historyContainer = document.getElementById('history');
let history = [];

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function appendDecimal() {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
}

function calculate() {
    try {
        let calculation = result.value + ' = ' + eval(result.value);
        result.value = eval(result.value);

        if (history.length >= 10) {
            history.shift();
        }

        history.push(calculation);
        updateHistory();
    } catch (error) {
        result.value = 'Error';
    }
}

function clearInput() {
    result.value = '';
}

function deleteLastCharacter() {
    result.value = result.value.slice(0, -1);
}

function clearHistory() {
    history = [];
    updateHistory();
}

function powerOfTwo() {
    result.value = Math.pow(result.value, 2);
}

function squareRoot() {
    result.value = Math.sqrt(result.value);
}

function inverse() {
    result.value = 1 / result.value;
}

function factorial() {
    let num = result.value;
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    result.value = fact;
}

function updateHistory() {
    historyContainer.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        let calculation = document.createElement('div');
        calculation.textContent = history[i];
        historyContainer.appendChild(calculation);
    }
}
