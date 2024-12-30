// 1. 'number' + 3 + 3;
// 'number' - рядок. Додавання числа призводить до конкатенації.
// 'number' + 3 = 'number3'
// 'number3' + 3 = 'number33'
Результат: 'number33'

// 2. null + 3;
// null = 0
// 0 + 3 = 3
Результат: 3

// 3. 5 && "qwerty";
// 5 – це true значення (будь-яке ненульове число – це true).
// "qwerty" – це також true (непорожній рядок).
// Оскільки всі операнди true, оператор && повертає останній з них.
Результат: "qwerty"

// 4. +'40' + +'2' + "hillel";
// + перед рядком перетворює його на число.
// +'40' = 40
// +'2' = 2
// 40 + 2 = 42
// 42 + "hillel" = '42hillel' (конкатенація)
Результат: '42hillel'

// 5. '10' - 5 === 6;
// '10' перетворюється в число 10 при відніманні.
// 10 - 5 = 5
// 5 === 6 -> false
 Результат: false

// 6. true + false;
// true = 1, false = 0
// 1 + 0 = 1
 Результат: 1

 // 7. '4px' - 3;
// '4px' не може бути перетворено в число, так як там є ще літери. Віднімання призведе до NaN.
 Результат: NaN

// 8. '4' - 3;
// '4' перетворюється в число 4.
// 4 - 3 = 1
 Результат: 1 

// 9. '6' + 3 ** 0;
// 3 ** 0 = 1 (будь-яке число в нульовій степені = 1)
// '6' + 1 = '61' (конкатенація)
 Результат: '61'

// 10. 12 / '6';
// '6' перетворюється в число 6.
// 12 / 6 = 2
 Результат: 2

 // 11. '10' + (5 === 6);
 // 5 === 6 -> false
// '10' + false = '10false' (конкатенація)
  Результат: '10false'
 
// 12. null == ''
// null не дорівнює порожньому рядку
  Результат: false

// 13. 3 ** (9 / 3);
// 9 / 3 = 3
// 3 ** 3 = 27
 Результат: 27

// 14. !!'false' == !!'true'
// !! перетворює значення в boolean.
// !!'false' = true (непорожній рядок = true)
// !!'true' = true
// true == true -> true
  Результат: true

// 15. 0 || '0' && 1
// '0' (true) && 1 (true) -> 1
// 0 || 1 -> 1
  Результат: 1

 // 16. (+null == false) < 1;
 // +null = 0
// false = 0
// 0 == 0 -> true (1)
// 1 < 1 -> false (1 не може бути менше 1)
  Результат: false 

// 17. false && true || true
// false && true = false
// false || true = true
  Результат: true

// 18. false && (false || true);
// false || true = true
// false && true = false
  Результат: false

// 19. (+null == false) < 1 ** 5;
// +null = 0
// 0 == false, так як false = 0, то маємо 0 == 0 --> true 
// 1 ** 5 = 1, тобто 1 в ступені 5 буде 1
// true (1) < 1 --> false (1 не може бути менше 1)
Результат: false 