let input;
let total = 0;

do {
    input = prompt("Введіть число:");

    if (input !== null) {
        // Перевірка, чи введено число
        if (!isNaN(input)) {
            total += parseFloat(input);
        } else {
            alert("Було написано не число, спробуйте ще раз");
        }
    }
} while (input !== null);

alert(`Загальна сума чисел дорівнює ${total}`);
