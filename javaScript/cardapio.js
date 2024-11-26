function limpar() {
    console.log("CALL: limpar()");

    let a = document.getElementById("produtos").textContent = 0
    let b = document.getElementById("quantidades").textContent = 0
    let c = document.getElementById("total").textContent = 0.0
    
}

function validar() {
    // Obtém o total de quantidade de produtos
    const quantidadeTotal = parseInt(document.getElementById("quantidades").textContent);

    // Verifica se a quantidade total é menor que 3
    if (quantidadeTotal < 3) {
        alert("Você deve selecionar pelo menos 3 produtos.");
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio do formulário
}


function comprar(item) {
    console.log(`CALL: comprar(${item})`);
    const quantidadeProduto = document.getElementById(`produto${item}`);
    const precoProduto = parseFloat(document.getElementById(`precoproduto${item}`).value);
    quantidadeProduto.value = parseInt(quantidadeProduto.value) + 1;
    atualizarTotais();
}

function atualizarTotais() {
    let totalProdutos = 0;
    let quantidadeTotal = 0;
    let valorTotal = 0;

    /*Itera sobre os produtos para calcular os totais*/
    for (let i = 1; i <= 8; i++) {
        const quantidade = parseInt(document.getElementById(`produto${i}`).value) || 0;
        const preco = parseFloat(document.getElementById(`precoproduto${i}`).value) || 0;

        if (quantidade > 0) {
            totalProdutos += 1; // Conta o número de produtos diferentes
            quantidadeTotal += quantidade; // Soma a quantidade total
            valorTotal += quantidade * preco; // Soma o valor total
        }
    }

    // Atualiza os valores na interface
    document.getElementById("produtos").textContent = totalProdutos;
    document.getElementById("quantidades").textContent = quantidadeTotal;
    document.getElementById("total").textContent = valorTotal.toFixed(2);
}



function media() {
    console.log("CALL: media()");

    const quantidadeTotal = parseInt(document.getElementById("quantidades").textContent);
    const valorTotal = parseFloat(document.getElementById("total").textContent);

    
    let mediaPorItem = 0;
    if (quantidadeTotal > 0) {
        mediaPorItem = valorTotal / quantidadeTotal;
    }

   
    const mediaElement = document.getElementById("media");
    if (mediaElement) {
        mediaElement.textContent = mediaPorItem.toFixed(2);
    } else {
        console.warn("Elemento 'media' não encontrado para exibir o valor da média.");
    }
}





// FÓRMULAS
// ----------------------------------------------------------------
// new Date("2019-11-09").getDate();        //--- Devolverá 9
// new Date("2019-11-09").getMonth();       //--- Devolverá 11
// new Date("2019-11-09").getFullYear();    //--- Devolverá 2019
//
// document.getElementById("myCheck").checked //--- testa se uma checkbox/radiobox está checked
// document.getElementById("field_1")       //--- devolve o elemento com id field_1
// document.getElementByName("field_1")     //--- devolve o elemento com nome field_1
