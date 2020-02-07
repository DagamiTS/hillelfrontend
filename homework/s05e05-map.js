/**
 * В этом задании, с помощью метода массива .forEach мы реализуем другой, один из
 * наиболее частоиспользуемых методов массива - .map, но не сразу.
 * Во всем задании используйте методы массива .forEach и .push
 */


/**
 * Создайте функцию, которая принимает на вход массив произвольных элементов.
 * Далее, создает новый пустой массив, заполняет его элементами из входящего и возвращает.
 *
 * @param {any[]} inputArray - входящий массив
 * @returns {any[]}
 */

function copy(inputArray) {
    let outputArray = [];
    inputArray.forEach(item => {
        outputArray.push(item);
    });
    return outputArray;
}

/**
 * Напишите улучшенную версию функции copy, которая кроме копирования
 * будет умножать все элементы на 2
 * @param {number[]} inputArray - входящий массив
 * @returns {number[]}
 */
function copyAndMultiply(inputArray) {
    let outputArray = [];

    inputArray.forEach(item => {
        let multiplyResult = item * 2;
        outputArray.push(multiplyResult);
    });

    return outputArray;

}

/**
 * Функция - это значение, и его тоже можно передавать.
 * Это набор инструкций, который можно будет выполнить позже.
 *
 * Напишите функцию <map>
 * Функция должна принимать массив элементов и вторым аргументом - функцию,
 * которую примените к каждому элементу, вместо умножения из прошлого примера.
 *
 * @param {any[]} inputArray
 * @param {function} operation
 * @returns {any[]}
 */
function map(inputArray, operation) {
    let outputArray = [];

    inputArray.forEach(item => {
        outputArray.push(operation(item));
    });

    return outputArray;

}


// Пример использования функции map, после того, как она будет готова:
function square(x) {
    return x * x;
}
const numbers = [1, 5, 10];
const squares = map(numbers, square);
// [1, 25, 100];


// BONUS: Экспорт функций для юнит-тестирования в nodeJS окружении.
// Для запуска юнит тестов необходимо:
// 1. установить зависимости командой "npm install"
// 2. запустить тесты командой "npm run test"
module.exports = {
    copy,
    copyAndMultiply,
    map,
}