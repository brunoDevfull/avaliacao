function limparCampos() {
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";

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
        document.getElementById('divisor').textContent = `O Valor ${valor} é divisivel por 5`;
    }else {
        document.getElementById('divisor').textContent = `O Valor ${valor} não é divisivel por 5`;
    }
    
}

function raizQuadrada() {
    let numero  = document.getElementById('numero').value;

    let raizQuadrada = numero ** 0.5;
    let quadrado = numero ** 2;

    if (numero >= 0) {
        document.getElementById('raiz').textContent = `A Raiz Quadrada de: ${numero} é ${raizQuadrada}`;
    }else {
        document.getElementById('quadrado').textContent = `A Quadrado de: ${numero} é ${quadrado}`;
    }
}


function nomeCompleto() {
    
    const nomeCompleto = document.getElementById('nomeCompleto').value;
  
    const nomes = nomeCompleto.split(" ");
    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];
  
    document.getElementById('primeiroNome').innerHTML = `Primeiro Nome: ${primeiroNome}`;
    document.getElementById('ultimoNome').innerHTML = `Ultimo Nome: ${ultimoNome}`;
  }


  function fibonacci(n) {
    // Inicializa a sequência com os dois primeiros termos
    const fibonacciSequence = [1, 1];
  
    // Calcula os próximos termos até o n-ésimo
    for (let i = 2; i < n; i++) {
      const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextTerm);
    }
  
    // Retorna a sequência completa
    return fibonacciSequence;
  }
  
  // Solicita ao usuário o número de termos
  const n = parseInt(document.getElementById('n'))

  // Chama a função e imprime o resultado
  const resultado = fibonacci(n);
  console.log(resultado)