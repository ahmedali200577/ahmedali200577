// Year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Scroll animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// Contact form validation (basic)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const nameInput = this.name;
    const emailInput = this.email;
    const messageInput = this.message;

    // Helper to validate field
    const validate = (input, pattern) => {
      const errorSmall = input.nextElementSibling;
      if (!input.value.trim() || (pattern && !pattern.test(input.value))) {
        errorSmall.textContent = 'الرجاء تعبئة هذا الحقل بشكل صحيح';
        valid = false;
      } else {
        errorSmall.textContent = '';
      }
    };

    validate(nameInput);
    validate(emailInput, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    validate(messageInput);

    const status = document.getElementById('formStatus');

    if (valid) {
      status.textContent = 'تم إرسال رسالتك بنجاح! سنعود إليك قريباً.';
      this.reset();
    } else {
      status.textContent = 'يرجى تصحيح الأخطاء أعلاه.';
    }
  });
}