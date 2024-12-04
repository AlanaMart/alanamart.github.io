function calcular(operacao) {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resultado = document.getElementById('resultado');


    num1.classList.remove('error');
    num2.classList.remove('error');


    if (num1.value === '') {
        num1.classList.add('error');
    }
    if (num2.value === '') {
        num2.classList.add('error');
    }


    if (num1.value === '' || num2.value === '') {
        resultado.innerHTML = 'Por favor, preencha ambos os campos.';
        return;
    }

    var valor1 = parseFloat(num1.value);
    var valor2 = parseFloat(num2.value);
    var res;

    switch (operacao) {
        case 'somar':
            res = valor1 + valor2;
            break;
        case 'subtrair':
            res = valor1 - valor2;
            break;
        case 'multiplicar':
            res = valor1 * valor2;
            break;
        case 'dividir':
            if (valor2 === 0) {
                resultado.innerHTML = 'Erro: Divisão por zero.';
                return;
            }
            res = valor1 / valor2;
            break;
    }

    resultado.innerHTML = 'O resultado é: ' + res;
}