let email = document.getElementById('email');
let form = document.querySelector('form');
let emailSalvo = document.getElementById('mostrar');  
let path = window.location.pathname;
let page = path.split("/").pop();
let links = document.querySelectorAll('nav ul li a');

links.forEach(function(link) {  
let linkPath = link.getAttribute('href');
let linkPage = linkPath.split("/").pop();

if (linkPage === page) {
    link.classList.add('active');
}

});



document.getElementById('#form').addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()


    if(validacaoCorreta()){
        salvardadosFormulario();
    }
})

function salvardadosFormulario(){
    const dadosEmail = {
        email: email.value
    }

    const dadosJSON = JSON.stringify(dadosEmail)

    localStorage.setItem('dadosEmail', dadosJSON)

    limparDados();
}

function limparDados(){
    email.value = '';
}



function checkInputs(){
    let emailValue = email.value.trim()

    if(emailValue == ''){
        errorVal(email, 'Preencha esse campo')
    }else if(validarEmail(email.value) !== true){
        errorVal(email, 'O Formato do email deve ser name@abcd.com')
    }else{
        emailCorreto(email)
    }
}

function errorVal(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'formInput error'
}

function emailCorreto(input){
    let formControl = input.parentElement;

    formControl.className = 'form-crontol'
}

function validarEmail(email) {
    let emailVal = /^[a-z0-9]+(\.[_a-z0-9-]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailVal.test(email)
}

function validacaoCorreta(){
    if(email.value.trim() === ''){
        return false;
    }

    if(validarEmail(email.value) !== true){
        return false;
    }

    return true;
}