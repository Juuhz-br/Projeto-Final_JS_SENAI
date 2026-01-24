// selecionar os elementos do formulário e dos campos de entrada

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const senhaInput = document.getElementById('senha');
const senhaError = document.getElementById('senha-error');


// adicionar ouvinte de evento para o envio do formulário

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true; 
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //teste do formato do email

    if (!emailRegex.test(email)) {
        emailInput.classList.add('input-error'); //msg de erro qd da submit e está fora do padrão ou n digitado
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    } else {
        emailInput.classList.remove('input-error');
        emailError.textContent = '';
    }


    // validação da senha

    const senha = senhaInput.value;
    const hasUpperCase = /[A-Z]/.test(senha); // letra maipuscula
    const hasNumber = /\d/.test(senha); //número
    const hasSpecial = /[^A-Za-z0-9]/.test(senha); //regex caracter especial

    if (senha.length < 8 || !hasUpperCase || !hasNumber || !hasSpecial) { //verifica se a senha está no padrão
        senhaInput.classList.add('input-error');
        senhaError.textContent = 'A senha está fora do padrão.'; //msg de erro qd da submit e está fora do padrão
        isValid = false;
    } else {
        senhaInput.classList.remove('input-error'); // msg de erro qd da submit e está fora do padrão ou n digitado
        senhaError.textContent = '';
    }


    if (isValid) {
        alert('Inscrição realizada com sucesso!');
        form.reset(); 
    }
});

emailInput.addEventListener('input', function() {
    emailInput.classList.remove('input-error');
    emailError.textContent = '';
});

senhaInput.addEventListener('input', function() {
    senhaInput.classList.remove('input-error');
    senhaError.textContent = '';
});


// selecionar os itens da lista de requisitos

const reqLength = document.getElementById('req-length'); //tamanho mínimo
const reqUpper = document.getElementById('req-upper'); // maiúscula obrigatória
const reqNumber = document.getElementById('req-number'); // número obrigatório
const reqSpecial = document.getElementById('req-special'); //caráter especial obrigatório


// função para atualizar o estado dos requisitos

function updateRequirement(element, isValid) {
    const icon = element.querySelector('i');
    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
        icon.classList.replace('ph-circle', 'ph-check-circle');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
        icon.classList.replace('ph-check-circle', 'ph-circle');
    }
}


// adicionar ouvinte de evento para o campo de senha / a cada tecla digitada

senhaInput.addEventListener('input', function() {
    const senha = senhaInput.value;
    updateRequirement(reqLength, senha.length >= 8); //valida tamanho da senha
    updateRequirement(reqUpper, /[A-Z]/.test(senha));
    updateRequirement(reqNumber, /\d/.test(senha));
    updateRequirement(reqSpecial, /[^A-Za-z0-9]/.test(senha));
});

