alert('Boas Vindas ao jogo!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tenativas = 1;



while(chute!= numeroSecreto){
    chute = prompt("Escolha o numero entre 1 a "+ numeroMaximo);
    
    if(numeroSecreto == chute) {
       break;
        
        //alert('Isso ai, voce descobriu o numero secreto:  ${numeroSecreto}´); não0 achei a crase
    
    } else{
        if(numeroSecreto > chute){
            alert('O numero secreto é maior que o ' + chute );
        }else{
            alert('O numero secreto é menor que o ' + chute );
        }
        
    }
    tenativas = tenativas + 1;
}

let palavraTentativa = tenativas > 1 ? ' tentativas' : ' tentativa'

alert(' Isso ai, voce descobriu o numero secreto: ' + numeroSecreto + ' Com  ' + tenativas + palavraTentativa);

//if(tenativas>1){
//    alert(' Isso ai, voce descobriu o numero secreto: ' + numeroSecreto + ' Com  ' + tenativas + ' tentativas');
//}else{
//    alert(' Isso ai, voce descobriu o numero secreto: ' + numeroSecreto + ' Com  ' + tenativas + ' tentativa');
//}
//hkhkh
