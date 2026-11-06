/**
 * PORTFÓLIO PROFISSIONAL — INTERAÇÕES E ANIMAÇÕES
 * JavaScript Puro (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

  // -------------------------------------------------------------------------
  // 1. MENU MOBILE (TOGGLE)
  // -------------------------------------------------------------------------
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = mainNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Fechar o menu ao clicar em um link de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -------------------------------------------------------------------------
  // 2. ROLAGEM SUAVE (SMOOTH SCROLL)
  // -------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. ANIMAÇÃO SUAVE DE ENTRADA AO ROLAR (SCROLL REVEAL)
  // -------------------------------------------------------------------------
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Aplica o efeito visual nas seções e nos cartões
  const elementsToReveal = document.querySelectorAll(
    'section, .skill-card, .project-card, .experience-item, .social-card'
  );

  elementsToReveal.forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });

});