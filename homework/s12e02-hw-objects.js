// 1. Напишите функцию-конструктор (с большой буквы название)
// которая делает следующее:
// генерирует случайное число от -100 до 100 и записывает его в
// свойство создаваемого объекта используя this (название
// свойства на ваш выбор)

// Добавьте в объект метод showNumber, который выводит это
// число в консоль и метод isNegative, который
// возвращает true если число меньше ноля.

function RandomNumber() {
  const min = -100;
  const max = 100;
  this.number = Math.floor(Math.random() * (max - min + 1)) + min;
  this.showNumber = function() {
    console.log("Number === " + this.number);
  }
  this.isNegative = function() {
    if(this.number < 0) {
      return true;
    }
    return false;
  }
}

// 2. Создайте объект с помощью оператора new (в новую константу
// присвойте результат вызова вашей функции счерез оператор new)
const num = new RandomNumber();

// 3. Создайте константу с пустым массивом. Используя цикл for
// создайте 10 таких же объектов и с помощью push добавьте в массив
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(new RandomNumber());
}

// 4. Теперь, когда наши 10 объектов находятся в массиве мы можем
// с ними работать, также как работали с объектами ранее.
// Используйте метод массива filter и используя isNegative
// из ваших объектов отберите отрицательные числа.
// Используя forEach и метод объекта showNumber отобразите числа в консоль.
arr.filter(obj => obj.isNegative()).forEach(element => element.showNumber());
