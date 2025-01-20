// Регулярное выражение
const regex = /\b[^Aa\s]{6,}\b/g; 

// Пример текста
const text = "Wonderful Happiness Joyful Time Task Apple";

// Найти все совпадения
const matches = text.match(regex);

// Вывод результата
if (matches) {
  console.log("Найденные слова:", matches);
} else {
  console.log("Совпадений не найдено.");
}
