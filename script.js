 // Set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const allCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      allCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
      });

      // Hide sections if no cards visible
      document.querySelectorAll('section.mb-16').forEach(section => {
        const visibleCards = Array.from(section.querySelectorAll('.card')).filter(c => c.style.display !== 'none');
        section.style.display = visibleCards.length > 0 ? 'block' : 'none';
      });
    });

    // Login Modal
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginBtn.addEventListener('click', () => {
      loginModal.classList.remove('hidden');
    });

    closeLoginModal.addEventListener('click', () => {
      loginModal.classList.add('hidden');
    });

    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      loginMessage.textContent = 'Logged in successfully! (Demo)';
      setTimeout(() => {
        loginModal.classList.add('hidden');
        loginForm.reset();
        loginMessage.textContent = '';
      }, 2000);
    });

    // Contact Modal
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeContactModal = document.getElementById('closeContactModal');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactBtn.addEventListener('click', () => {
      contactModal.classList.remove('hidden');
    });

    closeContactModal.addEventListener('click', () => {
      contactModal.classList.add('hidden');
    });

    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      formMessage.textContent = 'Message sent! (Demo)';
      setTimeout(() => {
        contactModal.classList.add('hidden');
        contactForm.reset();
        formMessage.textContent = '';
      }, 2000);
    });

    // Back to Top
    const backToTop = document.getElementById('backToTop');

    window.onscroll = () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    };

    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }