/* =========================
   Navigation active state
========================= */
function setActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const target = a.getAttribute('href');
    if (target === current) {
      a.classList.add('active');
    }
  });
}

/* =========================
   Mock auth state
========================= */
const AppState = {
  user: {
    name: 'Vishwesh',
    credit: 85,
    tier: 'Trusted'
  },
  pendingRequests: new Set()
};

/* =========================
   Join team (mock)
========================= */
function mockJoin(teamName, btn) {
  if (AppState.pendingRequests.has(teamName)) return;

  AppState.pendingRequests.add(teamName);

  if (btn) {
    btn.textContent = 'Pending';
    btn.disabled = true;
    btn.classList.add('outline');
  }

  console.log(`Join request sent to ${teamName}`);
}

/* =========================
   Auto-bind join buttons
========================= */
function bindJoinButtons() {
  document.querySelectorAll('[data-join]').forEach(btn => {
    const team = btn.dataset.join;
    btn.addEventListener('click', () => mockJoin(team, btn));
  });
}

/* =========================
   Simple skill toggle (onboarding)
========================= */
function bindSkillToggles() {
  document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
      skill.classList.toggle('active');
    });
  });
}

/* =========================
   Init
========================= */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  bindJoinButtons();
  bindSkillToggles();
});
