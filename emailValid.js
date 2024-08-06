document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var emailInput = document.getElementById("email");
  
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    form.addEventListener("submit", function (event) {
      var emailValue = emailInput.value;
  
      if (!emailPattern.test(emailValue)) {
        event.preventDefault();
        event.stopPropagation();
        alert("Por favor, ingresa un correo electrónico válido.");
        emailInput.classList.add("is-invalid");
      } else {
  