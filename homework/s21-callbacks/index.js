const fs = require("fs");

fs.readFile("./s20e01.json", (err, data) => {
  if (err) throw err;
  const dataArr = JSON.parse(data.toString("utf8"));
  let max = dataArr[0];
  for (let i = 1; i < dataArr.length; i++) {
    if (dataArr[i] > max) max = dataArr[i];
  }
  console.log(max.title);
});

fs.readFile("./s20e01.json", (err, data) => {
  if (err) throw err;
  fs.writeFile("s20e01-copy.json", data, (err) => {
    if (err) throw err;
    console.log(data.byteLength + " bytes copied");
  });
});

fs.readFile("./s20e01.json", (err, data) => {
  if (err) throw err;
  fs.mkdir("json", (err) => {
    if (err) throw err;
    fs.writeFile("./json/s20e01.json", data, (err) => {
      if (err) throw err;
      console.log(data.byteLength + " bytes copied");
    });
  });
});

fs.readFile("./s20e01.json", (err, data) => {
  if (err) throw err;
  const dataArr = JSON.parse(data.toString("utf8"));
  dataArr.map( eachObj => {
    delete eachObj.results;
    delete eachObj.author;
    delete eachObj.students_statuses;
  });
  fs.writeFile("./json/homeworks.json", JSON.stringify(dataArr, null, 4), (err) => {
    if (err) throw err;
  });
});