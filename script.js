// Efeito de clarear ao clicar nas cápsulas
const capsules = document.querySelectorAll('.capsule');

capsules.forEach(capsule => {
  capsule.addEventListener('click', () => {
    capsules.forEach(c => c.classList.remove('active'));
    capsule.classList.add('active');
  });
});
