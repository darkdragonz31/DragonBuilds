(() => {
  const form = document.getElementById('beta-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const button = form.querySelector('button[type="submit"]');
  let sending = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    sending = true;
    button.disabled = true;
    button.textContent = 'Sending…';
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Sending your signup…';
    status.className = 'form-status';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }, signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      status.classList.add('success');
      status.textContent = 'You’re on the Dragon’s Rhythm beta list! Watch the Google Play email you submitted for an invitation when the test is ready. You are not enrolled in Google Play yet; your invitation will explain that next step.';
      button.textContent = 'Signup received';
      status.focus();
    } catch (error) {
      status.classList.add('error');
      status.textContent = error.name === 'AbortError'
        ? 'We could not confirm your signup. It may have reached us. Please email mygarage.support@gmail.com with “Dragon’s Rhythm beta” to check, or try again.'
        : 'We could not confirm your signup. Please try again, or email mygarage.support@gmail.com with “Dragon’s Rhythm beta” in the subject. Your entries are still here.';
      sending = false;
      button.disabled = false;
      button.textContent = 'Try signup again';
      status.focus();
    } finally {
      clearTimeout(timeout);
      form.removeAttribute('aria-busy');
    }
  });
})();
