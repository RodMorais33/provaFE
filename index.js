var nome = document.querySelector("#nome");
var apagar = document.querySelector("#apagar");
var Cadastrado = document.querySelector("#cadastrar");

function cadastrar() {
    let cadastrado = false;
    let data = {
        "nome":nome.value,
        "apagar":apagar.value,
        "cadastar":cadastar.value,
    }

    console.log(data);
}