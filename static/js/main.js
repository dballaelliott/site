// Email tooltip toggle on click
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('email-icon');
  if (!trigger) return;

  const tooltip = trigger.querySelector('.email-tooltip');
  if (!tooltip) return;

  const handleScrollClose = () => {
    setOpen(false);
  };

  const setOpen = (shouldOpen) => {
    trigger.classList.toggle('active', shouldOpen);
    trigger.setAttribute('aria-expanded', String(shouldOpen));
    tooltip.setAttribute('aria-hidden', String(!shouldOpen));
    if (shouldOpen) {
      window.addEventListener('scroll', handleScrollClose);
    } else {
      window.removeEventListener('scroll', handleScrollClose);
    }
  };

  const copyToClipboard = (text) => {
    const write = (value) => {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(value);
      }
      const temp = document.createElement('textarea');
      temp.value = value;
      temp.setAttribute('readonly', '');
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      return Promise.resolve();
    };

    return write(text).catch(() => {
      // Ignore copy failures silently; tooltip still opens.
    });
  };

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const nextState = !trigger.classList.contains('active');
    setOpen(nextState);
    if (nextState) {
      const emailText = tooltip.textContent.trim();
      if (emailText) copyToClipboard(emailText);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
      trigger.focus();
    }
  });
});
