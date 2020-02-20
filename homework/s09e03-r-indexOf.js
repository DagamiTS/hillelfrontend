/**
 * @param {any[]} array
 * @param {any} item
 * @returns {number}
 */
function indexOf(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
          return i;
       }
    }
    return -1;
}

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(indexOf(beasts, 'bison'));
// expected output: 1

console.log(indexOf(beasts, 'giraffe'));
// expected output: -1
