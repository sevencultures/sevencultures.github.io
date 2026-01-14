/**
 * Seven Cultures - Demo Version Injector
 * Menampilkan penanda versi demo secara otomatis di seluruh halaman
 */
(function() {
    const demoBadgeHTML = `
        <div id="demo-badge" class="fixed top-24 right-4 z-[10002] pointer-events-none select-none transition-all duration-500">
            <div class="flex items-center gap-3 px-4 py-2 bg-sc-black/60 backdrop-blur-lg border border-white/10 rounded-sm shadow-2xl">
                <div class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-sc-gray"></span>
                </div>
                
                <div class="flex flex-col">
                    <span class="text-[8px] tracking-[0.3em] text-white uppercase font-bold font-space">Versi Demo</span>
                    <span class="text-[7px] tracking-[0.1em] text-sc-gray uppercase font-medium">Pratinjau Website</span>
                </div>
            </div>
        </div>
    `;

    // Inject ke dalam body setelah DOM siap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.insertAdjacentHTML('beforeend', demoBadgeHTML);
        });
    } else {
        document.body.insertAdjacentHTML('beforeend', demoBadgeHTML);
    }
})();
