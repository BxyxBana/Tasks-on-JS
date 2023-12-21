let country = prompt("Введіть країну для доставки:");
let deliveryCost;

switch (country.toLowerCase()) {
    case "китай":
        deliveryCost = 100;
        break;
    case "чилі":
        deliveryCost = 250;
        break;
    case "австралія":
        deliveryCost = 170;
        break;
    case "індія":
        deliveryCost = 80;
        break;
    case "ямайка":
        deliveryCost = 120;
        break;
    default:
        alert("У вашій країні доставка недоступна");
}

if (deliveryCost !== undefined) {
    alert(`Доставка в ${country} буде коштувати ${deliveryCost} кредитів`);
}
