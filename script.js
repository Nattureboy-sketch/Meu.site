const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((button) => {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });

    panels.forEach((panel) => {
      panel.classList.remove('active');
      panel.hidden = true;
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const target = document.getElementById(tab.dataset.tab);
    if (target) {
      target.hidden = false;
      target.classList.add('active');
    }
  });
});

const quizButtons = document.querySelectorAll('.quiz-options button');
const quizFeedback = document.querySelector('.quiz-feedback');

quizButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isCorrect = button.dataset.correct === 'true';

    if (!quizFeedback) return;

    if (isCorrect) {
      quizFeedback.textContent = '✅ Correto! A Semana de Arte Moderna de 1922 é o marco simbólico do Modernismo no Brasil.';
      quizFeedback.style.color = '#0f766e';
    } else {
      quizFeedback.textContent = '❌ Não foi essa. Revise a seção “Semana de Arte Moderna de 1922” e tente novamente.';
      quizFeedback.style.color = '#b91c1c';
    }
  });
});
