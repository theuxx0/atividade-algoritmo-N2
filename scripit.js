// 01-Verificar número positivo, negativo ou zero 
function verificarNumero() {
  let idade = parseInt(document.getElementById("numero").value);
  const res = document.getElementById("resultadoNumeroPositivo");

  if (idade > 0) {
    res.textContent = "O número inserido é positivo.";
    res.style.color = "green";
  } else if (idade < 0) {
    res.textContent = "O número inserido é negativo.";
    res.style.color = "yellow";
  } else {
    res.textContent = "O número inserido é zero.";
    res.style.color = "red";
  }
}

// 02-Verificar se aluno foi aprovado 
function verificarNotas() {
  let n1 = parseInt(document.getElementById("nota1").value);
  let n2 = parseInt(document.getElementById("nota2").value);
  const mediaDeNotas = document.getElementById("mediaDeNotas");
  const situacao = document.getElementById("situacao");     
  let media = (n1 + n2) / 2;
  mediaDeNotas.textContent = "Média das Notas: " + media.toFixed(1);
  
  if ( media >= 7) {
    situacao.textContent = "Parabéns! Vocé foi Aprovado";
    situacao.style.color = "green";
  } 
  else if ( media >= 4 && media <= 6.9) {
    situacao.textContent = "Que pena! Vocé está de Recuperação"; 
    situacao.style.color = "yellow";
  } 
  else if ( media < 4) {
    situacao.textContent = "Que pena! Vocé foi Reprovado";
    situacao.style.color = "red";
  }
}

// 03-Verificar se é adolescente 
function verificarAdolecente() {
  let idade = parseInt(document.getElementById("idade").value);
  const resultado = document.getElementById("resultadoAdolecente");
  
  if (idade >= 18) {
    resultado.textContent = "Vocé é maior de idade.";
  } 
  else if (idade >= 13 && idade <= 17) {
    resultado.textContent = "Vocé é adolescente.";
    resultado.style.color = "blue";
  }
  else if (idade < 13) {
    resultado.textContent = "Vocé é crianca.";
  }
}

// 04-Mostrar maior de dois números 
function mostrarNumeros() {
  let num1 = parseInt(document.getElementById("numero1").value);
  let num2 = parseInt(document.getElementById("numero2").value);
  const maiorNumero = document.getElementById("maiorNumero");
  const menorNumero = document.getElementById("menorNumero");
  
  if (num1 > num2) {
    maiorNumero.textContent = "O maior número é: " + num1;
    menorNumero.textContent = "O menor número é: " + num2;
  } 
  else if (num1 < num2) {
    maiorNumero.textContent = "O maior número é: " + num2;
    menorNumero.textContent = "O menor número é: " + num1;
  }
  else {
   maiorNumero.textContent = "Os números inseridos são iguais."; 
   maiorNumero.style.color = "red";
  }
}

// 05-Dias da semana (switch/case) 
function mostrarDias() {
  let dia = parseInt(document.getElementById("dia").value);
  const mensagem = document.getElementById("mensagem");
  
  switch (dia) {
    case 1:
      mensagem.textContent = "Domingo";
      break;
    case 2:
      mensagem.textContent = "Segunda-feira";
      break;
    case 3:
      mensagem.textContent = "Terça-feira";
      break;
    case 4:
      mensagem.textContent = "Quarta-feira";
      break;
    case 5:
      mensagem.textContent = "Quinta-feira";
      break;

    case 6:
      mensagem.textContent = "Sexta-feira";
      break;
    case 7:
      mensagem.textContent = "Sábado";
      break;
    default:
      mensagem.textContent = "Número inválido. Digite de 1 a 7.";
      mensagem.style.color = "yellow";
  }
}

// 06-Contagem de 1 a N (for)

function fazerContagem() {
  let num = parseInt(document.getElementById("numberN").value);
  const lista = document.getElementById("contagem");
  
  lista.innerHTML = "";
  for (let i = 1; i <= num; i++) {
    const item = document.createElement("li");
    item.textContent = i;
    lista.appendChild(item);
    lista.style.marginLeft = "20px";
  }
}

// 07-Números pares de 1 a 20 (while) 
function Numerospares() {
  let num = 1;
  const lista = document.getElementById("listaPares");
  lista.innerHTML = "";

  while (num <= 20) {
    if (num % 2 === 0) {
      const item = document.createElement("li");
      item.textContent = num;
      lista.appendChild(item);
      lista.style.marginLeft = "20px";
    }num++;
  }
}

// 08-Verificar se número está entre dois valores 
function mostrar() {
// verrificar se o numero esta entre 10 e 50 (inclusive)
  let num = parseInt(document.getElementById("numero").value);
  const mensagem = document.getElementById("mostrarNumero");
  
  if (num >= 10 && num <= 50) {
    mensagem.textContent = "O número inserido está entre 10 e 50";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "O número inserido não está entre 10 e 50";
    mensagem.style.color = "red";
  }
}

// 09-Verificar múltiplo de 3 e 5 (operadores lógicos) 
function verificarMultiplo() {
  let num = parseInt(document.getElementById("multiplo").value);
  const mensagem = document.getElementById("mostrarMultiplo");
  
  if (num % 3 === 0 && num % 5 === 0) {
    mensagem.textContent = "O número inserido é múltiplo de 3 e de 5";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "O número inserido não é múltiplo de 3 e de 5";
    mensagem.style.color = "red";
  }
} 

// 10-VETOR (nível fácil) - Inserir e excluir dados do vetor (array)
  const nomes = [];
  const nomeInput = document.getElementById("nomeInput");
  const adicionarBtn = document.getElementById("adicionarBtn");
  const removerBtn = document.getElementById("removerBtn");
  const resultado = document.getElementById("resultado");
    

  adicionarBtn.addEventListener("click", () => {
  const nome = nomeInput.value.trim();

    nomes.push(nome);
    nomeInput.value = "";
    atualizarLista();
    if (nomes.length === 5){
      nomeInput.disabled = true;
      adicionarBtn.disabled = true;
    }
  });

  removerBtn.addEventListener("click", () => {
    if (nomes.length < 5) {
      alert("Adicione 5 nomes antes de remover.");
      return;
    }

    nomes.pop(); 
    nomes.pop(); 
    atualizarLista();
    if (nomes.length < 5) {
      nomeInput.disabled = false;
      adicionarBtn.disabled = false;
    }
  });
    
function atualizarLista() {
    resultado.innerHTML = "";
    nomes.forEach((nome, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${index + 1}. ${nome}`;
    resultado.appendChild(li);
    });
}

