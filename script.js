document.addEventListener("DOMContentLoaded", () => {
  // 1. Efeito do Fundo Interativo (Movimento do Mouse)
  document.addEventListener('mousemove', (e) => {
    const bg = document.getElementById('bg-interactive');
    if (!bg) return;

    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    bg.style.setProperty('--mouse-x', `${x}%`);
    bg.style.setProperty('--mouse-y', `${y}%`);
  });

  // 2. Efeito de Carrossel Horizontal Controlado por Scroll Vertical
  window.addEventListener("scroll", () => {
    const section = document.querySelector("#equipe");
    const grid = document.querySelector(".team-grid");
    
    if (!section || !grid) return;

    const rect = section.getBoundingClientRect();
    const scrollProgress = -rect.top / (section.offsetHeight - window.innerHeight);
    
    // Garante que a animação só ocorra enquanto a seção estiver na tela
    if (scrollProgress >= 0 && scrollProgress <= 1) {
      const maxTranslate = grid.scrollWidth - window.innerWidth + 100; // Margem de segurança
      grid.style.transform = `translateX(${-scrollProgress * maxTranslate}px)`;
    }
  });
});