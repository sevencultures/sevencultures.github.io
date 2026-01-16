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
        

    const configSheet = document.getElementById('configSheet');
    const sheetContent = document.getElementById('sheetContent');

    function openConfigSheet() {
        configSheet.classList.remove('hidden');
        configSheet.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Kunci scroll
    }

    function closeConfigSheet() {
        // Tambahkan animasi balik jika perlu, atau langsung tutup
        configSheet.classList.add('hidden');
        configSheet.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Aktifkan kembali scroll
    }
    
    
    const swiper = new Swiper('.productSwiper', {
        slidesPerView: 1, // Default Mobile: 1:1
        spaceBetween: 4, // Jarak antar foto
        loop: true,
        grabCursor: true,
        
        // Konfigurasi Desktop (2 Foto Berdampingan)
        breakpoints: {
            1024: {
                slidesPerView: 2, // Desktop: 2:1 Ratio visual
                spaceBetween: 12
            }
        },

        // Navigation
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Dots (Pagination)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    
    const notifyBar = document.getElementById('top-notification');

    function handlePayment(element, isVerified) {
        if (!isVerified) {
            // Jika BELUM verifikasi: Munculkan notifikasi dari atas
            notifyBar.classList.remove('-translate-y-full');
            
            // Otomatis tutup setelah 4 detik
            setTimeout(() => {
                hideNotify();
            }, 4000);
        } else {
            // Jika SUDAH verifikasi: Tandai tombol yang dipilih
            const allBtns = document.querySelectorAll('.payment-btn');
            allBtns.forEach(btn => btn.classList.remove('active-payment'));
            
            element.classList.add('active-payment');
            
            // Opsi: Berikan feedback suara atau haptic kecil jika di mobile
            console.log("Metode dipilih: " + element.innerText);
        }
    }

    function hideNotify() {
        notifyBar.classList.add('-translate-y-full');
    }


    function validateVoucher() {
        const input = document.getElementById('voucherInput').value.trim().toLowerCase();
        const responseArea = document.getElementById('voucherResponse');
        const responseBox = document.getElementById('responseBox');
        const responseIcon = document.getElementById('responseIcon');
        const responseStatus = document.getElementById('responseStatus');
        const responseMsg = document.getElementById('responseMsg');

        // Reset state
        responseArea.classList.remove('hidden', 'opacity-100');
        responseArea.classList.add('block', 'opacity-0');

        setTimeout(() => {
            if (input === "sevencultures") {
                // BERHASIL
                responseBox.className = "flex items-center gap-4 p-4 border border-green-500/30 bg-green-500/5 italic text-green-500";
                responseIcon.className = "bx bx-check-circle text-xl";
                responseStatus.innerText = "Access_Granted";
                responseMsg.innerText = "Voucher berhasil digunakan. Potongan nilai telah diaplikasikan.";
            } else if (input === "") {
                // KOSONG
                responseBox.className = "flex items-center gap-4 p-4 border border-white/10 bg-white/5 italic text-white";
                responseIcon.className = "bx bx-info-circle text-xl";
                responseStatus.innerText = "Empty_Input";
                responseMsg.innerText = "Harap masukkan kode valid sebelum melakukan pengecekan.";
            } else {
                // GAGAL
                responseBox.className = "flex items-center gap-4 p-4 border border-red-500/30 bg-red-500/5 italic text-red-500";
                responseIcon.className = "bx bx-error-alt text-xl";
                responseStatus.innerText = "Access_Denied";
                responseMsg.innerText = "Voucher gagal atau tidak terdaftar dalam database sistem.";
            }
            
            // Show with animation
            responseArea.classList.remove('opacity-0');
            responseArea.classList.add('opacity-100');
        }, 300); // Delay singkat untuk kesan sinkronisasi data
    }


    function selectAddress(element) {
        // Hapus class selected dan reset style dari semua kartu
        const cards = document.querySelectorAll('.address-card');
        cards.forEach(card => {
            card.classList.remove('selected', 'border-white', 'bg-white/[0.05]');
            card.classList.add('border-white/5', 'bg-white/[0.01]');
            
            // Reset bullet indicator
            const bullet = card.querySelector('.w-full.h-full');
            bullet.classList.remove('bg-white');
            bullet.classList.add('bg-transparent');

            // Reset badge
            const badge = card.querySelector('span:first-child');
            if (badge.classList.contains('bg-white')) {
                badge.classList.remove('bg-white', 'text-black');
                badge.classList.add('border', 'border-white/10', 'text-sc-gray');
            }
        });

        // Tambahkan style ke kartu yang diklik
        element.classList.add('selected', 'border-white', 'bg-white/[0.05]');
        element.classList.remove('border-white/5', 'bg-white/[0.01]');

        // Update bullet indicator
        const bullet = element.querySelector('.w-full.h-full');
        bullet.classList.remove('bg-transparent');
        bullet.classList.add('bg-white');

        // Update badge
        const badge = element.querySelector('span:first-child');
        badge.classList.remove('border', 'border-white/10', 'text-sc-gray');
        badge.classList.add('bg-white', 'text-black');
    }

  
    const receiptModal = document.getElementById('receiptModal');
    const receiptContent = document.getElementById('receiptContent');
    const consentCheck = document.getElementById('consent-check');

    function openReceiptModal() {
        receiptModal.classList.remove('hidden');
        receiptModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    function closeReceiptModal() {
        receiptModal.classList.add('hidden');
        receiptModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }

    function confirmArchive() {
        const btn = event.currentTarget;

        // 1. Validasi Checkbox Consent
        if (!consentCheck.checked) {
            // Memberi efek getar sedikit jika tidak dicentang (opsional)
            consentCheck.parentElement.classList.add('animate-pulse');
            alert("Harap setujui syarat dan ketentuan preservasi arsip.");
            setTimeout(() => consentCheck.parentElement.classList.remove('animate-pulse'), 1000);
            return;
        }

        // 2. Memulai Proses Sinkronisasi (Loading State)
        btn.disabled = true; // Mencegah klik ganda
        btn.style.pointerEvents = 'none';
        
        // Tampilan Loading Teknis
        btn.innerHTML = `
            <div class="flex items-center gap-3">
                <i class='bx bx-loader-alt animate-spin text-xl'></i>
                <span class="tracking-[0.4em]">SYNCHRONIZING_DATA...</span>
            </div>
        `;
        btn.classList.add('opacity-80');

        // 3. Simulasi Delay Proses (2.5 Detik)
        setTimeout(() => {
            // Perubahan ke Status Sukses/Granted
            btn.innerHTML = `
                <div class="flex items-center gap-3">
                    <i class='bx bx-check-circle text-xl'></i>
                    <span class="tracking-[0.4em]">ACCESS_GRANTED</span>
                </div>
            `;
            
            // Ubah warna tombol menjadi hijau untuk feedback visual sukses
            btn.classList.remove('bg-white', 'text-black', 'opacity-80');
            btn.classList.add('bg-green-600', 'text-white');

            // 4. Redirect ke Halaman Checkout (Pembayaran) setelah jeda singkat
            setTimeout(() => {
                // Ganti "checkout.html" dengan nama file halaman pembayaranmu
                window.location.href = "checkout-product.html"; 
            }, 1000); // Memberi waktu user melihat status "ACCESS GRANTED"

        }, 2500);
    }
        
        // Mencegah klik kanan (opsional)
        document.addEventListener('contextmenu', event => event.preventDefault());
        
        // Mencegah drag (opsional)
        document.addEventListener('dragstart', event => event.preventDefault());
   