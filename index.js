"use strict";
//  Вивести на сторінку в один рядок через кому числа від 10 до 20 включно
console.log(
  "Завдання 1 \nВивести на сторінку в один рядок через кому числа від 10 до 20 включно"
);
{
  let string = "";
  for (let i = 10; i <= 20; i++) {
    string += `${i}, `;
  }
  console.log(string);
}

//  Вивести квадрати чисел від 10 до 20 включно
console.log("Завдання 2 \nВивести квадрати чисел від 10 до 20 включно");

{
  let squareNumber = "";
  for (let i = 10; i <= 20; i++) {
    squareNumber += `${i ** 2}, `;
  }
  console.log(squareNumber);
}

// Вивести таблицю множення на 7
console.log("Завдання 3 \nВивести таблицю множення на 7");

{
  for (let i = 0; i <= 10; i++) {
    console.log(`7 * ${i} = ${i * 7}`);
  }
}

// Знайти суму всіх цілих чисел від 1 до 15 включно
console.log("Завдання 4 \nЗнайти суму всіх цілих чисел від 1 до 15 включно");

{
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
    sum += i;
  }
  console.log(sum);
}

// Знайти добуток усіх цілих чисел від 15 до 35 включно
console.log(
  "Завдання 5 \nЗнайти добуток усіх цілих чисел від 15 до 35 включно"
);
{
  let sum = 1;
  for (let i = 15; i <= 35; i++) {
    sum *= i;
  }
  console.log(sum);
}

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500 виключно
console.log(
  "Завдання 6 \nЗнайти середнє арифметичне всіх цілих чисел від 1 до 500 виключно"
);

{
  let arithmeticMean = 0;
  const maxValue = 500;
  for (let index = 1; index < maxValue; index++) {
    arithmeticMean += index;
  }
  console.log(arithmeticMean / (maxValue - 1));
}

// Вивести суму лише парних чисел в діапазоні від 30 до 80 включно
console.log(
  "Завдання 7 \nВивести суму лише парних чисел в діапазоні від 30 до 80 включно"
);
{
  let evenNumber = 0;
  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) evenNumber += i;
  }
  console.log(evenNumber);
}

// Вивести всі числа в діапазоні від 100 до 200 включно кратні 3
console.log(
  "Завдання 8 \nВивести всі числа в діапазоні від 100 до 200 включно кратні 3"
);
{
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
console.log(
  "Завдання 9 \nДано натуральне число. Знайти та вивести на сторінку всі його дільники."
);
{
  const number = +prompt("До завдання #9 \nWrite your number here:");
  for (let i = 1; i <= number; i++) {
    //   if (!(number % i)) console.log(i);
    if (number % i === 0) {
      console.log(i);
    }
  }
}

// Визначити кількість його парних дільників
console.log("Завдання 10 \nВизначити кількість його парних дільників");
{
  const number = +prompt("До завдання #10 \nWrite your number here:");
  let quantity = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      quantity += 1;
    }
  }
  console.log(quantity);
}

// Знайти суму його парних дільників
console.log("Завдання 11 \nЗнайти суму його парних дільників");
{
  const number = +prompt("До завдання #11 \nWrite your number here:");
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

// Надрукувати повну таблицю множення від 1 до 10
console.log("Завдання 12 \nНадрукувати повну таблицю множення від 1 до 10");
{
  for (let first = 1; first <= 10; first++) {
    for (let second = 1; second <= 10; second++) {
      console.log(
        `${first} * ${second} = ${first * second} `,
        second === 10 ? "\n\n" : " "
      );
    }
    //   console.log(" ");
  }
}
