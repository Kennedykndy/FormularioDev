const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// Evitar o envio do formulário e permitir a validação personalizada
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});
