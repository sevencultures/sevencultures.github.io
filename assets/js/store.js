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
        
 
            // BANNER JS
        let activeIndex = 0;
        const allItems = document.querySelectorAll('.carousel-item');
        const dotsBox = document.getElementById('dotsContainer');
    
        // Buat Indikator Titik (Dots)
        allItems.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = `h-1 transition-all duration-500 rounded-full cursor-pointer ${i === 0 ? 'bg-white w-10' : 'bg-white/20 w-4'}`;
            dot.onclick = () => jumpToSlide(i);
            dotsBox.appendChild(dot);
        });
    
        const dotElems = dotsBox.querySelectorAll('div');
    
        function renderSlider() {
            allItems.forEach((item, i) => {
                item.classList.remove('active', 'next', 'prev', 'hidden-slide');
                
                if (i === activeIndex) {
                    item.classList.add('active');
                } else if (i === (activeIndex + 1) % allItems.length) {
                    item.classList.add('next');
                } else if (i === (activeIndex - 1 + allItems.length) % allItems.length) {
                    item.classList.add('prev');
                } else {
                    item.classList.add('hidden-slide');
                }
            });
    
            // Update Tampilan Dots
            dotElems.forEach((d, i) => {
                if (i === activeIndex) {
                    d.className = "h-1 bg-white w-10 rounded-full transition-all duration-500";
                } else {
                    d.className = "h-1 bg-white/20 w-4 rounded-full transition-all duration-500";
                }
            });
        }
    
        function changeSlide(dir) {
            activeIndex = (activeIndex + dir + allItems.length) % allItems.length;
            renderSlider();
            restartTimer();
        }
    
        function jumpToSlide(i) {
            activeIndex = i;
            renderSlider();
            restartTimer();
        }
    
        // Auto-slide setiap 3 detik
        let sliderTimer = setInterval(() => changeSlide(1), 3000);
        function restartTimer() {
            clearInterval(sliderTimer);
            sliderTimer = setInterval(() => changeSlide(1), 3000);
        }
    
        renderSlider();
        
        // Horizontal BTN
        // Handle Click Active
        const catItems = document.querySelectorAll('.category-item');
        catItems.forEach(item => {
            item.addEventListener('click', () => {
                catItems.forEach(i => i.classList.remove('active-cat'));
                item.classList.add('active-cat');
            });
        });
    
        // Mouse Drag Scroll (Desktop Support)
        const sliderCat = document.getElementById('categoryScroll');
        let isDown = false;
        let startX;
        let scrollLeft;
    
        sliderCat.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - sliderCat.offsetLeft;
            scrollLeft = sliderCat.scrollLeft;
        });
        sliderCat.addEventListener('mouseleave', () => isDown = false);
        sliderCat.addEventListener('mouseup', () => isDown = false);
        sliderCat.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderCat.offsetLeft;
            const walk = (x - startX) * 2;
            sliderCat.scrollLeft = scrollLeft - walk;
        });
    
        const filterModal = document.getElementById('filterModal');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalContent = document.getElementById('modalContent');
    
        function toggleFilterModal() {
            if (filterModal.classList.contains('hidden')) {
                // Open Modal
                filterModal.classList.remove('hidden');
                setTimeout(() => {
                    filterModal.classList.add('modal-visible');
                }, 10);
            } else {
                // Close Modal
                filterModal.classList.remove('modal-visible');
                setTimeout(() => {
                    filterModal.classList.add('hidden');
                }, 500); // Tunggu animasi selesai
            }
        }
    
        // Handle Active State untuk Button Harga
        const priceBtns = document.querySelectorAll('.price-btn');
        priceBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                priceBtns.forEach(b => b.classList.remove('active-price'));
                btn.classList.add('active-price');
            });
        });
    
        // Mouse Drag untuk Scroll Harga (Sama seperti kategori)
        const pScroll = document.getElementById('priceScroll');
        let isPDown = false;
        let pStartX;
        let pScrollLeft;
    
        pScroll.addEventListener('mousedown', (e) => {
            isPDown = true;
            pStartX = e.pageX - pScroll.offsetLeft;
            pScrollLeft = pScroll.scrollLeft;
        });
        pScroll.addEventListener('mouseleave', () => isPDown = false);
        pScroll.addEventListener('mouseup', () => isPDown = false);
        pScroll.addEventListener('mousemove', (e) => {
            if(!isPDown) return;
            e.preventDefault();
            const x = e.pageX - pScroll.offsetLeft;
            const walk = (x - pStartX) * 2;
            pScroll.scrollLeft = pScrollLeft - walk;
        });
        
      const accButtons = document.querySelectorAll('.acc-btn');
      const toast = document.getElementById('filterToast');
      const toastMsg = document.getElementById('toastMsg');
    
      accButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            // Hitung berapa tombol yang sedang aktif
              const activeCount = document.querySelectorAll('.active-acc-btn').length;
    
            // Cek jika tombol yang diklik adalah satu-satunya yang aktif
              if (btn.classList.contains('active-acc-btn') && activeCount === 1) {
                
                // 1. Animasi Geter pada tombol
                  btn.classList.add('animate-shake');
                  setTimeout(() => btn.classList.remove('animate-shake'), 400);
    
                // 2. Munculkan Notifikasi Ramah
                  showFriendlyToast("Maaf, pilih minimal satu kategori agar kami bisa mencarikan produk terbaik untukmu.");
                
              } else {
                // Jika bukan yang terakhir, perbolehkan toggle seperti biasa
                  btn.classList.toggle('active-acc-btn');
              }
          });
      });
    
      function showFriendlyToast(message) {
          toastMsg.innerText = message;
          toast.classList.add('toast-visible');
    
          // Hilang otomatis setelah 3 detik
          setTimeout(() => {
              toast.classList.remove('toast-visible');
          }, 3000);
      }
    
    // Fungsi Clear Filter (Sekarang menyisakan satu pilihan pertama secara default agar tidak kosong)
      function clearAccFilters() {
          accButtons.forEach((btn, index) => {
              if (index === 0) {
                  btn.classList.add('active-acc-btn'); // Sisakan satu yang aktif
              } else {
                  btn.classList.remove('active-acc-btn');
              }
          });
      }
    
        
        
        
        
        
        
        // Mencegah klik kanan (opsional)
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        // Mencegah drag (opsional)
        document.addEventListener('dragstart', event => event.preventDefault());
   