const loginForm = document.querySelector(".login-form")

const usernameInput = document.querySelector("#user")
const passwordInput = document.querySelector("#senha")


loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if ((usernameInput.value === localStorage.getItem("usuario")) &&
        (passwordInput.value === localStorage.getItem("senha"))) {
        window.location = "../pages/principal.html"
    }
    else {
        alert("NC Code ou senha incorretos!")
    }
})      



        /*var x;
        var r = confirm("Deseja excluir esse cliente?");
        if (r == true) {
            alert("Excluído com sucesso.")
        }*/