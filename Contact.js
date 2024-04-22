let form = document.querySelector('form1')
let formEmail = document.querySelector('#form')
let emailStay = document.getElementById('email')
let nomes  = document.getElementById('Nome')
let sobrenome = document.getElementById('Nome1')
let email = document.getElementById('EmailForm')
let message = document.getElementById('Message')



document.getElementById('form1').addEventListener('submit', (event) => {
    event.preventDefault();

    if(nomes.value === ''){
        errorValNome(nomes, 'Preencha esse Campo')
    }else if (valNome(nomes.value) !== true){
       errorValNome(nomes, 'O nome não pode conter números ou\n caracteres especiais.')
    }else{
        nomeCorreto(nomes)
    }

    if(sobrenome.value === ''){
        errorsobrenome(sobrenome, 'Preencha esse Campo')
    }else if (valNome(sobrenome.value) !== true){
        errorsobrenome(sobrenome, 'O nome não pode conter números ou\n caracteres especiais.')
     }else{
         sobreCorreto(sobrenome)
     }

    if(email.value === ''){
        erroremail(email, 'Preencha esse Campo')
    }else if (valEmail(email.value) !== true){
        erroremail(email, 'O Formato do email deve ser name@abcd.com')
    }else{
        emailCorreto(email)
    }

    if(message.value === ''){
        errorMessage(message, 'Preencha esse Campo')
    }else{
        MessageCorreta(message)
    }

    if(validacaoCorreta()){
        salvardadosFormulario();
    }

})


function salvardadosFormulario(){
    const dadosFormulario = {
        nome: nomes.value,
        sobrenome: sobrenome.value,
        email: email.value,
        message: message.value,
        emailStay: emailStay.value
    };

    const dadosJSON = JSON.stringify(dadosFormulario)

    localStorage.setItem('dadosFormulario', dadosJSON)

    limparDados();
}

function limparDados(){
    nomes.value = '';
    sobrenome.value = '';
    email.value = '';
    message.value = '';
    emailStay: emailStay.value;
}

function valEmail(email){
    let emailVal = /^[a-z0-9]+(\.[_a-z0-9-]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailVal.test(email)

}

function valNome(nome){
    let nomeVal = /^[a-zA-Z\s]+$/;
    return nomeVal.test(nome)
}


function errorValNome(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'First_Name error small'
}

    
function errorsobrenome(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'Last_Name error small'
}


function erroremail(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'Email error'
}

function errorMessage(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'Message error small'
}


function nomeCorreto(input){
    let formControl = input.parentElement;

    formControl.className = 'First_Name'
}

function sobreCorreto(input){
    let formControl = input.parentElement;

    formControl.className = 'Last_Name'
}

function emailCorreto(input){
    let formControl = input.parentElement;

    formControl.className = 'Email'
}

function MessageCorreta(input){
    let formControl = input.parentElement;

    formControl.className = 'Message'
}


document.getElementById('#form').addEventListener('submit', (event) =>{
    event.preventDefault();

    if(emailStay.value == ''){
        erroremailstay(emailStay, 'Preencha esse Campo')
    }else if(valEmail(emailStay.value) !== true){
        erroremailstay(emailStay, 'O Formato do email deve ser name@abcd.com')
    }else{
        emailStayCorreto(emailStay)
    }

    if(validacaoCorreta()){
        salvardadosFormulario();
    }

})


function erroremailstay(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'formInput error'
}

function emailStayCorreto(input){
    let formControl = input.parentElement;

    formControl.className = 'form-crontol'
}


function validacaoCorreta(){
    if (nomes.value.trim() === '' || sobrenome.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        return false; 
    }
    if (!valNome(nomes.value) || !valNome(sobrenome.value) || !valEmail(email.value)) {
        return false; 
    }

    return true;
}