const SELECTORS = {
    menuButton: '[data-mobile-menu-btn]',
    mobileMenu: '[data-mobile-menu]',
    navLink: 'a[href^="#"]',
    reveal: '[data-reveal]',
    filterButton: '[data-portfolio-filter]',
    portfolioItem: '[data-portfolio-category]',
    backToTop: '[data-back-to-top]',
    form: '.contact-form',
    formStatus: '[data-form-status]'
};

const getHeaderOffset = () => document.querySelector('.site-nav')?.offsetHeight + 24 || 88;

function closeMobileMenu() {
    const button = document.querySelector(SELECTORS.menuButton);
    const menu = document.querySelector(SELECTORS.mobileMenu);
    if (!button || !menu) return;
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Buka menu navigasi');
}

function initMobileMenu() {
    const button = document.querySelector(SELECTORS.menuButton);
    const menu = document.querySelector(SELECTORS.mobileMenu);
    if (!button || !menu) return;

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = menu.hidden;
        menu.hidden = !isOpen;
        button.setAttribute('aria-expanded', String(isOpen));
        button.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    });

    menu.addEventListener('click', (event) => {
        if (event.target.matches('a')) closeMobileMenu();
    });

    document.addEventListener('click', (event) => {
        if (!menu.hidden && !menu.contains(event.target) && !button.contains(event.target)) closeMobileMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMobileMenu();
    });
}

function initSmoothScroll() {
    document.querySelectorAll(SELECTORS.navLink).forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
            window.scrollTo({ top, behavior: 'smooth' });
            history.pushState(null, '', targetId);
        });
    });
}

function initActiveNavLink() {
    const navLinks = Array.from(document.querySelectorAll(SELECTORS.navLink));
    const sections = Array.from(document.querySelectorAll('main [id]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                link.classList.toggle('active-nav', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

    sections.forEach((section) => observer.observe(section));
}

function initScrollReveal() {
    const elements = document.querySelectorAll(SELECTORS.reveal);
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.14 });

    elements.forEach((element) => observer.observe(element));
}

function initPortfolioFilter() {
    const buttons = document.querySelectorAll(SELECTORS.filterButton);
    const items = document.querySelectorAll(SELECTORS.portfolioItem);
    if (!buttons.length || !items.length) return;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.dataset.portfolioFilter;
            buttons.forEach((item) => item.classList.toggle('is-active', item === button));
            items.forEach((item) => {
                const shouldShow = category === 'all' || item.dataset.portfolioCategory === category;
                item.hidden = !shouldShow;
            });
        });
    });
}

function initBackToTop() {
    const button = document.querySelector(SELECTORS.backToTop);
    if (!button) return;
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initFormHandling() {
    const form = document.querySelector(SELECTORS.form);
    const status = document.querySelector(SELECTORS.formStatus);
    if (!form || !status) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const message = String(data.get('message') || '').trim();
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        status.className = 'form-status';
        if (!name || !email || !message) {
            status.textContent = 'Mohon lengkapi nama, email, dan pesan terlebih dahulu.';
            status.classList.add('error');
            return;
        }
        if (!emailIsValid) {
            status.textContent = 'Format email belum valid.';
            status.classList.add('error');
            return;
        }

        status.textContent = 'Terima kasih! Pesan demo berhasil divalidasi dan siap dikirim ke endpoint backend.';
        status.classList.add('success');
        form.reset();
    });
}

function initAll() {
    initMobileMenu();
    initSmoothScroll();
    initActiveNavLink();
    initScrollReveal();
    initPortfolioFilter();
    initBackToTop();
    initFormHandling();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}
