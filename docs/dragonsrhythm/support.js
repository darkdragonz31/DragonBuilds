(() => {
  const form = document.getElementById('support-form');
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
    status.textContent = 'Sending your request…';
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
      status.textContent = 'Your Dragon’s Rhythm request has been sent. Thank you! We’ll use the email you provided if we need more details or have a reply.';
      button.textContent = 'Request received';
      status.focus();
    } catch (error) {
      status.classList.add('error');
      status.textContent = error.name === 'AbortError'
        ? 'We could not confirm your request. It may have reached us. Please email dragonsrhythm.support@gmail.com with “Dragon’s Rhythm support” to check, or try again.'
        : 'We could not confirm your request. Please try again, or email dragonsrhythm.support@gmail.com with “Dragon’s Rhythm support” in the subject. Your entries are still here.';
      sending = false;
      button.disabled = false;
      button.textContent = 'Try sending again';
      status.focus();
    } finally {
      clearTimeout(timeout);
      form.removeAttribute('aria-busy');
    }
  });
})();
