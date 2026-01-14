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
   
        // FUNGSI UNTUK ACCORDION
        function toggleFaq(id) {
            const content = document.getElementById(`faq-content-${id}`);
            const icon = document.getElementById(`faq-icon-${id}`);
            
            // Tutup semua faq lainnya agar rapi
            const allContents = document.querySelectorAll('[id^="faq-content-"]');
            const allIcons = document.querySelectorAll('[id^="faq-icon-"]');
            
            allContents.forEach((c, idx) => {
                if (c.id !== `faq-content-${id}`) {
                    c.style.maxHeight = null;
                    allIcons[idx].classList.remove('rotate-180');
                }
            });
    
            // Toggle item yang diklik
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('rotate-180');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.add('rotate-180');
            }
        }
    
        // FUNGSI UNTUK FILTER PENCARIAN
        function filterFaq() {
            let input = document.getElementById('faqSearch').value.toLowerCase();
            let items = document.getElementsByClassName('faq-item');
    
            for (let i = 0; i < items.length; i++) {
                let searchContent = items[i].getAttribute('data-search');
                if (searchContent.includes(input)) {
                    items[i].style.display = "";
                } else {
                    items[i].style.display = "none";
                }
            }
        }
   
        function toggleAccordion(id) {
            const content = document.getElementById(`content-${id}`);
            const icon = document.getElementById(`icon-${id}`);
            
            // Tutup semua accordion lain (optional)
            const allContents = document.querySelectorAll('[id^="content-"]');
            const allIcons = document.querySelectorAll('[id^="icon-"]');
            
            allContents.forEach((c, idx) => {
                if (c.id !== `content-${id}`) {
                    c.style.maxHeight = null;
                    allIcons[idx].classList.remove('rotate-45');
                    allIcons[idx].classList.replace('bx-minus', 'bx-plus');
                }
            });
    
            // Toggle current
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('rotate-45');
                icon.classList.replace('bx-minus', 'bx-plus');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.add('rotate-45');
                icon.classList.replace('bx-plus', 'bx-minus');
            }
        }

   
        
        // Mencegah klik kanan (opsional)
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        // Mencegah drag (opsional)
        document.addEventListener('dragstart', event => event.preventDefault());
   