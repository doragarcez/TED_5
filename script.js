const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputResultado = document.getElementById("resultado");
const erro = document.getElementById("erro");

function lerNumero(texto) {
  const limpo = texto.replace(",", ".").trim();
  return limpo === "" ? NaN : Number(limpo);
}

function formatar(numero) {
  return numero.toLocaleString("pt-BR", { maximumFractionDigits: 10 });
}

function somar() {
  const a = lerNumero(inputNum1.value);
  const b = lerNumero(inputNum2.value);

  if (isNaN(a) || isNaN(b)) {
    erro.textContent = "Digite dois números válidos. Exemplo: 12 e 7,5";
    inputResultado.value = "";
    return;
  }

  erro.textContent = "";
  inputResultado.value = formatar(a + b);
}

document.getElementById("btn-somar").addEventListener("click", somar);

[inputNum1, inputNum2].forEach(function (campo) {
  campo.addEventListener("keydown", function (e) {
    if (e.key === "Enter") somar();
  });
});