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

  // === Terminal Inscription / Lead Capture Logic ===
  const terminalForm = document.getElementById('terminal-subscribe-form');
  const terminalEmail = document.getElementById('terminal-email');
  const terminalLogs = document.getElementById('terminal-logs');

  if (terminalForm && terminalEmail && terminalLogs) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = terminalEmail.value.trim();
      if (!email) return;

      // 1. Hide/Disable the current form inputs so the user can't submit twice
      terminalEmail.disabled = true;
      const submitBtn = terminalForm.querySelector('.terminal-submit-btn');
      if (submitBtn) submitBtn.disabled = true;

      // 2. Simulate terminal output logic
      // First, render a new line showing the submitted command
      const cmdLine = document.createElement('div');
      cmdLine.innerHTML = `<span class="prompt">$</span> <span class="output">drako subscribe --email ${email}</span>`;
      
      // Render a processing message with loading styling
      const processingLine = document.createElement('div');
      processingLine.innerHTML = `<span class="prompt">$</span> <span class="output">processando inscrição e estabelecendo conexão segura...</span>`;
      
      // Append the command line to the logs and hide the current interactive form
      terminalForm.style.display = 'none';
      terminalLogs.appendChild(cmdLine);
      terminalLogs.appendChild(processingLine);

      // Simulate a short realistic CLI delay (e.g. 1000ms)
      setTimeout(() => {
        // Remove processing line
        processingLine.remove();

        // Create success log lines
        const successLine1 = document.createElement('div');
        successLine1.className = 'terminal-feedback-line';
        successLine1.innerHTML = `<span class="success-symbol">✓</span><span class="success-text">Inscrição realizada com sucesso!</span>`;

        const successLine2 = document.createElement('div');
        successLine2.className = 'terminal-feedback-line';
        successLine2.innerHTML = `<span class="success-symbol">✓</span><span class="success-text">E-mail salvo na lista de espera Drako Tech. Bem-vindo à elite.</span>`;

        // Create new interactive prompt line at the end to keep the terminal "alive"
        const nextPromptLine = document.createElement('div');
        nextPromptLine.innerHTML = `<span class="prompt">$</span> <span class="cursor-blink"></span>`;

        terminalLogs.appendChild(successLine1);
        terminalLogs.appendChild(successLine2);
        terminalLogs.appendChild(nextPromptLine);
      }, 1000);
    });
  }

});
