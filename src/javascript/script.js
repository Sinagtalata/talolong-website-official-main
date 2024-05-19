document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    threshold: 0.1,
  };

  const fadeInElements = document.querySelectorAll(
    '.home, .text-container, .talolong-logo, .lopez-logo, .quote, .title h2, .title h1, .title p, .desc'
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (entry.target.classList.contains('text-mission')) {
          entry.target.classList.add('animate-left');
        } else if (entry.target.classList.contains('text-vision')) {
          entry.target.classList.add('animate-right');
        } else {
          entry.target.classList.add('animate-up');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.text-mission, .text-vision, .title-vm').forEach((element) => {
    observer.observe(element);
  });
});
