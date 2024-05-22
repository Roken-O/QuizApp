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
    answers: ["Hase", "Fuchs","Eichhörnchen", "Maulwurf"],
    correctAnswer: 2,
  },
  {
    question: "Welches Tier hat einen Rüssel?",
    answers: ["Giraffe", "Löwe", "Tiger","Elefant"],
    correctAnswer: 3,
  },
  {
    question: "Wie viele Beine hat eine Spinne?",
    answers: ["6", "8", "10", "12"],
    correctAnswer: 1,
  },
  {
    question: "Was für ein Tier ist Bambi?",
    answers: ["Kaninchen", "Bär", "Reh", "Fuchs"],
    correctAnswer: 2,
  },
  {
    question: "Welches dieser Tiere lebt im Wasser?",
    answers: ["Frosch", "Känguru", "Adler", "Elefant"],
    correctAnswer: 0,
  },
  {
    question: "Welches dieser Tiere kann seine Farbe ändern?",
    answers: ["Zebra","Chamäleon",  "Papagei", "Löwe"],
    correctAnswer: 1,
  },
];

let currentQuestion = 0;

function init() {
  let numberOfQuestions = document.getElementById("all-questions");
  numberOfQuestions.innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if(currentQuestion >= questions.length ){
  }

  else{
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer0").innerHTML = question["answers"][0];
  document.getElementById("answer1").innerHTML = question["answers"][1];
  document.getElementById("answer2").innerHTML = question["answers"][2];
  document.getElementById("answer3").innerHTML = question["answers"][3];
  } 
}

function answer(selection) {
  let question = questions[currentQuestion];
  console.log("Selected answer is", selection);
  let selectedQuestionNummer = selection.slice(-1);
  console.log("selectedQuestionNummer is", selectedQuestionNummer);
  console.log("Current question is", question["correctAnswer"]);

  let x= question['correctAnswer'];
  let idOfRightAnswer= `answer${x }`;

  if (selectedQuestionNummer == question["correctAnswer"]) {
    console.log("Richtige Antwort!!");
    document.getElementById(selection).parentNode.classList.add('bg-success');
  } else {
    console.log("Falsche Antwort");
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
resetAnswerButton();
document.getElementById('next-button').disabled = true;

currentQuestion++;
document.getElementById('qeustion-number').innerHTML = currentQuestion + 1;
showQuestion();
// answer(selection);
}


function resetAnswerButton(){
document.getElementById("answer0").parentNode.classList.remove('bg-danger');
document.getElementById("answer0").parentNode.classList.remove('bg-success');
document.getElementById("answer1").parentNode.classList.remove('bg-danger');
document.getElementById("answer1").parentNode.classList.remove('bg-success');
document.getElementById("answer2").parentNode.classList.remove('bg-danger');
document.getElementById("answer2").parentNode.classList.remove('bg-success');
document.getElementById("answer3").parentNode.classList.remove('bg-danger');
document.getElementById("answer3").parentNode.classList.remove('bg-success');
}