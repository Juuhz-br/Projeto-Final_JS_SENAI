// selecionar os elementos do formulário e dos campos de entrada

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const senhaInput = document.getElementById('senha');
const senhaError = document.getElementById('senha-error');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true; 
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailRegex.test(email)) {
        emailInput.classList.add('input-error');
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    } else {
        emailInput.classList.remove('input-error');
        emailError.textContent = '';
    }


    // validação da senha

    const senha = senhaInput.value;
    const hasUpperCase = /[A-Z]/.test(senha);
    const hasNumber = /\d/.test(senha);
    const hasSpecial = /[^A-Za-z0-9]/.test(senha);

    if (senha.length < 8 || !hasUpperCase || !hasNumber || !hasSpecial) {
        senhaInput.classList.add('input-error');
        senhaError.textContent = 'A senha está fora do padrão.';
        isValid = false;
    } else {
        senhaInput.classList.remove('input-error');
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


// adicionar ouvinte de evento para o campo de senha

senhaInput.addEventListener('input', function() {
    const senha = senhaInput.value;
    updateRequirement(reqLength, senha.length >= 8);
    updateRequirement(reqUpper, /[A-Z]/.test(senha));
    updateRequirement(reqNumber, /\d/.test(senha));
    updateRequirement(reqSpecial, /[^A-Za-z0-9]/.test(senha));
});

