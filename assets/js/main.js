(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = document.getElementById('formStatus');
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          status.textContent = form.dataset.successMessage;
          status.className = 'form-status is-success';
        } else {
          status.textContent = form.dataset.errorMessage;
          status.className = 'form-status is-error';
        }
      }).catch(function () {
        status.textContent = form.dataset.errorMessage;
        status.className = 'form-status is-error';
      }).finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }
})();