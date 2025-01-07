function checkProbabilityTheory(count) {
    let evenCount = 0;  // Лічильник парних чисел
    let oddCount = 0;   // Лічильник непарних чисел

    // Генерація випадкових чисел та підрахунок парних/непарних
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;  // Якщо число парне – збільшуємо лічильник парних
        } else {
            oddCount++;   // Якщо число непарне – збільшуємо лічильник непарних
        }
    }

    // Обчислення відсотків
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    // Вивід результатів у консоль
    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних чисел:", evenPercentage.toFixed(2) + "%");
    console.log("Відсоток непарних чисел:", oddPercentage.toFixed(2) + "%");
}

// Виклик функції з генерацією 100 чисел
checkProbabilityTheory(100);

