//saudação personalizada
function saudacao(nome, horario){
    if(horario >= 0 && horario <=11){
        console.log(`Bom dia ${nome}`)
    }
    else if (horario >= 12 && horario <=17){
        console.log(`Boa tarde ${nome}`)
    }
     else if (horario >= 18 && horario <=23){
        console.log(`Boa noite ${nome}`)
     }
}
 let nome = "Henrique";
 let horario = 13;
 saudacao(nome, horario)