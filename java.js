//declarando as variaveis
var mensagem = document.querySelector("#mensagem");
var mensagemFinal = document.querySelector("#mensagemFinal");
var opcao = document.querySelector("#opcao");
var passo = document.querySelector(".passo");
var incremento = document.querySelector("#escolha-passo ");
var code = document.querySelector("#radio-codificar");
var decode = document.querySelector("#radio-decodificar");
var botao = document.querySelector(".but");

// fazer a escolha do incremento da cifra de cesar

opcao.addEventListener("change", function () {
  if (opcao.value == "cesar") {
    passo.style.display = "block";
  } else {
    passo.style.display = "none";
  }
});


code.addEventListener("click", function(){
  botao.innerText = "Codificar mensagem!";
});

decode.addEventListener("click", function(){
  botao.innerText = "Decodificar mensagem!";
});

// liga os radios buttons para codificar ou decodificar

botao.addEventListener("click", function (event) {
  event.preventDefault();
  if (code.checked && opcao.value == "cesar") {
    mensagemFinal.value = codeCesar(mensagem.value, parseInt(incremento.value));
  } else if (decode.checked && opcao.value == "cesar") {
    mensagemFinal.value = decodeCesar(
      mensagem.value.split(""),
      parseInt(incremento.value)
    );
  } else if (code.checked && opcao.value == "base64") {
    mensagemFinal.value = codeBase64(mensagem.value);
  } else if (decode.checked && opcao.value == "base64") {
    mensagemFinal.value = decodeBase64(mensagem.value);
  }
});

// 5- Função para codificar em Cifra de César:

function codeCesar(msg, passo) {
  var resultD = [];
  var decodeC;
  for (var i = 0; i < msg.length; i++) {
    if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
      decodeC = ((msg[i].charCodeAt() - 65 + passo) % 26) + 65;
      resultD.push(String.fromCharCode(decodeC));
    } else if (msg[i].charCodeAt() >= 97 && msg[i].charCodeAt() <= 122) {
      decodeC = ((msg[i].charCodeAt() - 97 + passo) % 26) + 97;
      resultD.push(String.fromCharCode(decodeC));
    } else {
      resultD.push(msg[i]);
    }
  }
  return resultD.join("");
}

// 6- Função para decodificar em Cifra de César:

function decodeCesar(msg, passo) {
  var resultD = [];
  var decodeC;
  for (var i = 0; i < msg.length; i++) {
    if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
      decodeC = ((msg[i].charCodeAt() - 90 - passo) % 26) + 90;
      resultD.push(String.fromCharCode(decodeC));
    } else if (msg[i].charCodeAt() >= 97 && msg[i].charCodeAt() <= 122) {
      decodeC = ((msg[i].charCodeAt() - 122 - passo) % 26) + 122;
      resultD.push(String.fromCharCode(decodeC));
    } else {
      resultD.push(msg[i]);
    }
  }
  return resultD.join("");
}

// 7- Função para codificar em Base64:

function codeBase64(msgm) {
  return btoa(msgm);
}

// 8- Função para decodificar em Base64:

function decodeBase64(msg) {
  return atob(msg);
}
