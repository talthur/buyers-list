var table = document.getElementById("tabela")

var tableRows = document.getElementsByTagName("tr")

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

var saveButton = document.getElementById("save");
saveButton.addEventListener("click", saveTable)

function saveTable(){
    
    var tableRowsInfo = []

    for (var i=1; i < tableRows.length; i++){
        var tableRowDic = {
            "item":tableRows[i].childNodes[0].textContent,
            "valor":tableRows[i].childNodes[1].textContent,
            "data":tableRows[i].childNodes[2].textContent,
            "delete":tableRows[i].childNodes[3].textContent
        }
        tableRowsInfo.push(tableRowDic)
    }

    localStorage.setItem("tableRowsInfo", JSON.stringify(tableRowsInfo));
}

function loadtable(){

    if (localStorage.getItem("tableRowsInfo") != null){
        var tableRowsInfoLoaded = JSON.parse(localStorage.getItem("tableRowsInfo"))

        for (var i = 0; i < tableRowsInfoLoaded.length; i++){
            var tableRow = tableRowsInfoLoaded[i] 
            addToTable(tableRow.item, tableRow.valor, tableRow.data)

        }
    }

}

loadtable()






