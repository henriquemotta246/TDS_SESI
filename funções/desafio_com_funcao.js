/*
Atalho comentario de varias linhas :
ALT+SHIFT+A

Desafio: Criar uma função receba  preço e desconto em % 
e mostre o valor final com desconto.
 Criar outra função que receba preço e quantidade  
e mostre o valor total da compra
 */ 
 


function calcularDesconto(preco, descontoPercentual,) {
    
let desconto = preco * (descontoPercentual / 100);
let valorFinal = preco - desconto;
    console.log(`O preço final foi de: ${valorFinal}`);
}  
calcularDesconto(1000, 5);
function calcularTotal(preco, quantidade){
    const valorTotal = preco * quantidade;
    console.log(`O valor é de: ${valorTotal}`);
}
calcularTotal(100, 12);