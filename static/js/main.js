// Email tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailIcon = document.getElementById('email-icon');
    if (emailIcon) {
        let tooltipVisible = false;
        let hideTimer = null;

        function hideTooltip() {
            emailIcon.classList.remove('active');
            tooltipVisible = false;
            if (hideTimer) {
                clearTimeout(hideTimer);
                hideTimer = null;
            }
        }

        function startHideTimer() {
            if (hideTimer) {
                clearTimeout(hideTimer);
            }
            hideTimer = setTimeout(hideTooltip, 10000); // 10 seconds
        }

        emailIcon.addEventListener('mouseenter', function() {
            this.classList.add('active');
            tooltipVisible = true;
            startHideTimer();
        });

        emailIcon.addEventListener('mouseleave', function() {
            startHideTimer();
        });

        // Hide tooltip on scroll
        window.addEventListener('scroll', function() {
            if (tooltipVisible) {
                hideTooltip();
            }
        });
    }
});

// Paper expand/collapse functionality
document.addEventListener('DOMContentLoaded', function() {
    const paperToggles = document.querySelectorAll('.paper-toggle');
    const paperTitles = document.querySelectorAll('.paper-title');
    const paperItems = document.querySelectorAll('.paper-item');
    
    function collapsePaper(toggle) {
        const paperId = toggle.getAttribute('data-paper');
        const paperContent = document.getElementById('paper-content-' + paperId);
        paperContent.style.maxHeight = '0';
        paperContent.style.opacity = '0';
        toggle.classList.remove('expanded');
        toggle.textContent = '+';
    }
    
    function expandPaper(toggle) {
        const paperId = toggle.getAttribute('data-paper');
        const paperContent = document.getElementById('paper-content-' + paperId);
        paperContent.style.maxHeight = paperContent.scrollHeight + 'px';
        paperContent.style.opacity = '1';
        toggle.classList.add('expanded');
        toggle.textContent = '−';
    }
    
    function togglePaper(paperId) {
        const toggle = document.querySelector(`[data-paper="${paperId}"]`);
        if (!toggle) return;
        
        const isExpanded = toggle.classList.contains('expanded');
        
        if (isExpanded) {
            collapsePaper(toggle);
        } else {
            expandPaper(toggle);
        }
    }
    
    // Add click listeners to toggle buttons
    paperToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const paperId = this.getAttribute('data-paper');
            togglePaper(paperId);
        });
    });
    
    // Add click listeners to paper titles (the entire title div)
    paperTitles.forEach(function(titleDiv) {
        titleDiv.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link within the title
            if (e.target.tagName === 'A') {
                return;
            }
            
            const toggle = this.querySelector('.paper-toggle');
            if (toggle) {
                const paperId = toggle.getAttribute('data-paper');
                togglePaper(paperId);
            }
        });
        
        // Add a subtle visual cue that the title is clickable
        titleDiv.style.cursor = 'pointer';
    });
    
    // Close papers when clicking outside
    document.addEventListener('click', function(e) {
        // Check if the click is outside any paper item
        let clickedInsidePaper = false;
        
        paperItems.forEach(function(paperItem) {
            if (paperItem.contains(e.target)) {
                clickedInsidePaper = true;
            }
        });
        
        // If clicked outside all papers, close any expanded papers
        if (!clickedInsidePaper) {
            paperToggles.forEach(function(toggle) {
                if (toggle.classList.contains('expanded')) {
                    collapsePaper(toggle);
                }
            });
        }
    });
});
