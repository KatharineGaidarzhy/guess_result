var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки email
var trustedEmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Отфильтровываем доверенные email
var trustedEmails = arr.filter(user => trustedEmailPattern.test(user.email)).map(user => user.email);

// Виводим результат
console.log(trustedEmails);

