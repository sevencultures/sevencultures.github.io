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
        

        const modal = document.getElementById('editModal');
        const modalBox = document.getElementById('modalBox');
        const mainNavbar = document.querySelector('nav'); // Pastikan tag navbar kamu adalah <nav>
    
        function openEditModal() {
            // 1. Tampilkan modal container
            modal.classList.remove('hidden');
            modal.classList.add('flex');
    
            // 2. Tambahkan animasi ke kotak modal
            modalBox.classList.add('modal-animate-in');
    
            // 3. Sembunyikan Navbar (Opsional, agar bersih)
            if(mainNavbar) mainNavbar.style.opacity = "0";
            if(mainNavbar) mainNavbar.style.pointerEvents = "none";
    
            // 4. Kunci Scroll Body
            document.body.style.overflow = 'hidden';
        }
    
        function closeEditModal() {
            // 1. Sembunyikan modal
            modal.classList.add('hidden');
            modal.classList.remove('flex');
    
            // 2. Hapus class animasi agar bisa diulang
            modalBox.classList.remove('modal-animate-in');
    
            // 3. Munculkan kembali Navbar
            if(mainNavbar) mainNavbar.style.opacity = "1";
            if(mainNavbar) mainNavbar.style.pointerEvents = "auto";
    
            // 4. Aktifkan Scroll Body
            document.body.style.overflow = 'auto';
        }
    
        // Menutup dengan ESC
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeEditModal();
        });


  
        
        // Mencegah klik kanan (opsional)
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        // Mencegah drag (opsional)
        document.addEventListener('dragstart', event => event.preventDefault());
   