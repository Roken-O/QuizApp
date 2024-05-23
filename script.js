let questions = [
  {
    question: "Welches Tier miaut?",
    answers: ["Hund", "Katze", "Kuh", "Vogel"],
    correctAnswer: 1,
  },
  {
    question: "Was isst ein Panda am liebsten?",
    answers: ["Bambus", "Fleisch", "Obst", "Blätter"],
    correctAnswer: 0,
  },
  {
    question: "Welches dieser Tiere kann fliegen?",
    answers: ["Hund", "Katze", "Fisch", "Vogel"],
    correctAnswer: 3,
  },
  {
    question: "Welches dieser Tiere ist das größte Säugetier?",
    answers: ["Elefant", "Giraffe", "Wal", "Nilpferd"],
    correctAnswer: 2,
  },
  {
    question:
      "Welches Tier lebt in einem Bau und sammelt Nüsse für den Winter?",
    answers: ["Hase", "Eichhörnchen", "Fuchs", "Maulwurf"],
    correctAnswer: 1,
  },
  {
    question: "Welches Tier hat einen Rüssel?",
    answers: ["Giraffe", "Löwe", "Tiger", "Elefant"],
    correctAnswer: 3,
  },
  {
    question: "Wie viele Beine hat eine Spinne?",
    answers: ["8", "6", "10", "12"],
    correctAnswer: 0,
  },
  {
    question: "Was für ein Tier ist Bambi?",
    answers: ["Kaninchen", "Bär", "Reh", "Fuchs"],
    correctAnswer: 2,
  },
  {
    question: "Welches dieser Tiere lebt im Wasser?",
    answers: ["Känguru", "Adler", "Elefant", "Frosch"],
    correctAnswer: 3,
  },
  {
    question: "Welches dieser Tiere kann seine Farbe ändern?",
    answers: ["Zebra", "Chamäleon", "Papagei", "Löwe"],
    correctAnswer: 1,
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
