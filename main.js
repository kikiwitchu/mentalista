var numeroSecreto = parseInt(Math.random() * 21);
function chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML =
            "<span>🎉Você acertou!🎉</span> <br><br>Atualize a página para adivinhar outro número.";
    } else if (chute > 20 || chute < 0) {
        elementoResultado.innerHTML = "Não é esse, você adivinhar entre 0 a 20. 🤔";
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "Bom palpite, pena que é maior do que deveria."
    } else {
        elementoResultado.innerHTML = "Um pouco mais.";
    }
}


//Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.