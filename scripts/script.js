var table = document.getElementById("tabela")

var forms = {
    mercadoria: document.getElementById("form__mercadoria"),
    valor: document.getElementById("form__valor"),
    data: document.getElementById("form__data")
}

var button = document.getElementById("button__add");
button.addEventListener("click", createData);

function createData() {

    var dataMercadoria = forms.mercadoria.value;
    var dataValor = forms.valor.value;
    var dataData = forms.data.value;

    addToTable(dataMercadoria, dataValor, dataData)

}

function addToTable(dataMercadoria, dataValor, dataData) {

    window.linha = table.insertRow(-1);

    var celula = linha.insertCell(-1);
    var text = document.createTextNode(dataMercadoria);
    celula.appendChild(text);

    var celula = linha.insertCell(-1);
    var text = document.createTextNode(dataValor);
    celula.appendChild(text);

    var celula = linha.insertCell(-1);
    var text = document.createTextNode(dataData);
    celula.appendChild(text);

    insertButtonRow();

}

function insertButtonRow() {

    var celula = linha.insertCell(-1);
    var createButton = document.createElement("button");
    createButton.classList.add("delete__button")
    createButton.innerHTML = "X"
    createButton.addEventListener("click", deleteRow);
    celula.appendChild(createButton);

}

function deleteRow() {
    var row = (this).closest("tr");
    row.remove()
}






