let listadenumeros=[];
let numeromax=10;
let numerosecreto = numeroaleatorio();
let tentativas = 1;

function exibirnatela(tag,texto){
    let campo=document.querySelector(tag);
    campo.innerHTML = texto;
}

function exebirtelainicial(){
    exibirnatela('h1','Jogo do número secreto');
    exibirnatela('p', 'Escolha um número ');
}

exebirtelainicial();
function verificarChute(){
 
    let chute = document.querySelector('input').value;

    if(chute == numerosecreto){
        exibirnatela('h1','Acertou');
    
       
        let palavratentativa = tentativas>1 ? 'tentativas': 'tentativa';
        let mensagemtentativas = `Você acertou o número secreto com ${tentativas} ${palavratentativa}`

        exibirnatela('p',mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{
        if(chute > numerosecreto ) {
            exibirnatela('p', 'O número secreto é menor ');

        } else{
            exibirnatela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparcampo();
    }
        
        
    
    
}

function limparcampo(){
    chute= document.querySelector('input');
    chute.value='';
}


function reiniciarjogo(){
    numerosecreto=numeroaleatorio();
    limparcampo();
    tentativas=1;
    exebirtelainicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

function numeroaleatorio() {
         let numeroescolhido   =   parseInt(Math.random()* numeromax +1);
         let quantidadenumeros = listadenumeros.length;
        if(quantidadenumeros== numeromax ){
            listadenumeros=[];
        }


        if(listadenumeros.includes(numeroescolhido)){
            return numeroaleatorio();
        }else{
            listadenumeros.push(numeroescolhido);
            console.log(listadenumeros);
            return numeroescolhido;
        }
}