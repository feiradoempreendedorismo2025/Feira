function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = "<p>Pergunta: Qual é a principal característica de um empreendedor?</p>" +
                              "<button onclick='answerQuiz(\"criatividade\")'>Criatividade</button>" +
                              "<button onclick='answerQuiz(\"liderança\")'>Liderança</button>";
}

function answerQuiz(answer) {
    alert("Você escolheu: " + answer);
}

function downloadSimulador() {
    window.location.href = "simulador.pdf";
}