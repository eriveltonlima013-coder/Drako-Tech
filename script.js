/* ============================================
   DRAKO TECH — Interactive Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === Nav Scroll Effect ===
  const nav = document.querySelector('.nav-wrapper');
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          nav.classList.add('nav-hidden');
        } else {
          nav.classList.remove('nav-hidden');
        }
        nav.classList.toggle('scrolled', currentScrollY > 40);
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  });

  // === Mobile Menu ===
  const toggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isActive = mobileMenu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      document.body.style.overflow = isActive ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // === Scroll Reveal ===
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // === Counter Animation ===
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  // === Code Typing Effect ===
  const codeLines = document.querySelectorAll('.code-line');
  codeLines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-8px)';
    setTimeout(() => {
      line.style.transition = 'all 0.4s ease';
      line.style.opacity = '1';
      line.style.transform = 'translateX(0)';
    }, 600 + i * 120);
  });

  // === Smooth Scroll for Anchors ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
