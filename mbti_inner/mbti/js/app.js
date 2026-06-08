// ===== App Entry Module =====

function init() {
  // Apply saved theme
  applyTheme();

  // Bind theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Restore saved language
  document.getElementById('langSelect').value = currentLang;
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh';

  // Restore saved gender
  if (userGender === 'female') {
    document.getElementById('genderFemale').classList.add('gender-active');
    document.getElementById('genderMale').classList.remove('gender-active');
  }

  // Bind gender selector
  document.getElementById('genderMale').addEventListener('click', function() { setGender('male'); });
  document.getElementById('genderFemale').addEventListener('click', function() { setGender('female'); });

  // Bind language selector
  document.getElementById('langSelect').addEventListener('change', function() {
    changeLang(this.value);
  });

  // Bind start button
  document.getElementById('startBtn').addEventListener('click', startQuiz);

  // Bind quiz navigation
  document.getElementById('prevBtn').addEventListener('click', prevQuestion);
  document.getElementById('optionA').addEventListener('click', function() { selectOption('A'); });
  document.getElementById('optionB').addEventListener('click', function() { selectOption('B'); });
  document.getElementById('retakeBtn').addEventListener('click', retakeQuiz);

  // Bind result page buttons
  document.getElementById('retakeResultBtn').addEventListener('click', retakeQuiz);

  // Bind about page start button
  document.getElementById('aboutStartBtn').addEventListener('click', function() {
    startQuiz();
  });

  // Initialize home page
  renderHomePage();

  // Initialize about page
  renderAboutPage();

  // Show initial page with animation
  showPage('homePage');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
