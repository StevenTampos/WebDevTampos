const display = document.getElementById('display');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

function appendValue(value) {
    if (display.value === 'Syntax Error') display.value = '';
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === '') return;

        if (/[\+\-\*\/]{2,}/.test(display.value)) {
            throw new Error('Invalid Expression');
        }

        display.value = new Function('return ' + display.value)();
    } catch {
        display.value = 'Syntax Error';
    }
}

function percentage() {
    try {
        if (display.value.trim() === '') return;

        let expression = display.value;
        let match = expression.match(/([\d.]+)$/);

        if (match) {
            let lastNumber = parseFloat(match[0]) / 100;
            display.value = expression.replace(/([\d.]+)$/, lastNumber);
        }
    } catch {
        display.value = 'Syntax Error';
    }
}

function squareRoot() {
    try {
        if (display.value.trim() === '') return;

        let expression = display.value;
        let match = expression.match(/([\d.]+)$/);

        if (match) {
            let lastNumber = parseFloat(match[0]);
            if (lastNumber < 0) {
                display.value = 'Syntax Error';
                return;
            }
            let sqrtValue = Math.sqrt(lastNumber);
            display.value = expression.replace(/([\d.]+)$/, sqrtValue);
        } else {
            display.value = `√(${expression})`;
            try {
                display.value = Math.sqrt(eval(expression));
            } catch {
                display.value = 'Syntax Error';
            }
        }
    } catch {
        display.value = 'Syntax Error';
    }
}


document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendValue(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendValue(key); // Operators
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '%') {
        percentage();
    } else if (key.toLowerCase() === 'r') {
        squareRoot();
    }
});
