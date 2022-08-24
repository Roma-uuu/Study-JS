"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
//
// const a = prompt('Один из последних просмотренных фильмов?',''),
//     b = prompt('На сколько оцените его?',''),
//     c = prompt('Один из последних просмотренных фильмов?',''),
//     d = prompt('На сколько оцените его?','');
//
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// const a = 19;
// switch (a) {
//     case 48:
//         console.log('Неверно');
//         break;
//     case 49:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// const hamburger = 0;
// const fries = 0;
// const cola = 0
//
// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Никто не поел');
// }
// console.log(hamburger || cola || fries);

// let result = '';
// const length = 7;
//
// for(let i = 1; i < length; i++) {
//     for(let j = 0; j < i; j++) {
//         result += "*";
//     }
//
//     result += '\n';
// }
// console.log(result);

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 15) {
//     i++;
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// function fifthTask() {
//     const arrayOfNumbers = [];
//
//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//
//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++ ) {
//         result[i] = arr[i];
//     }
//
//     // Не трогаем
//     return result;
// }

// Место для третьей задачи
// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }
//
//     console.log(result);
//     return result;
// }

// const lines = 5;
// let result = '';
//
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
//
// console.log(result)

// const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };
//
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Последний из просмотренных вами фильмов?',''),
//         b = prompt('Какую оценку ему поставите?','');
//
//     if (a != null && b!= null && a != '' && b !='' && a.length < 50) {
//         personalMovieDB[a] = personalMovieDB[b];
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//
// }
//
// if (personalMovieDB < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Ошибка');
// }
//
// console.log(personalMovieDB);