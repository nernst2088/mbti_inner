// ===== Data Module - Questions & Personality Types =====

// Generate 28 questions mapped to 4 dimensions
const questions = [];
for (let i = 1; i <= 28; i++) {
  let dimension;
  if (i <= 7) dimension = 'EI';
  else if (i <= 14) dimension = 'SN';
  else if (i <= 21) dimension = 'TF';
  else dimension = 'JP';
  questions.push({ id: i, dimension: dimension });
}

// 16 personality type codes
const personalityTypes = [
  'INTJ','INTP','ENTJ','ENTP',
  'INFJ','INFP','ENFJ','ENFP',
  'ISTJ','ISFJ','ESTJ','ESFJ',
  'ISTP','ISFP','ESTP','ESFP'
];

// Dimension mapping
const dimensionLabels = {
  EI: { left: 'E', right: 'I' },
  SN: { left: 'S', right: 'N' },
  TF: { left: 'T', right: 'F' },
  JP: { left: 'J', right: 'P' }
};

// Character image base path
const IMAGE_BASE_PATH = 'assets/';

// Gender state (persisted)
let userGender = localStorage.getItem('mbti_gender') || 'male';

function getImagePath(personality) {
  return IMAGE_BASE_PATH + personality + '_' + userGender + '.png';
}

function setGender(gender) {
  userGender = gender;
  localStorage.setItem('mbti_gender', gender);
  // Update all gender button active states
  document.querySelectorAll('.gender-btn').forEach(function(btn) {
    btn.classList.toggle('gender-active', btn.dataset.gender === gender);
  });
}

// Theme (dark/light) state
let theme = localStorage.getItem('mbti_theme') || 'light';

function getTheme() { return theme; }

function setTheme(t) {
  theme = t;
  localStorage.setItem('mbti_theme', t);
  document.documentElement.setAttribute('data-theme', t);
  var btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  var btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  setTheme(theme === 'dark' ? 'light' : 'dark');
}
