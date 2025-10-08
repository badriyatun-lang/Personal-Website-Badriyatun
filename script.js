 
   // Kode untuk Modal Hobi
    var modal = document.getElementById("hobiModal");
    var btn = document.getElementById("galeri-btn"); // ID tombol "Hobi🤍"
    var span = document.getElementsByClassName("close-btn")[0]; // Ambil tombol 'X'

    // Saat user klik tombol, buka modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // Saat user klik (x), tutup modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Saat user klik di luar modal, tutup modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    // =====================
// 💡 LOGIKA KALKULATOR BBI
// =====================
// =============================================
// FUNGSI UNTUK MENAMPILKAN KALKULATOR (Proyek 2)
// =============================================
function tampilkanKalkulator(event) {
    // Mencegah link melakukan aksi default (scroll/reload)
    event.preventDefault(); 
    
    // Ambil elemen kalkulator
    const kalkulatorSection = document.getElementById('kalkulator');
    
    // 1. Tampilkan Kalkulator (mengubah dari display: none menjadi display: flex)
    kalkulatorSection.style.display = 'flex'; 

    // 2. Scroll ke bagian Kalkulator yang baru muncul
    kalkulatorSection.scrollIntoView({ behavior: 'smooth' });
}


// =============================================
// LOGIKA PERHITUNGAN KALKULATOR BBI
// =============================================
function hitungBBI() {
    // 1. Ambil nilai input dari HTML
    const tinggi = document.getElementById('tinggi').value;
    const gender = document.getElementById('gender').value;
    const hasilBBIElement = document.getElementById('bbiValue');

    // 2. Validasi Input
    if (tinggi === "" || gender === "" || tinggi <= 0) {
        hasilBBIElement.textContent = "Masukkan tinggi & jenis kelamin yang valid!";
        hasilBBIElement.style.color = "red";
        return; 
    }

    // 3. Hitung BBI menggunakan Rumus Broca
    let bbi;
    // Konversi tinggi ke tipe data Number
    const tinggiNumerik = Number(tinggi); 
    const tinggiRelatif = tinggiNumerik - 100;

    if (gender === 'pria') {
        // Pria: (Tinggi - 100) - ( (Tinggi - 100) * 0.10 )
        bbi = tinggiRelatif - (tinggiRelatif * 0.10);
    } else if (gender === 'wanita') {
        // Wanita: (Tinggi - 100) - ( (Tinggi - 100) * 0.15 )
        bbi = tinggiRelatif - (tinggiRelatif * 0.15);
    } else {
        hasilBBIElement.textContent = "Pilih jenis kelamin!";
        hasilBBIElement.style.color = "red";
        return; 
    }

    // 4. Tampilkan Hasil (dibulatkan ke 2 desimal)
    const hasilDibulatkan = bbi.toFixed(2);
    hasilBBIElement.textContent = `${hasilDibulatkan} kg`;
    hasilBBIElement.style.color = "#00b4d8"; 
}
// =============================================
// FUNGSI UNTUK MENUTUP KALKULATOR
// =============================================
function tutupKalkulator() {
    // Ambil elemen kalkulator
    const kalkulatorSection = document.getElementById('kalkulator');
    
    // Sembunyikan Kalkulator
    kalkulatorSection.style.display = 'none'; 
}

// =============================================
// FUNGSI UNTUK MENAMPILKAN KALKULATOR (Sudah Ada)
// =============================================
function tampilkanKalkulator(event) {
    event.preventDefault(); 
    const kalkulatorSection = document.getElementById('kalkulator');
    kalkulatorSection.style.display = 'flex'; 
    kalkulatorSection.scrollIntoView({ behavior: 'smooth' });
}

// ... (sisa fungsi hitungBBI() di bawah ini) ...
// ========================================================
// 🚀 LOGIKA INTERSECTION OBSERVER (Animasi Scroll)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Pilih semua elemen yang ingin dianimasikan saat scroll
    const scrollElements = document.querySelectorAll('.scroll-hidden');

    // 2. Opsi untuk Observer (menentukan kapan dianggap "terlihat")
    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.2 // Elemen dianggap terlihat jika 20% sudah muncul
    };

    // 3. Callback saat elemen berinteraksi dengan viewport
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Elemen masuk viewport, tambahkan class is-visible
                entry.target.classList.add('is-visible');

                // Jika elemen memiliki custom delay, terapkan style
                const delay = entry.target.style.getPropertyValue('--delay');
                if (delay) {
                    entry.target.style.transitionDelay = delay;
                }

                // Hentikan pengamatan setelah muncul
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Mulai amati setiap elemen
    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });
});
// ========================================================
// ✨ Efek muncul lembut saat klik navbar (smooth reveal)
// ========================================================
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Scroll halus ke bagian tujuan
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Reset animasi: sembunyikan dulu
      targetSection.classList.remove('is-visible');
      targetSection.classList.add('scroll-hidden');

      // Tambahkan efek muncul setelah sedikit delay
      setTimeout(() => {
        targetSection.classList.add('is-visible');
      }, 400);
    }
  });
});
