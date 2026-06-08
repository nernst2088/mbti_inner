// ===== Quiz Logic Module =====

let currentQuestion = 0;
let answers = {};

function startQuiz() {
  currentQuestion = 0;
  answers = {};
  showPage('quizPage');
  renderQuizPage();
}

function retakeQuiz() {
  if (confirm(t('confirmRetake'))) {
    currentQuestion = 0;
    answers = {};
    showPage('quizPage');
    renderQuizPage();
  }
}

function selectOption(option) {
  const q = questions[currentQuestion];
  answers[q.id] = option;
  document.getElementById('optionA').classList.toggle('selected', option === 'A');
  document.getElementById('optionB').classList.toggle('selected', option === 'B');

  // Auto advance after brief delay
  setTimeout(() => {
    if (currentQuestion === questions.length - 1) {
      showResult();
    } else {
      currentQuestion++;
      renderQuizPage();
    }
  }, 300);
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuizPage();
  }
}

// ===== Score Calculation =====
function calculateScores() {
  const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  Object.entries(answers).forEach(([id, selected]) => {
    const q = questions.find(q => q.id === parseInt(id));
    scores[q.dimension] += selected === 'A' ? 1 : -1;
  });
  return scores;
}

function getPersonalityType(scores) {
  const E = scores.EI >= 0 ? 'E' : 'I';
  const S = scores.SN >= 0 ? 'S' : 'N';
  const T = scores.TF >= 0 ? 'T' : 'F';
  const J = scores.JP >= 0 ? 'J' : 'P';
  return `${E}${S}${T}${J}`;
}

function getDimensionPercent(scores) {
  const maxScore = 7;
  const getPercent = score => Math.round(((score + maxScore) / (2 * maxScore)) * 100);
  return {
    E: getPercent(scores.EI), I: 100 - getPercent(scores.EI),
    S: getPercent(scores.SN), N: 100 - getPercent(scores.SN),
    T: getPercent(scores.TF), F: 100 - getPercent(scores.TF),
    J: getPercent(scores.JP), P: 100 - getPercent(scores.JP)
  };
}

function showResult() {
  const scores = calculateScores();
  const personality = getPersonalityType(scores);
  
  // Store for re-rendering
  window._lastPersonality = personality;
  window._lastScores = scores;
  
  renderResultPage(personality, scores);
  showPage('resultPage');
}
