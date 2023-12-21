let credits = 23580;
const pricePerDroid = 3000;

// Запит кількості дроїдів через prompt
const quantityToBuy = prompt("Скільки дроїдів ви хочете купити?");

// Перевірка натискання кнопки Cancel
if (quantityToBuy === null) {
    console.log("Скасовано користувачем!");
} else {
    // Розрахунок загальної ціни
    const totalPrice = pricePerDroid * quantityToBuy;

    // Перевірка можливості оплати
    if (totalPrice > credits) {
        console.log("Недостатньо коштів на рахунку!");
    } else {
        // Розрахунок залишку кредитів та виведення повідомлення
        credits -= totalPrice;
        console.log(`Ви купили ${quantityToBuy} дроїдів, на рахунку залишилося ${credits} кредитів.`);
    }
}
