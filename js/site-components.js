(function () {
    'use strict';

    var navigation = [
        { href: '/', label: 'Work' },
        { href: '/commercialWork/', label: 'Commercial Work' },
        { href: '/referenceSheets/', label: 'Reference Sheets' },
        { href: '/commissioninfo/', label: 'Commission Info' },
        { href: '/bokumonoanniversarycollab/', label: 'Bokumono 30th Anniversary Collab 2026' },
        { href: '/contact/', label: 'Contact' }
    ];

    function normalizedPath() {
        var path = window.location.pathname || '/';
        path = path.replace(/\/index\.html$/, '/');
        return path || '/';
    }

    function isActive(href) {
        var path = normalizedPath();
        if (href === '/') {
            return path === '/' || path.indexOf('/work/') === 0;
        }
        return path.indexOf(href) === 0;
    }

    function navigationMarkup(className) {
        return navigation.map(function (item) {
            var active = isActive(item.href);
            return '<li><a class="' + className + (active ? ' is-active' : '') + '" href="' + item.href + '"' +
                (active ? ' aria-current="page"' : '') + '>' + item.label + '</a></li>';
        }).join('');
    }

    function renderHeader() {
        return '' +
            '<header class="site-header">' +
                '<div class="container site-header__inner">' +
                    '<a class="site-brand" href="/" aria-label="sena.ink home">' +
                        '<img src="/images/logo.png" alt="sena.ink" />' +
                    '</a>' +
                    '<button class="site-menu-button" type="button" aria-expanded="false" aria-controls="site-navigation">' +
                        '<span class="site-menu-button__icon" aria-hidden="true"><span></span><span></span><span></span></span>' +
                        '<span class="sr-only">Toggle navigation</span>' +
                    '</button>' +
                    '<nav class="site-nav" id="site-navigation" aria-label="Primary navigation">' +
                        '<ul class="site-nav__list">' + navigationMarkup('site-nav__link') + '</ul>' +
                    '</nav>' +
                '</div>' +
            '</header>';
    }

    function renderFooter() {
        return '' +
            '<footer class="site-footer">' +
                '<div class="container site-footer__inner">' +
                    '<a class="site-footer__brand" href="/" aria-label="sena.ink home"><img src="/images/logo.png" alt="" /></a>' +
                    '<nav class="site-footer__nav" aria-label="Footer navigation">' +
                        '<ul>' + navigationMarkup('site-footer__link') +
                            '<li><a class="site-footer__link" href="/shop/">Shop</a></li>' +
                            '<li><a class="site-footer__link" href="/privacy/">Privacy</a></li>' +
                        '</ul>' +
                    '</nav>' +
                    '<ul class="site-socials" aria-label="Social links">' +
                        '<li><a href="https://www.facebook.com/CrimSena" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a></li>' +
                        '<li><a href="https://www.twitch.tv/sena_ink/" target="_blank" rel="noopener noreferrer" aria-label="Twitch"><i class="fa-brands fa-twitch" aria-hidden="true"></i></a></li>' +
                        '<li><a href="https://www.youtube.com/channel/UCg1skrM9TEjmvyW_LvCyEdQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a></li>' +
                    '</ul>' +
                    '<p class="site-footer__meta">&copy; 2026 sena. All rights reserved. <span aria-hidden="true">&middot;</span> ' +
                        '<a href="https://www.designstub.com/product/avana-minimal-portfolio-template-build-with-bootstrap/" target="_blank" rel="noopener noreferrer">Original template credit</a>' +
                    '</p>' +
                '</div>' +
            '</footer>';
    }

    function setupNavigation() {
        var button = document.querySelector('.site-menu-button');
        var nav = document.querySelector('.site-nav');
        if (!button || !nav) return;

        function closeMenu() {
            button.setAttribute('aria-expanded', 'false');
            nav.classList.remove('is-open');
            document.body.classList.remove('nav-open');
        }

        button.addEventListener('click', function () {
            var willOpen = button.getAttribute('aria-expanded') !== 'true';
            button.setAttribute('aria-expanded', String(willOpen));
            nav.classList.toggle('is-open', willOpen);
            document.body.classList.toggle('nav-open', willOpen);
        });

        nav.addEventListener('click', function (event) {
            if (event.target.closest('a')) closeMenu();
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 991) closeMenu();
        });
    }

    document.querySelectorAll('[data-site-header]').forEach(function (placeholder) {
        placeholder.outerHTML = renderHeader();
    });

    document.querySelectorAll('[data-site-footer]').forEach(function (placeholder) {
        placeholder.outerHTML = renderFooter();
    });

    setupNavigation();
}());
