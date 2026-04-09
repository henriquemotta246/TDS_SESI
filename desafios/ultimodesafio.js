let estoque = ["Placa mãe", "Placa de video", "SSD 1TB", "RTX 4060", "cooler"];
estoque.push("Memoria RAM");
console.log(estoque)

let valorTotal = 500;
let nomeCliente = "Junior cabeção";
let  clienteidade = 52
let possuiCupom = true 
estoque.shift(0)
function processarVenda(valorTotal, possuiCupom){
    var verificar = valorTotal >= 500 || possuiCupom == true? valorTotal * 0.85 : valorTotal
    return(verificar)
}
if(clienteidade > 16 ){
        console.log(`Venda autorizada ${nomeCliente}`)
    }
    else if (clienteidade < 16 ){
        console.log(`Venda não autorizada:idade insuficiente ${nomeCliente}`)
    }

for(let i = 0; i < 6; i++){
 console.log(`Despachando item: ${estoque[i]}...OK!`)
   
}
    
console.log(`Relatorio da loja:
cliente ${nomeCliente} processou um pedido de R$${processarVenda(valorTotal, possuiCupom)}.
itens restantes no estoque:${estoque[0]}`)