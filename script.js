// document.querySelector('button').addEventListener('click', function() {

//     const name = document.getElementById('name').value;
//     const endereco = document.getElementById('endereco').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const confirmSenha = document.getElementById('confirmSenha').value;


//     const spans = document.querySelectorAll('span');
//     spans.forEach(span => span.style.display = 'none');

//     let valid = true;

//     if (name.length < 3) {
//         document.querySelector('span[for="nome"]').style.display = 'block';
//         valid = false;
//     }

//     if (endereco.length < 6) {
//         document.querySelector('span[for="endereco"]').style.display = 'block';
//         valid = false;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         document.querySelector('span[for="email"]').style.display = 'block';
//         valid = false;
//     }

//     if (senha.length < 6) {
//         document.querySelector('span[for="senha"]').style.display = 'block';
//         valid = false;
//     }

//     if (senha !== confirmSenha) {
//         document.querySelector('span[for="confirmSenha"]').style.display = 'block';
//         valid = false;
//     }

//     if (valid) {
//         alert('Formulário enviado com sucesso!');

//     }
// });

const nameInput = document.getElementById('name');
const enderecoInput = document.getElementById('endereco');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmSenhaInput = document.getElementById('confirmSenha');

const spans = document.querySelectorAll('span');


function validateName() {
    spans[0].style.display = nameInput.value.length < 3 ? 'block' : 'none';
}

function validateEndereco() {
    spans[1].style.display = enderecoInput.value.length < 6 ? 'block' : 'none';
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    spans[2].style.display = !emailPattern.test(emailInput.value) ? 'block' : 'none';
}

function validateSenha() {
    spans[3].style.display = senhaInput.value.length < 6 ? 'block' : 'none';
}

function validateConfirmSenha() {
    spans[4].style.display = senhaInput.value !== confirmSenhaInput.value ? 'block' : 'none';
}

nameInput.onchange = validateName;
enderecoInput.onchange = validateEndereco;
emailInput.onchange = validateEmail;
senhaInput.onchange = validateSenha;
confirmSenhaInput.onchange = validateConfirmSenha;


document.querySelector('button').addEventListener('click', function() {

    alert('Formulário enviado com sucesso!');
});


