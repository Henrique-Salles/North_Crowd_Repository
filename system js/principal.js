var names = localStorage.getItem('nome')

function printInfo() {
    document.getElementById('pt2').innerHTML = names;
}

function sair() {
    var s = confirm("Deseja realmente sair do sistema?");
    if (s == true) {
        window.location = "../system pages/login.html"
    }
}

function excluir() {
    var e = confirm("Tem certeza que deseja excluir este cliente?");
    if (e == true) {
        alert("Cliente excluído com sucesso.")
    }
}

function addCliente() {
    alert("Cliente adicionado com sucesso!")
}

function addProd() {
    alert("Produto adicionado com sucesso!")
}

function editCliente() {
    alert("Cliente editado com sucesso!")
}

function editCli() {
    window.location = "../system pages/clientes-edit.html"
}

function excluirFunc() {
    var e = confirm("Tem certeza que deseja excluir este funcionário?");
    if (e == true) {
        alert("Funcionário excluído com sucesso.")
    }
}

function excluirVenda() {
    var v = confirm("Tem certeza que deseja excluir esta venda?");
    if (v == true) {
        alert("Venda excluída com sucesso.")
    }
}

function excluirProduto() {
    var p = confirm("Tem certeza que deseja excluir este produto?");
    if (p == true) {
        alert("Produto excluído com sucesso.")
    }
}

function addFuncionario() {
    alert("Funcionário adicionado com sucesso!")
}

function editFuncionario() {
    alert("Funcionário editado com sucesso!")
}

function addVenda() {
    alert("Venda registrada com sucesso!")
}

function editFunc() {
    window.location = "../system pages/funcionarios-edit.html"
}

function editarEntrega() {
        window.location = "../system pages/entregas-edit.html"
    }

    function editEntrega() {
        alert("Entrega editada com sucesso!")
    }

    function editarProd() {
        alert("Produto editado com sucesso!")
    }

    function vendas() {
        window.location = "../system pages/vendas.html"
    }
    function estoque() {
        window.location = "../system pages/estoque.html"
    }
    function clientes() {
        window.location = "../system pages/clientes.html"
    }
    function funcionarios() {
        window.location = "../system pages/funcionarios.html"
    }
    function entregas() {
        window.location = "../system pages/entregas.html"
    }

    function estoqueEdi() {
        window.location = "../system pages/estoque-edit.html"
    }

