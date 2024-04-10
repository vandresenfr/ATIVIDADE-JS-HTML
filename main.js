const form = document.getElementById('number-form')
var inputNumberA = document.getElementById("numberA").value;
var inputNumberB = document.getElementById("numberB").value;
var numberA = parseInt(inputNumberA);
var numberB = parseInt(inputNumberB);


form.addEventListener('submit', function(e) {

    e.preventDefault();

    var inputNumberA = document.getElementById("numberA").value;
    var inputNumberB = document.getElementById("numberB").value;
    var numberA = parseInt(inputNumberA);
    var numberB = parseInt(inputNumberB);
    const mensagemIguais = (`Os números são iguais`);
    const mensagem1 = (`O número: <b>${numberA}</b> é maior que o número: <b>${numberB}</b>`);
    const mensagem2 = (`O número: <b> ${numberA}</b> é menor que o número: <b>${numberB}</b>`);
    const mensagemValida = (`Por favor, digite números inteiros válidos`);

    if (!isNaN(numberA) && !isNaN(numberB)) {

    if (numberA === numberB) {
        const containerMensagemIguais = document.querySelector('.mensagem');
        containerMensagemIguais.innerHTML = mensagemIguais;
        containerMensagemIguais.style.display = 'block';
        numberA = '';
        numberB = '';

    } else if (numberA > numberB) {
        const containerMensagem1 = document.querySelector('.mensagem');
        containerMensagem1.innerHTML = mensagem1;
        containerMensagem1.style.display = 'block';
    } else {
        const containerMensagem2 = document.querySelector('.mensagem');
        containerMensagem2.innerHTML = mensagem2;
        containerMensagem2.style.display = 'block';
    }
    } else {
        const containerMensagemValida = document.querySelector('.mensagem');
        containerMensagemValida.innerHTML = mensagemValida;
        containerMensagemValida.style.display = 'block';
    }   
})
