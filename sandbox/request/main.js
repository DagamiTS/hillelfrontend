function buttonClick() {
  const result = document.getElementById("result");
  
  const btn = document.querySelector(".btn");
  btn.disabled = true;

  function showResponse() {
    result.textContent = this.response;
    btn.disabled = false;
  }

  const req = new XMLHttpRequest();

  req.open("GET", "https://hilleljs.herokuapp.com/hw/42");

  req.addEventListener("load", showResponse);
  
  req.send();
}
