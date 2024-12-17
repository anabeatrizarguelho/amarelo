function validateForm() {
    const fullName = document.getElementById('fullname');
    const cpfCnpj = document.getElementById('cpf');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const cep = document.getElementById('cep');
    const num = document.getElementById('num');
  
    let isValid = true;
  
    if (fullName.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha o seu nome completo.');
    }
  
    if (cpfCnpj.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha o seu CPF/CNPJ.');
    } else if (cpfCnpj.value.length !== 11 && cpfCnpj.value.length !== 14) {
        isValid = false;
        alert('O CPF/CNPJ deve conter 11 dígitos (CPF) ou 14 dígitos (CNPJ).');
    }
  
    if (email.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha o seu e-mail.');
    } else if (!(/\S+@\S+\.\S+/.test(email.value))) {
        isValid = false;
        alert('Por favor, insira um e-mail válido.');
    }

    if (cep.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha o seu CEP.');
    }
  
    if (num.value.trim() === '') {
        isValid = false;
        alert('Por favor, preencha o número do seu endereço.');
    }
  
    return isValid;
}

function applyPhoneMask(input) {
    input.addEventListener('input', function() {
        let value = input.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else {
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        input.value = value;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number');
    applyPhoneMask(numberInput);
});