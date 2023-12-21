const ADMIN_PASSWORD = "qwerty";
let message;

// Запит пароля через prompt
const userPassword = prompt("Введіть пароль:");

// Перевірка введеного пароля
if (userPassword === null) {
    message = "Скасовано користувачем!";
} else if (userPassword === ADMIN_PASSWORD) {
    message = "Ласкаво просимо!";
} else {
    message = "Доступ заборонений, невірний пароль!";
}

// Виведення повідомлення
alert(message);
