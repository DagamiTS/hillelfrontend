// Напишите функцию concat (сокращение от concatenate), которая склеит
// несколько массивов в один.

const concat = (inputArrays) => {
  let results = [];
  inputArrays.forEach((subArray) => {
    if (Array.isArray(subArray)) {
      results = results.concat(concat(subArray));
    } else {
      results.push(subArray);

    }

  });

  return results;
};

console.log(concat([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));


// ожидаемый результат "[1,2,3,4,5,6,7,8,9]"
// ------------ INSERT CODE HERE! ----------------------------
// добавьте все элементы из каждого subArray в массив с результатами
// ------------ INSERT CODE HERE! ----------------------------