function buttonClick() {
  // const width = document.forms.cardForm.elements.gridWidth.value;
  // const height = document.forms.cardForm.elements.gridHeight.value;
  const width = document.querySelector("input[name=gridWidth]").value;
  const height = document.querySelector("input[name=gridHeight]").value;
  const result = document.getElementById("result");
  result.innerText = width * height;
}