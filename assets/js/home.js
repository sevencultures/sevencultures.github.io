
        // 1. Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            if (loader) {
                setTimeout(() => {
                    loader.style.opacity = '0';
                    loader.style.visibility = 'hidden';
                }, 2000);
            }
        });
    
        // 2. Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.classList.add('bg-sc-black/98', 'backdrop-blur-xl', 'py-3', 'md:py-4', 'border-b', 'border-white/5');
                    navbar.classList.remove('py-4', 'md:py-6');
                } else {
                    navbar.classList.remove('bg-sc-black/98', 'backdrop-blur-xl', 'py-3', 'md:py-4', 'border-b', 'border-white/5');
                    navbar.classList.add('py-4', 'md:py-6');
                }
            }
        });
    
        // 3. Mobile Menu
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
    
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('translate-x-full');
                mobileMenu.classList.toggle('translate-x-0');
            });
        }
    
        function closeMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
            }
        }
    
        // 5. Scroll Reveal Animation
        const reveals = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const revealPoint = 150;
                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    
        // 6. Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    
        // 7. Product Cards Horizontal Scroll (Mouse Wheel)
        const productCardsWrapper = document.getElementById('productCardsWrapper');
        if (productCardsWrapper) {
            productCardsWrapper.addEventListener('wheel', (e) => {
                if (window.innerWidth > 768) { 
                    e.preventDefault();
                    productCardsWrapper.scrollLeft += e.deltaY;
                }
            });
        }
    
        // 8. Parallax
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('#home');
            if (hero) {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
            }
        });
        
        // Mencegah klik kanan (opsional)
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        // Mencegah drag (opsional)
        document.addEventListener('dragstart', event => event.preventDefault());
    
