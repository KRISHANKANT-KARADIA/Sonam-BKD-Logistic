(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    });
  });

  const slides = [
    {
      kicker: '01 — PEOPLE FIRST',
      title: 'Good journeys<br>start with listening.',
      text: 'Tell us what you’re moving, where it’s headed and what matters most. We’ll help shape a plan around you.',
      image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=85'
    },
    {
      kicker: '02 — CARE IN MOTION',
      title: 'A little more care<br>goes a long way.',
      text: 'From the first box to the final handover, we treat your shipment with the care we’d want for our own.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=85'
    },
    {
      kicker: '03 — HERE FOR THE HANDOFF',
      title: 'Clear updates.<br>Peace of mind.',
      text: 'Good logistics is more than a route. It’s knowing there’s a helpful team alongside you at every step.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2200&q=85'
    }
  ];
  const image = document.querySelector('#journey-image');
  const kicker = document.querySelector('#slide-kicker');
  const title = document.querySelector('#slide-title');
  const text = document.querySelector('#slide-text');
  const count = document.querySelector('#slide-count');
  const progress = document.querySelector('#progress-fill');
  const dots = [...document.querySelectorAll('.slide-dots button')];
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    const slide = slides[current];
    kicker.textContent = slide.kicker;
    title.innerHTML = slide.title;
    text.textContent = slide.text;
    image.style.backgroundImage = `url('${slide.image}')`;
    count.textContent = `0${current + 1} / 0${slides.length}`;
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  document.querySelector('.slider-prev').addEventListener('click', () => showSlide(current - 1));
  document.querySelector('.slider-next').addEventListener('click', () => showSlide(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
  showSlide(0);
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
