/**
 * На ферме есть разные животные и птицы.
 * Необходимо посчитать суммарное количество ног у всех
 * жителей фермы. Чтобы не было скучно, сделаем это задание
 * с помощью объектов и функций-конструкторов.
 *
 * Для начала создадим объект-прототип Animal,
 */
function Animal() {
  this.legCount = 0;
}

/**
 * Мы не бдем обращаться к legCount напрямую, а
 * добавим для этого метод getLegCount
 */
Animal.prototype.getLegCount = function() {
  return this.legCount
}

/**
 * Создадим экземпляр Animal
 */
const animal = new Animal();

// Готово! Выводится - 0
console.log(animal.getLegCount());

/**
 * Пора делать разных животных
 *
 * Создайте функции-конструторы для 3 типов существ:
 * Pig, Chicken, Cow, Farmer.
 * Пусть каждая функция-конструктор сохраняет правильное
 * количество ног в this.legCount.
 *
 * Пишем 3 конструктора тут
 */

function Pig() {
  this.legCount = 4;
}
function Chicken() {
  this.legCount = 2;
}
function Cow() {
  this.legCount = 4;
}
function Farmer() {
  this.legCount = 2;
}

/**
 * После того, как написали 4 функции-конструктора по одной
 * для Pig, Chicken, Cow, Farmer:
 * Чтобы иметь возможность использовать getLegCount у наших существ
 * мы должны присвоить ссылку на объект animal (_не_ конструктор Animal)
 * в prototype каждого нашего конструктора.
 * например Pig.prototype = animal;
 * Тогда все методы и свойства прототипа (animal) станут доступны
 * в новых екземплярах класса Pig.
 */
Pig.prototype = animal;
Chicken.prototype = animal;
Cow.prototype = animal;
Farmer.prototype = animal;


const animals = [];

/** Теперь создаем существ с помощью new и добавляем их в массив animals */
const PIG_COUNT = 725;
const CHICKEN_COUNT = 12300;
const COW_COUNT = 107;
const FARMER_COUNT = 1;

/**
 * Тут будет несколько циклов, и не забудьте про фермера
 * и массив animals - заполнен
 */
for (let i = 0; i < PIG_COUNT; i++) {
  animals.push(new Pig());
}
for (let i = 0; i < CHICKEN_COUNT; i++) {
  animals.push(new Chicken());
}
for (let i = 0; i < COW_COUNT; i++) {
  animals.push(new Cow());
}
for (let i = 0; i < FARMER_COUNT; i++) {
  animals.push(new Farmer());
}


/**
 * Считаем ноги с помощью forEach и метода getLegCount,
 * который доступен в любом животном.
 * Выводим результат в консоль.
 */
let legs = 0;
animals.forEach( element => legs = legs + element.getLegCount());
console.log(`Quantity of legs === ${legs}`);