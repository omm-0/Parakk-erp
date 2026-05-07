/* =========================================================
   Study Buddie — main.js
   Navbar, scroll reveal, mobile menu, contact form
   ========================================================= */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initNavbar();
        initMobileMenu();
        initScrollReveal();
        initContactForm();
        initYear();
    }

    /* ---------- Navbar shadow on scroll ---------- */
    function initNavbar() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;
        var threshold = 50;

        function onScroll() {
            if (window.scrollY > threshold) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }
        }
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---------- Mobile menu ---------- */
    function initMobileMenu() {
        var toggle = document.getElementById('navToggle');
        var menu = document.getElementById('navMenu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function () {
            var open = menu.classList.toggle('is-open');
            toggle.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.style.overflow = open ? 'hidden' : '';
        });

        // Close when a link is tapped
        menu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                menu.classList.remove('is-open');
                toggle.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---------- Scroll reveal ---------- */
    function initScrollReveal() {
        var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        if (!('IntersectionObserver' in window) || !revealEls.length) {
            revealEls.forEach(function (el) { el.classList.add('visible'); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                // Honor explicit data-reveal-delay (in ms) when set; otherwise stagger inside groups
                var explicit = el.getAttribute('data-reveal-delay');
                if (explicit !== null) {
                    el.style.transitionDelay = explicit + 'ms';
                } else if (el.parentElement && el.parentElement.hasAttribute('data-stagger')) {
                    var siblings = Array.prototype.filter.call(
                        el.parentElement.children,
                        function (c) {
                            return c.classList.contains('reveal') ||
                                   c.classList.contains('reveal-left') ||
                                   c.classList.contains('reveal-right') ||
                                   c.classList.contains('reveal-scale');
                        }
                    );
                    var i = siblings.indexOf(el);
                    if (i >= 0) el.style.transitionDelay = (i * 100) + 'ms';
                }
                el.classList.add('visible');
                observer.unobserve(el);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        revealEls.forEach(function (el) { observer.observe(el); });
    }

    /* ---------- Contact form ---------- */
    function initContactForm() {
        var form = document.getElementById('contactForm');
        if (!form) return;
        var status = form.querySelector('.form-status');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = form.querySelector('[name="name"]');
            var email = form.querySelector('[name="email"]');
            var phone = form.querySelector('[name="phone"]');
            var message = form.querySelector('[name="message"]');

            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                if (status) {
                    status.style.color = '#E53E3E';
                    status.textContent = 'Please fill in all required fields.';
                }
                return;
            }

            var subject = encodeURIComponent('New inquiry from ' + name.value.trim());
            var body = encodeURIComponent(
                'Name / School: ' + name.value.trim() + '\n' +
                'Email: ' + email.value.trim() + '\n' +
                'Phone: ' + (phone ? phone.value.trim() : '') + '\n\n' +
                'Message:\n' + message.value.trim()
            );

            if (status) {
                status.style.color = '#2ECC71';
                status.textContent = 'Thanks! Opening your email client to send the message...';
            }
            window.location.href = 'mailto:parakkerp@gmail.com?subject=' + subject + '&body=' + body;
        });
    }

    /* ---------- Footer year ---------- */
    function initYear() {
        var el = document.getElementById('year');
        if (el) el.textContent = new Date().getFullYear();
    }
})();
