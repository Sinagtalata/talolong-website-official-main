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

  const searchForm = document.querySelector('.search');
  const searchInput = searchForm.querySelector('input[name="query"]');

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();
    const allTextElements = document.querySelectorAll('h1, h2, h3, p, a'); // Add more selectors as needed

    let found = false;
    allTextElements.forEach((element) => {
      const text = element.textContent.toLowerCase();
      const index = text.indexOf(query);
      if (index !== -1 && query.trim() !== '') {
        const originalText = element.textContent;
        const highlightedText =
          originalText.substring(0, index) +
          "<span class='highlight'>" +
          originalText.substring(index, index + query.length) +
          '</span>' +
          originalText.substring(index + query.length);
        element.innerHTML = highlightedText; // Set the new HTML

        if (!found) {
          // Only show the popup and scroll for the first match
          alert('Match found: navigating to the content.');
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
        }
      }
    });
    if (!found) {
      alert('No match found.');
    }
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

document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
