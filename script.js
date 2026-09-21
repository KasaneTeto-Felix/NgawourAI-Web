document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initDocumentation();
    initTooltips();
    initAnimations();
    initUtilities();
});

/**
 * Navigation Module
 * Handles mobile menu and active link states
 */
function initNavigation() {
    const toggle = document.getElementById('menuToggle');
    const links = document.getElementById('navLinks');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
        });
    });
}

/**
 * Documentation Module
 * Handles active state, breadcrumbs, and Table of Contents (TOC)
 */
function initDocumentation() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.doc-section');
    const breadcrumb = document.getElementById('breadcrumb-current');
    const tocLinksContainer = document.getElementById('tocLinks');

    if (navLinks.length === 0 || sections.length === 0) return;

    // 1. Dynamic Table of Contents Generation
    if (tocLinksContainer) {
        sections.forEach(section => {
            const h2 = section.querySelector('h2');
            if (h2) {
                const link = document.createElement('a');
                link.href = `#${section.id}`;
                link.className = 'toc-link';
                link.textContent = h2.textContent;
                tocLinksContainer.appendChild(link);
            }
        });
    }

    // 2. Active State & Breadcrumb tracking
    window.addEventListener('scroll', () => {
        let currentId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 120) {
                currentId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
                if (breadcrumb) {
                    breadcrumb.textContent = link.textContent;
                }
            }
        });
    });
}

/**
 * Tooltip Module
 * Handles interactive explanations for "touchable" elements
 */
function initTooltips() {
    const tooltip = document.getElementById('custom-tooltip');
    const touchables = document.querySelectorAll('.touchable');

    if (!tooltip || touchables.length === 0) return;

    const updatePos = (e) => {
        const padding = 12;
        let x = e.clientX + padding;
        let y = e.clientY + padding;

        // Boundaries check
        if (x + 200 > window.innerWidth) x = e.clientX - 210;
        if (y + 40 > window.innerHeight) y = e.clientY - 50;

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
    };

    touchables.forEach(el => {
        const text = el.getAttribute('data-tooltip');
        if (!text) return;

        // Desktop: Hover
        el.addEventListener('mouseenter', (e) => {
            tooltip.textContent = text;
            tooltip.classList.add('visible');
            updatePos(e);
        });

        el.addEventListener('mousemove', updatePos);
        el.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));

        // Mobile: Touch
        el.addEventListener('touchstart', (e) => {
            tooltip.textContent = text;
            tooltip.classList.add('visible');
            const touch = e.touches[0];
            updatePos({ clientX: touch.clientX, clientY: touch.clientY });
        }, { passive: true });

        el.addEventListener('touchend', () => tooltip.classList.remove('visible'));
    });
}

/**
 * Animation Module
 * Handles reveal-on-scroll effects
 */
function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Utilities Module
 * General helper functions (e.g. Copy to clipboard)
 */
function initUtilities() {
    // Copy to clipboard logic
    window.copyCode = function(btn) {
        const codeBlock = btn.closest('.code-block');
        const text = codeBlock.querySelector('.code-text').textContent;

        navigator.clipboard.writeText(text).then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.style.borderColor = 'var(--text-success)';
            btn.style.color = 'var(--text-success)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.borderColor = '';
                btn.style.color = '';
            }, 2000);
        });
    };
}
