const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAll();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});

// validações
function checkInputUsername() {
  const usernamevalue = username.value;
  if (usernamevalue === "") {
    errorInput(username, "Campo obrigatório");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}
function checkInputEmail() {
  const emailValue = email.value;
  if (emailValue === "") {
    errorInput(email, "Campo obrigatório");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}
function checkInputPassword() {
  const passwordValue = password.value;
  if (passwordValue === "") {
    errorInput(password, "Campo obrigatório");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}
function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationValue = passwordConfirmation.value;
  if (confirmationValue === "") {
    errorInput(passwordConfirmation, "Campo obrigatório");
  } else if (confirmationValue !== passwordValue) {
    errorInput(passwordConfirmation, "Senhas não são iguais");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkAll() {
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItem = form.querySelectorAll(".form-content");
  const isValid = [...formItem].every((item) => {
    return item.className === "form-content";
  });
  if (isValid) {
    Toastify({
      text: "Cadastrado com sucesso!",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");
  textMessage.innerText = message;
  formItem.className = "form-content error";
}
