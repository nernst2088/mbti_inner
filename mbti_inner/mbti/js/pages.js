// ===== Page Rendering Module =====

function renderHomePage() {
  document.getElementById('appTitle').textContent = t('appTitle');
  document.getElementById('appSubtitle').textContent = t('appSubtitle');
  document.getElementById('langLabel').textContent = t('langLabel');
  document.getElementById('infoTitle').textContent = t('infoTitle');
  document.getElementById('dim1Desc').textContent = t('dim1Desc');
  document.getElementById('dim2Desc').textContent = t('dim2Desc');
  document.getElementById('dim3Desc').textContent = t('dim3Desc');
  document.getElementById('dim4Desc').textContent = t('dim4Desc');
  document.getElementById('startBtn').textContent = t('startQuiz');
  document.getElementById('footerText').textContent = t('footerText');
}

function renderAboutPage() {
  document.getElementById('aboutWhatTitle').textContent = t('aboutWhat');
  document.getElementById('aboutDesc1').textContent = t('aboutDesc1');
  document.getElementById('aboutDesc2').textContent = t('aboutDesc2');
  document.getElementById('aboutTypesTitle').textContent = t('aboutTypes');
  document.getElementById('aboutStartBtn').textContent = t('aboutStartTest');
  document.getElementById('aboutFooter1').textContent = t('aboutFooter1');
  document.getElementById('aboutFooter2').textContent = t('aboutFooter2');

  const dims = [
    { name: t('aboutDim1Name'), desc: t('aboutDim1Desc') },
    { name: t('aboutDim2Name'), desc: t('aboutDim2Desc') },
    { name: t('aboutDim3Name'), desc: t('aboutDim3Desc') },
    { name: t('aboutDim4Name'), desc: t('aboutDim4Desc') }
  ];
  document.getElementById('aboutDimensions').innerHTML = dims.map(d => `
    <div class="about-dim-card">
      <p class="about-dim-name">${d.name}</p>
      <p class="about-dim-desc">${d.desc}</p>
    </div>
  `).join('');

  document.getElementById('typesGrid').innerHTML = personalityTypes.map(code =>
    `<div class="type-item"><span class="type-code">${code}</span><span class="type-name">${t('p_' + code + '_name')}</span></div>`
  ).join('');
}

function renderQuizPage() {
  const q = questions[currentQuestion];
  const qLabel = t('questionLabel');
  document.getElementById('progressText').textContent = `${qLabel} ${currentQuestion + 1} / ${questions.length}`;
  document.getElementById('currentDimension').textContent = t('dimension' + q.dimension);
  document.getElementById('progressFill').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  document.getElementById('questionText').textContent = t('q' + q.id);
  document.getElementById('optionAText').textContent = t('q' + q.id + 'A');
  document.getElementById('optionBText').textContent = t('q' + q.id + 'B');

  const selected = answers[q.id];
  document.getElementById('optionA').classList.toggle('selected', selected === 'A');
  document.getElementById('optionB').classList.toggle('selected', selected === 'B');

  document.getElementById('prevBtn').textContent = t('prevQuestion');
  document.getElementById('prevBtn').disabled = currentQuestion === 0;
  document.getElementById('retakeBtn').textContent = t('retakeQuiz');
}

function renderResultPage(personality, scores) {
  if (!personality) {
    // Re-render from current display
    personality = document.getElementById('resultType').textContent;
  }
  const percents = getDimensionPercent(scores);

  document.getElementById('resultType').textContent = personality;
  document.getElementById('resultName').textContent = t('p_' + personality + '_name');
  document.getElementById('resultNickname').textContent = `"${t('p_' + personality + '_nick')}"`;
  document.getElementById('description').textContent = t('p_' + personality + '_desc');
  document.getElementById('characterImage').src = getImagePath(personality);
  document.getElementById('characterImage').alt = t('p_' + personality + '_name');
  document.getElementById('imageCredit').textContent = t('imageCredit');

  // Dimension bars
  const barsHtml = [
    { left: 'E', right: 'I', percent: percents.E },
    { left: 'S', right: 'N', percent: percents.S },
    { left: 'T', right: 'F', percent: percents.T },
    { left: 'J', right: 'P', percent: percents.J }
  ].map(d => `
    <div class="dimension-item-result">
      <span class="dim-label">${d.left} / ${d.right}</span>
      <div class="dim-bar"><div class="dim-fill" style="width:${d.percent}%"></div></div>
      <span class="dim-percent">${d.percent}%</span>
    </div>
  `).join('');
  document.getElementById('dimensionBars').innerHTML = barsHtml;

  // Traits and lists
  document.getElementById('traits').innerHTML = t('p_' + personality + '_traits').map(tr => `<span class="trait-badge">${tr}</span>`).join('');
  document.getElementById('strengths').innerHTML = t('p_' + personality + '_strengths').map(s => `<p class="list-item">${s}</p>`).join('');
  document.getElementById('weaknesses').innerHTML = t('p_' + personality + '_weaknesses').map(w => `<p class="list-item">${w}</p>`).join('');
  document.getElementById('career').innerHTML = t('p_' + personality + '_career').map(c => `<p class="list-item">${c}</p>`).join('');
  document.getElementById('relationships').innerHTML = t('p_' + personality + '_relationships').map(r => `<p class="list-item">${r}</p>`).join('');
  document.getElementById('development').innerHTML = t('p_' + personality + '_development').map(d => `<p class="list-item">${d}</p>`).join('');

  // Section titles
  document.getElementById('dimensionAnalysisTitle').textContent = t('dimensionAnalysis');
  document.getElementById('personalityInterpretationTitle').textContent = t('personalityInterpretation');
  document.getElementById('coreTraitsTitle').textContent = t('coreTraits');
  document.getElementById('strengthsTitle').textContent = t('strengths');
  document.getElementById('weaknessesTitle').textContent = t('weaknesses');
  document.getElementById('careerTitle').textContent = t('career');
  document.getElementById('relationshipsTitle').textContent = t('relationships');
  document.getElementById('developmentTitle').textContent = t('development');

  // Action buttons
  document.getElementById('retakeResultBtn').textContent = t('retakeTest');
}

// Page switching with animation
function showPage(pageId) {
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'visible');
  });
  const target = document.getElementById(pageId);
  target.classList.add('active');
}

// Render the current active page
function renderCurrentPage() {
  const activePage = document.querySelector('.page.active');
  if (!activePage) return;
  switch (activePage.id) {
    case 'homePage': renderHomePage(); break;
    case 'quizPage': renderQuizPage(); break;
    case 'resultPage':
      if (window._lastPersonality) {
        renderResultPage(window._lastPersonality, window._lastScores);
      }
      break;
    case 'aboutPage': renderAboutPage(); break;
  }
}

// Expose for i18n module
window.renderCurrentPage = renderCurrentPage;
