const[input1, input2] = document.querySelectorAll('input');
const imagem = document.querySelector('.btn-seta');
const botao = document.querySelector('button');



function ativar (){
    if(input1.value && input2.value.length>=8){
        botao.removeAttribute('disabled');
        imagem.classList.add('login-btn') 
    }else {
        botao.setAttribute('disabled','disabled');
        imagem.classList.remove('login-btn')
    }
}


input1.addEventListener('input', ativar);
input2.addEventListener('input', ativar);


