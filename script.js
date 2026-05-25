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

function checkInputs() {
  // Obter os valores dos campos e remover espaços em branco
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordconfirmationValue = passwordConfirmation.value.trim();

  // Validar o campo nome do usuário
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  // Validar o campo email
  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor insira um e-mail válido.");
  } else {
    setSuccessFor(email);
  }

  // Validar campo senha
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.lenght < 7) {
    setErrorFor(password, "A senha deve contar no mínimo 7 caracteres");
  } else {
    setSuccessFor(password);
  }

  // Validar o campo de confirmação de senha
  if (passwordconfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória");
  } else if (passwordconfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "Ase senhas não conferem");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  // Verificar se todos campos estão válidos
  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("Formulário enviado com sucesso!");
  }
}

// Função para exibir mensagem de erro e adicionar classe 'error'
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  // Adicionar a mensagem de erro
  small.innerText = message;
  // Adicionar a classe 'error' e removar a classe 'success'
  formControl.className = "form-control error";
}

// Função para adicionar classe 'success' e remover a classe 'error'
function setSuccessFor(input) {
  const formControl = input.parentElement;
  // Adicionar a classe 'success' e remover a classe 'error'
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}
