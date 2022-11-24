const formMain = document.querySelector(".form-main")

const inputs = document.querySelectorAll(".input-cad")
console.log(inputs)

formMain.addEventListener("submit", (s) => {
    s.preventDefault()

    inputs.forEach((input) => {
        localStorage.setItem(input.id, input.value)})

    window.location = "../system pages/login.html"
})

let senha = document.getElementById('senha');
let senhaConf = document.getElementById('senha-conf');

function validarForm() {
  if (senha.value != senhaConf.value) {
    senhaConf.setCustomValidity("Senhas diferentes!");
    senhaConf.reportValidity();
    return false;
  } else {
    senhaConf.setCustomValidity("");
    return true;
  }
}

