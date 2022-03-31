let itensAdicionados = [];

const botaoAdicionarItens = document.querySelector("#btn_adicionar_wi");
botaoAdicionarItens.addEventListener("click", () => {

    let itens = document.querySelector("#wi").value.split(",");

    if(document.querySelector("#wi").value != "") {

        itensAdicionados = [];

        AdicionaItens(itens);
    
        let listaItensAdicionados = document.querySelector(".wi-adicionadas");

        removeAllChildNodes(listaItensAdicionados);

        itensAdicionados.map(item => {
            let li = document.createElement("li");
            li.innerText = item;
            listaItensAdicionados.appendChild(li);
        });
    } else {
        alert("Informe os itens a serem adicionado");
    }
    
});

function AdicionaItens(itens) {
    itens.forEach(item => {
        itensAdicionados.push(item);
    });
}

const botaoAdionarItensMerge = document.querySelector("#btn_adicionar_wi_merge");
botaoAdionarItensMerge.addEventListener("click", () => {
    let itensMerge = document.querySelector("#itens_merge").value.split("\n")

    if(document.querySelector("#itens_merge").value != "") {

        removeAllChildNodes(document.querySelector("#data"));

        itensMerge.forEach(item => {
            let padrao = /\[(.*?)]/
            let regex = new RegExp(padrao, "g");
            let itens = regex.exec(item);
    
            let wi = itens[1];
            let descricao = item.substring(wi.length+5, item.length)
    
            let tbody = document.querySelector("#data");
            let linha = adicionaLinha(wi, descricao);
            tbody.appendChild(linha);
            
    
        });
    } else {
        alert("Informe os itens");
    }

});

function adicionaLinha(wi, descricao) {
    let tr = document.createElement("tr");

    let tdWi = document.createElement("td");
    tdWi.textContent = wi.replace("WI", "");

    let tdDescricao = document.createElement("td");
    tdDescricao.textContent = descricao;

    let tdMarcacao = document.createElement("td");
    tdMarcacao.textContent = "";

    tr.appendChild(tdWi);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdMarcacao);

    return tr;
}

let botaoCheckarItens = document.querySelector("#btn_checkar_itens");
botaoCheckarItens.addEventListener("click", () => {

    var check = document.createElement("span");
    check.textContent = '✔';

    let tbody = document.querySelector("#data");
    tbody.childNodes.forEach(tr => {
        if(tr.firstChild != null) {
            var wis = tr.firstChild.innerText.split(",");

            wis.forEach(itemTable => {
                itensAdicionados.map(itemAdd => {
                    if(itemAdd.trim() == itemTable.trim()) {
                        tr.lastChild.appendChild(check);
                    }
                })
            })
            

        }

    })
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




// [WI 12234] Teste de Primeiro item
// [WI 8374] Teste de Segundo item
// [WI 2138, 55364] Teste de Terceiro item
// [WI 2138, 55364, 1212] Teste de Quarto item
