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
document.addEventListener('DOMContentLoaded', function() {
  // ===== Papers =====
  const paperToggles = document.querySelectorAll('.paper-toggle');
  const paperTitles  = document.querySelectorAll('.paper-title');
  const paperItems   = document.querySelectorAll('.paper-item');

  // Get header offset from CSS custom property
  const HEADER_OFFSET_PX = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-offset')) || 80;

  // Optional: detect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function getParts(toggle) {
    const paperId = toggle.getAttribute('data-paper');
    const item    = toggle.closest('.paper-item');
    const content = document.getElementById('paper-content-' + paperId);
    const title   = item ? item.querySelector('.paper-title') : null;
    return { paperId, item, content, title };
  }

  function setAria(toggle, expanded, content) {
    toggle.setAttribute('aria-expanded', String(expanded));
    if (content) {
      toggle.setAttribute('aria-controls', content.id);
      content.setAttribute('aria-hidden', String(!expanded));
    }
  }

  function collapsePaper(toggle) {
    const { item, content } = getParts(toggle);
    if (!content) return;

    // If already collapsed, bail
    if (!toggle.classList.contains('expanded')) return;

    // Ensure we start from current height for a smooth collapse
    if (!prefersReduced) {
      content.style.maxHeight = content.scrollHeight + 'px';
      // Force reflow before setting to 0
      // eslint-disable-next-line no-unused-expressions
      content.offsetHeight;
      content.style.maxHeight = '0';
      content.style.opacity = '0';
    } else {
      content.style.maxHeight = '0';
      content.style.opacity = '0';
    }

    toggle.classList.remove('expanded');
    item && item.classList.remove('expanded');
    toggle.textContent = '−'.normalize('NFKC').replace('−','+'); // show '+'
    setAria(toggle, false, content);

    // After transition, keep maxHeight at 0 so layout is stable
    const onEnd = (e) => {
      if (e.target !== content || e.propertyName !== 'max-height') return;
      content.removeEventListener('transitionend', onEnd);
      // Keep at 0; nothing else to do
    };
    if (!prefersReduced) content.addEventListener('transitionend', onEnd);
  }

 function expandPaper(toggle) {
  const { item, content } = getParts(toggle);
  if (!content) return;
  if (toggle.classList.contains('expanded')) return;

  // Prepare expansion target height
  const targetHeight = content.scrollHeight;

  // Start from a known state
  content.style.opacity = '1';
  content.style.maxHeight = '0';
  // Force reflow so the transition starts from 0 → target
  // eslint-disable-next-line no-unused-expressions
  content.offsetHeight;
  content.style.maxHeight = targetHeight + 'px';

  toggle.classList.add('expanded');
  item && item.classList.add('expanded');
  toggle.textContent = '−';
  setAria(toggle, true, content);

  const normalizeHeight = () => {
    content.style.maxHeight = 'none';
  };

  if (prefersReduced) {
    normalizeHeight();
  } else {
    const onEnd = (e) => {
      // Only respond to our height transition
      if (e.target !== content || e.propertyName !== 'max-height') return;
      content.removeEventListener('transitionend', onEnd);
      normalizeHeight();
    };
    content.addEventListener('transitionend', onEnd);
  }
}

  function collapseAllExcept(exceptToggle) {
    paperToggles.forEach((t) => {
      if (t !== exceptToggle && t.classList.contains('expanded')) {
        collapsePaper(t);
      }
    });
  }

  function togglePaper(paperId) {
    const toggle = document.querySelector(`[data-paper="${paperId}"]`);
    if (!toggle) return;

    const isExpanded = toggle.classList.contains('expanded');

    if (isExpanded) {
      collapsePaper(toggle);
    } else {
      // Coordinated action: all three things happen simultaneously
      expandPaperWithScroll(toggle);
    }
  }

 function scrollTitleToTop(toggle) {
  const { title } = getParts(toggle);
  if (!title) return;

  const targetTop =
    window.scrollY +
    title.getBoundingClientRect().top -
    HEADER_OFFSET_PX;

  // Clamp within document so we never overshoot
  const maxTop = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const clampedTop = Math.min(Math.max(targetTop, 0), maxTop);

  window.scrollTo({
    top: clampedTop,
    behavior: prefersReduced ? 'auto' : 'smooth'
  });
}

 function expandPaperWithScroll(toggle) {
  const { item, content, title } = getParts(toggle);
  if (!content || !title) return;
  if (toggle.classList.contains('expanded')) return;

  // 1. Close all other papers immediately (no animation delay)
  collapseAllExcept(toggle);

  // 2. Calculate scroll target
  const targetTop =
    window.scrollY +
    title.getBoundingClientRect().top -
    HEADER_OFFSET_PX;

  const maxTop = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const clampedTop = Math.min(Math.max(targetTop, 0), maxTop);

  // 3. Start both scroll and expand simultaneously
  
  // Start the smooth scroll
  window.scrollTo({
    top: clampedTop,
    behavior: prefersReduced ? 'auto' : 'smooth'
  });

  // Start the paper expansion at exactly the same time
  const targetHeight = content.scrollHeight;
  
  content.style.opacity = '1';
  content.style.maxHeight = '0';
  
  // Force reflow
  // eslint-disable-next-line no-unused-expressions
  content.offsetHeight;
  
  // Trigger expansion
  content.style.maxHeight = targetHeight + 'px';

  toggle.classList.add('expanded');
  item && item.classList.add('expanded');
  toggle.textContent = '−';
  setAria(toggle, true, content);

  const normalizeHeight = () => {
    content.style.maxHeight = 'none';
  };

  if (prefersReduced) {
    normalizeHeight();
  } else {
    const onEnd = (e) => {
      if (e.target !== content || e.propertyName !== 'max-height') return;
      content.removeEventListener('transitionend', onEnd);
      normalizeHeight();
    };
    content.addEventListener('transitionend', onEnd);
  }
}

  // Click listeners on toggle buttons
  paperToggles.forEach((toggle) => {
    // Make sure they are buttons for a11y (optional)
    if (toggle.tagName !== 'BUTTON') {
      toggle.setAttribute('role', 'button');
      toggle.setAttribute('tabindex', '0');
    }
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const paperId = this.getAttribute('data-paper');
      togglePaper(paperId);
    });
    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const paperId = this.getAttribute('data-paper');
        togglePaper(paperId);
      }
    });
  });

  // Click listeners on paper titles
  paperTitles.forEach(function(titleDiv) {
    titleDiv.style.cursor = 'pointer';
    titleDiv.addEventListener('click', function(e) {
      // Don't interfere with links inside the title
      if (e.target.tagName === 'A') return;
      
      const toggle = this.querySelector('.paper-toggle');
      if (!toggle) return;
      
      const paperId = toggle.getAttribute('data-paper');
      const isCurrentlyExpanded = toggle.classList.contains('expanded');
      
      // If it's already expanded, just collapse it
      if (isCurrentlyExpanded) {
        collapsePaper(toggle);
        return;
      }
      
      // Coordinated action: all three things happen simultaneously
      expandPaperWithScroll(toggle);
    });
  });

  // Close papers when clicking outside
  document.addEventListener('click', function(e) {
    let clickedInsidePaper = false;
    paperItems.forEach(function(paperItem) {
      if (paperItem.contains(e.target)) clickedInsidePaper = true;
    });
    if (!clickedInsidePaper) {
      paperToggles.forEach(function(toggle) {
        if (toggle.classList.contains('expanded')) collapsePaper(toggle);
      });
    }
  });

  // ===== Email toggle (unchanged logic; moved into same DOMContentLoaded for simplicity) =====
  const emailIcon = document.getElementById('email-icon');
  const emailText = document.getElementById('email-text');
  if (emailIcon && emailText) {
    emailIcon.addEventListener('click', function(e) {
      e.preventDefault();
      const isHidden = emailText.style.display === 'none' || emailText.style.display === '' || emailText.style.visibility === 'hidden';
      emailText.style.display = 'block';
      emailText.style.visibility = isHidden ? 'visible' : 'hidden';
      emailIcon.setAttribute('aria-expanded', String(isHidden));
    });
  }
});
