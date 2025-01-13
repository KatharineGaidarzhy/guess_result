// Оголошення об'єкта з послугами
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Фарбування": "150 грн"
};

// Додавання нового методу для обчислення загальної вартості
services.price = function() {
    let prices = Object.values(this)
        .filter(value => typeof value === "string" && /^[0-9]+ грн$/.test(value))
        .map(value => parseInt(value));
    let total = prices.reduce((sum, price) => sum + price, 0);
    return total + " грн";
};

// Додавання методу для пошуку мінімальної ціни
services.minPrice = function() {
    let prices = Object.values(this)
        .filter(value => typeof value === "string" && /^[0-9]+ грн$/.test(value))
        .map(value => parseInt(value));
    return prices.length > 0 ? Math.min(...prices) + " грн" : "Ціни відсутні";
};

// Додавання методу для пошуку максимальної ціни
services.maxPrice = function() {
    let prices = Object.values(this)
        .filter(value => typeof value === "string" && /^[0-9]+ грн$/.test(value))
        .map(value => parseInt(value));
    return prices.length > 0 ? Math.max(...prices) + " грн" : "Ціни відсутні";
};

// Приклад використання
services['Розбити скло'] = "200 грн";

console.log("Загальна вартість:", services.price()); // Виведе: Загальна вартість: 490 грн
console.log("Мінімальна ціна:", services.minPrice()); // Виведе: Мінімальна ціна: 60 грн
console.log("Максимальна ціна:", services.maxPrice()); // Виведе: Максимальна ціна: 200 грн
