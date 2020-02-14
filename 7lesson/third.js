const concat = function(inputArrays) {
  const results = [];
  inputArrays.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });

  return results;
};
console.log(
  concat([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
