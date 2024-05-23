let questions = [
  {
    question: "Welches dieser Tiere lebt in Australien und springt?",
    answers: ["Elefant", "Tiger", "Känguru", "Pinguin"],
    correctAnswer: 2,
  },
  {
    question: "Welches dieser Tiere lebt in der Arktis und ist weiß?",
    answers: ["Wolf", "Löwe", "Tiger", "Eisbär"],
    correctAnswer: 3,
  },
  {
    question: "Welches Tier legt Eier und kann fliegen?",
    answers: ["Huhn", "Pinguin", "Strauß", "Spatz"],
    correctAnswer: 1,
  },
  {
    question: "Welches dieser Tiere hat Streifen?",
    answers: ["Tiger", "Löwe", "Elefant", "Giraffe"],
    correctAnswer: 0,
  },
  {
    question: "Welches Tier ist bekannt dafür, sehr langsam zu sein?",
    answers: ["Gepard", "Känguru", "Faultier", "Hase"],
    correctAnswer: 2,
  },
  {
    question: "Was ist das kleinste Vogel der Welt?",
    answers: ["Spatz", "Kolibri", "Adler", "Taube"],
    correctAnswer: 1,
  },
  {
    question: "Welches dieser Tiere ist ein Fleischfresser?",
    answers: ["Löwe", "Kuh", "Schaf", "Ziege"],
    correctAnswer: 0,
  },
  {
    question: "Welches dieser Tiere hat einen langen Hals?",
    answers: ["Zebra", "Elefant", "Giraffe", "Pferd"],
    correctAnswer: 2,
  },
  {
    question: "Welches dieser Tiere lebt im Meer und hat Tentakel?",
    answers: ["Wal", "Krake", "Seehund", "Delfin"],
    correctAnswer: 1,
  },
  {
    question: "Welches dieser Tiere kann sehr weit springen?",
    answers: ["Schlange", "Schildkröte", "Maulwurf", "Frosch"],
    correctAnswer: 3,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;

let Audio_Sucess = new Audio("audio/success.mp3");
let Audio_Fail = new Audio("audio/fail.mp3");

function init() {
  let numberOfQuestions = document.getElementById("all-questions");
  numberOfQuestions.innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameover()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateNextQuestion();
  }
}

function gameover() {
  return currentQuestion >= questions.length;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNummer = selection.slice(-1);

  let x = question["correctAnswer"];
  let idOfRightAnswer = `answer${x}`;

  if (rightAnswerSelected(selectedQuestionNummer, question)) {
    Audio_Sucess.play();
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightAnswers++;
  } else {
    Audio_Fail.play();
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  resetAnswerButton();
  document.getElementById("next-button").disabled = true;

  currentQuestion++;
  document.getElementById("qeustion-number").innerHTML = currentQuestion + 1;
  showQuestion();
}

function resetAnswerButton() {
  document.getElementById("answer0").parentNode.classList.remove("bg-danger");
  document.getElementById("answer0").parentNode.classList.remove("bg-success");
  document.getElementById("answer1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer1").parentNode.classList.remove("bg-success");
  document.getElementById("answer2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer2").parentNode.classList.remove("bg-success");
  document.getElementById("answer3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer3").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-img").src = "./img/quiz-2074324_640.png";
  document.getElementById("endScreen").style = "display:none";
  document.getElementById("questionBody").style = "";
  currentQuestion = 0;
  rightAnswers = 0;
  document.getElementById("qeustion-number").innerHTML = currentQuestion + 1;
  init();
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display:none";

  document.getElementById("numOfQuestions").innerHTML = questions.length;
  document.getElementById("numOfRightAnswers").innerHTML = rightAnswers;

  document.getElementById("header-img").src = "./img/trophy.png";
}

function updateProgressBar() {
  let precent = (currentQuestion + 1) / questions.length;
  precent = precent * 100;
  document.getElementById("progress-bar").innerHTML = `${precent} %`;
  document.getElementById("progress-bar").style = `width: ${precent}%;`;
}

function updateNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer0").innerHTML = question["answers"][0];
  document.getElementById("answer1").innerHTML = question["answers"][1];
  document.getElementById("answer2").innerHTML = question["answers"][2];
  document.getElementById("answer3").innerHTML = question["answers"][3];
}

function rightAnswerSelected(selectedQuestionNummer, q) {
  return selectedQuestionNummer == q["correctAnswer"];
}
