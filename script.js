function limparCampos() {
    document.getElementById('valor1').value = ""
    document.getElementById('valor2').value = ""

}

function calculadora() {

    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    var adicao = valor1 + valor2;
    document.getElementById('somar').textContent = `A Soma é: ${adicao}`;

    var subtracao = valor1 - valor2;
    document.getElementById('subtrair').textContent = `A Subtração é: ${subtracao}`;

    var multiplicacao = valor1 * valor2;
    document.getElementById('multiplicar').textContent = `A Multiplicação é: ${multiplicacao}`;

    var divisao = valor1 / valor2;
    document.getElementById('dividir').textContent = `A Divisão é: ${divisao}`;

}

function divisor() {
    let valor = document.getElementById('valor').value;

    valor = parseInt(valor);

    if (valor % 5 == 0) {
        document.getElementById('divisor').textContent = `O Valor ${valor} é divisivel por 5`
    }else {
        document.getElementById('divisor').textContent = `O Valor ${valor} não é divisivel por 5`
    }
    
}

function raizQuadrada() {
    let numero  = document.getElementById('numero').value;

    let raizQuadrada = numero ** 0.5
    let quadrado = numero ** 2

    if (numero >= 0) {
        document.getElementById('raiz').textContent = `A Raiz Quadrada de: ${numero} é ${raizQuadrada}`
    }else {
        document.getElementById('quadrado').textContent = `A Quadrado de: ${numero} é ${quadrado}`
    }
}

function nomeCompleto() {
    let nomeCompleto = document.getElementById('nomeCompleto').value;

    let nomes = nomeCompleto.split(' ');

    let primeiroNome = nomes[0];
    let ultimoNome = nomes[nomes.lenght - 1];

    document.getElementById('primeiroNome').textContent = `Primeiro Nome: ${primeiroNome}`;
    document.getElementById('ultimoNome').textContent = `Ultimo Nome: ${ultimoNome}`;
      
}

