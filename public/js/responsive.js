// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navigation-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            navMenu.classList.remove('active');
        }
    });
});

// DOMContentLoaded untuk semua animasi
document.addEventListener('DOMContentLoaded', () => {
    // Elemen about
    const aboutImg = document.querySelector('.about-me-img-container');
    const aboutInfo = document.querySelector('.info-saya');
    const aboutTitle = document.querySelector('.about-me-title');

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Tambahan animasi spesifik
                if (entry.target === aboutImg) {
                    aboutImg.classList.add('slide-in-left');
                } else if (entry.target === aboutInfo) {
                    aboutInfo.classList.add('slide-in-right');
                } else if (entry.target === aboutTitle) {
                    aboutTitle.classList.add('fade-in-title');
                }
            }
        });
    }, { threshold: 0.3 });

    [aboutImg, aboutInfo, aboutTitle].forEach(el => {
        if (el) aboutObserver.observe(el);
    });

    // Animasi slide-up dan slide-down
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });

    const skillsCards = document.querySelectorAll('.skills-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

skillsCards.forEach(card => {
    observer.observe(card);
});

});

