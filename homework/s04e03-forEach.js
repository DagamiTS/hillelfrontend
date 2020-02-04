// Пора знакомиться с первым методом массива - forEach.
// https://learn.javascript.ru/array-methods#perebor-foreach

const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

// Выведете в консоль элементы массива с помощью for
// Сделайте то же самое, с помощью метода forEach

// NOTE: forEach позволяет нам описать, какие действия мы хотим произвести с каждым
// элементом массива, но скрывает (делает за нас) перебор элементов


// Можно как определить функцию заранее и передать как аргумент в метод forEach


function print(...) {
  ...
}

['item1', 'item2'].forEach(print);

// или описать функцию без имени (анонимную) прямо в вызове forEach





['item1', 'item2'].forEach(function(...) {
  ...
});