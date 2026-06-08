const TOTAL_QUESTIONS = 12;
let currentLang = 'zh';
let currentQuestion = 0;

// Theme
function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Init theme from saved preference or system
(function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (saved === 'light') {
        document.documentElement.removeAttribute('data-theme');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    buildQuestions();
    setLang('zh');
});

function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('.segment-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.segment-btn[onclick="setLang('${lang}')"]`).classList.add('active');

    document.getElementById('navTitle').textContent = t.navTitle;
    document.getElementById('mainTitle').innerHTML = t.title.replace(/\n/g, '<br>');
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('scaleTitle').textContent = t.scaleTitle;
    document.getElementById('scaleDesc').textContent = t.scaleDesc;
    document.getElementById('resetBtn').textContent = t.resetBtn;
    document.getElementById('scoreLabel').textContent = t.scoreLabel;
    document.getElementById('dimensionTitle').textContent = t.dimensionTitle;

    document.querySelectorAll('[data-i18n="s1"]').forEach(el => el.textContent = t.s1);
    document.querySelectorAll('[data-i18n="s2"]').forEach(el => el.textContent = t.s2);
    document.querySelectorAll('[data-i18n="s3"]').forEach(el => el.textContent = t.s3);
    document.querySelectorAll('[data-i18n="s4"]').forEach(el => el.textContent = t.s4);
    document.querySelectorAll('[data-i18n="s5"]').forEach(el => el.textContent = t.s5);

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const qCard = document.getElementById(`question-${i}`);
        if (qCard) {
            qCard.querySelector('.question-text').textContent = `${i + 1}. ${t.questions[i]}`;
            qCard.querySelector('.question-counter').textContent = t.progress
                .replace('{current}', i + 1).replace('{total}', TOTAL_QUESTIONS);
        }
    }

    updateNavButtons();
    updateProgress();
    updateQuestionNav();

    // If result is already visible, re-render it in the new language
    if (document.getElementById('resultSection').classList.contains('visible')) {
        calculateResult();
    }
}

function buildQuestions() {
    const form = document.getElementById('quizForm');
    form.innerHTML = '';
    const t = translations[currentLang];

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const div = document.createElement('div');
        div.className = `question-card${i === 0 ? ' active' : ''}`;
        div.id = `question-${i}`;
        div.innerHTML = `
            <div class="question-counter">${t.progress.replace('{current}', i + 1).replace('{total}', TOTAL_QUESTIONS)}</div>
            <div class="question-text">${t.questions[i]}</div>
            <div class="option-group">
                ${[1,2,3,4,5].map(v => `
                    <input type="radio" name="q${i + 1}" value="${v}" class="option-input" id="q${i + 1}-${v}" onchange="onAnswer(${i})">
                    <label for="q${i + 1}-${v}" class="option-item">
                        <div class="option-radio"></div>
                        <span class="option-label-text">${v}</span>
                    </label>
                `).join('')}
            </div>
            <div class="nav-footer">
                <button type="button" class="btn btn-secondary" id="prev-${i}" onclick="navigateQuestion(${i - 1})">${t.prevBtn}</button>
                <button type="button" class="btn btn-primary" id="next-${i}" onclick="navigateQuestion(${i + 1})">${t.nextBtn}</button>
            </div>
        `;
        form.appendChild(div);
    }

    buildQuestionNav();
}

function buildQuestionNav() {
    const nav = document.getElementById('questionNav');
    nav.innerHTML = '';
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const dot = document.createElement('div');
        dot.className = 'q-indicator';
        dot.id = `qnav-${i}`;
        dot.onclick = () => navigateQuestion(i);
        nav.appendChild(dot);
    }
}

function onAnswer(qIndex) {
    updateQuestionNav();
    updateProgress();

    if (qIndex < TOTAL_QUESTIONS - 1) {
        setTimeout(() => navigateQuestion(qIndex + 1), 350);
    }

    updateNavButtons();
}

function navigateQuestion(index) {
    if (index < 0 || index >= TOTAL_QUESTIONS) return;

    document.querySelectorAll('.question-card').forEach(card => card.classList.remove('active'));
    document.getElementById(`question-${index}`).classList.add('active');

    currentQuestion = index;
    updateNavButtons();
    updateQuestionNav();
    updateProgress();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavButtons() {
    const t = translations[currentLang];
    const answered = document.querySelectorAll('.option-input:checked').length;

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const prevBtn = document.getElementById(`prev-${i}`);
        const nextBtn = document.getElementById(`next-${i}`);
        if (!prevBtn || !nextBtn) continue;

        prevBtn.style.visibility = i === 0 ? 'hidden' : 'visible';
        nextBtn.textContent = i === TOTAL_QUESTIONS - 1 ? t.submitBtn : t.nextBtn;
        nextBtn.onclick = i === TOTAL_QUESTIONS - 1 ? calculateResult : () => navigateQuestion(i + 1);
        nextBtn.disabled = i === TOTAL_QUESTIONS - 1 ? answered < TOTAL_QUESTIONS : false;
        nextBtn.style.opacity = nextBtn.disabled ? '0.4' : '1';
    }
}

function updateQuestionNav() {
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const dot = document.getElementById(`qnav-${i}`);
        if (!dot) continue;
        dot.className = 'q-indicator';
        if (document.querySelector(`input[name="q${i + 1}"]:checked`)) {
            dot.classList.add('answered');
        }
        if (i === currentQuestion) {
            dot.classList.add('active');
        }
    }
}

function updateProgress() {
    const t = translations[currentLang];
    const answered = document.querySelectorAll('.option-input:checked').length;
    document.getElementById('progressThumb').style.width = (answered / TOTAL_QUESTIONS * 100) + '%';
    document.getElementById('progressText').textContent = t.progress
        .replace('{current}', answered).replace('{total}', TOTAL_QUESTIONS);
}

function calculateResult() {
    const t = translations[currentLang];
    const answered = document.querySelectorAll('.option-input:checked').length;

    if (answered < TOTAL_QUESTIONS) {
        alert(t.alertIncomplete.replace('{count}', TOTAL_QUESTIONS - answered));
        return;
    }

    let totalScore = 0;
    const dimensionScores = { expectation: 0, independence: 0, emotion: 0, responsibility: 0 };

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const v = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
        totalScore += v;
        if (i <= 3) dimensionScores.expectation += v;
        else if (i <= 6) dimensionScores.independence += v;
        else if (i <= 9) dimensionScores.emotion += v;
        else dimensionScores.responsibility += v;
    }

    document.getElementById('quizSection').style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.info-card').style.display = 'none';
    document.getElementById('resultSection').classList.add('visible');

    document.getElementById('scoreDisplay').textContent = totalScore;

    const dims = [
        { name: t.dimExpectation, sub: t.dimExpectationSub, score: dimensionScores.expectation },
        { name: t.dimIndependence, sub: t.dimIndependenceSub, score: dimensionScores.independence },
        { name: t.dimEmotion, sub: t.dimEmotionSub, score: dimensionScores.emotion },
        { name: t.dimResponsibility, sub: t.dimResponsibilitySub, score: dimensionScores.responsibility }
    ];

    document.getElementById('dimensionGrid').innerHTML = dims.map(d => `
        <div class="dimension-card">
            <div class="dimension-name">${d.name}<br><span style="font-size:var(--caption1);color:var(--label-tertiary)">${d.sub}</span></div>
            <div class="dimension-value">${d.score} ${t.dimMaxScore}</div>
        </div>
    `).join('');

    const level = t.levels.find(l => totalScore >= l.range[0] && totalScore <= l.range[1]);
    if (level) {
        const levelEl = document.getElementById('levelDisplay');
        levelEl.textContent = `${level.text} · ${level.sub}`;
        levelEl.style.background = level.bg;
        levelEl.style.color = level.color;

        document.getElementById('adviceContainer').innerHTML = `
            ${level.advice.map(a => `
                <div class="advice-card" style="border-left-color: ${level.color}">
                    <div class="advice-title">${a.title}</div>
                    <div class="advice-text">${a.text.replace(/\n/g, '<br>')}</div>
                </div>
            `).join('')}
            <div class="quote-card">
                ${level.quotes.map((q, i) => `<div class="quote-text${i === 0 ? ' quote-classic' : ''}">${q}</div>`).join('')}
            </div>
            <div style="text-align:center;font-size:var(--footnote);color:var(--label-tertiary);margin-top:var(--space-8)">${t.dimNote}</div>
        `;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
    const t = translations[currentLang];
    // Uncheck all radio inputs (quizForm is a div, not a form, so no .reset())
    document.querySelectorAll('.option-input').forEach(input => input.checked = false);
    document.getElementById('quizSection').style.display = '';
    document.querySelector('.hero').style.display = '';
    document.querySelector('.info-card').style.display = '';
    document.getElementById('resultSection').classList.remove('visible');
    document.getElementById('progressThumb').style.width = '0%';
    document.getElementById('progressText').textContent = t.progress
        .replace('{current}', '0').replace('{total}', TOTAL_QUESTIONS);
    currentQuestion = 0;
    document.querySelectorAll('.question-card').forEach(c => c.classList.remove('active'));
    document.getElementById('question-0').classList.add('active');
    updateQuestionNav();
    updateNavButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
