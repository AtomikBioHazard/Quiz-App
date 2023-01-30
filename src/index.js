const quizData = [
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the President of US?',
    a: 'Joe Biden',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quizContainer = document.querySelector('.quiz-container');
const questionText = document.querySelector('.question');
const answerList = document.querySelector('.answer-list');
const submitButton = document.querySelector('.submit-button');

let currentIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuiz = quizData[currentIndex];
  questionText.textContent = currentQuiz.question;

  answerList.innerHTML = '';
  ['a', 'b', 'c', 'd'].forEach((key) => {
    const answerItem = document.createElement('li');
    const answerInput = document.createElement('input');
    const answerLabel = document.createElement('label');

    answerInput.setAttribute('type', 'radio');
    answerInput.setAttribute('name', 'answer');
    answerInput.setAttribute('class', 'answer');
    answerInput.setAttribute('id', key);

    answerLabel.setAttribute('class', 'answer-label');
    answerLabel.textContent = currentQuiz[key];

    answerItem.appendChild(answerInput);
    answerItem.appendChild(answerLabel);

    answerList.appendChild(answerItem);
  });
}

function getSelectedAnswer() {
  return [...document.querySelectorAll('.answer')].find(
    (answerEl) => answerEl.checked
  )?.id;
}

function deselectAnswers() {
  [...document.querySelectorAll('.answer')].forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener('click', () => {
  const selectedAnswer = getSelectedAnswer();

  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentIndex].correct) {
      score++;
    }

    currentIndex++;
    if (currentIndex < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
