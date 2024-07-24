function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Ошибка: Деление на ноль!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 0;
    }

    document.getElementById('result').innerText = result;
}

function changeSign() {
    const num1Field = document.getElementById('num1');
    const num2Field = document.getElementById('num2');

    num1Field.value = -parseFloat(num1Field.value);
    num2Field.value = -parseFloat(num2Field.value);

    // Выводим результат для первого числа
    document.getElementById('result').innerText = parseFloat(num1Field.value);
}