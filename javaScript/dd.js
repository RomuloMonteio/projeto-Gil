function limpar() {
    console.log("CALL: limpar()");

    let a = document.getElementById("produtos").innerHTML ='0.0';
    let b = document.getElementById("quantidades").innerHTML = '0.0';
    let c = document.getElementById("total").innerHTML = "0.00";
}

function validar() {
    //--- TODO: escrever o código em falta aqui...
    //--- Se a função retornar true o formulário será enviado; 
    //--- Se a função retornar false, o formulário não será enviaddo.
    console.log("CALL: validar()");

    const quantidadeTotal = parseInt(document.getElementById("quantidades").textContent);

    if (quantidadeTotal < 3) {
        alert("Você deve selecionar pelo menos 3 produtos.");
        return false;
    }

    return true;
}

function compra() {

}

function media() {
    console.log("CALL: media()");

    // Obtém a quantidade total de produtos e o valor total da compra
    const quantidadeTotal = parseInt(document.getElementById("quantidades").textContent);
    const valorTotal = parseFloat(document.getElementById("total").textContent);

    // Calcula a média do preço por item, se houver produtos no carrinho
    let mediaPorItem = 0;
    if (quantidadeTotal > 0) {
        mediaPorItem = valorTotal / quantidadeTotal;
    }

    // Exibe a média na interface (pode ser em um elemento específico)
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
