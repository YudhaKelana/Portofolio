// NAMA FILE: script.js

// =========================================================================
// BAGIAN 1: LOGIKA UNTUK NAVIGASI AKTIF & HEADER STICKY
// =========================================================================
window.addEventListener('scroll', () => {
    // Ambil semua elemen section dan link navigasi
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('.header');

    // Tambah kelas 'sticky' ke header saat scroll lebih dari 100px dari atas
    // Ini akan mengubah background header sesuai yang diatur di CSS
    header.classList.toggle('sticky', window.scrollY > 100);

    // Iterasi melalui setiap section untuk menentukan link mana yang harus aktif
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150; // Jarak dari atas sebelum link aktif
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        // Jika posisi scroll berada di dalam area section saat ini
        if (top >= offset && top < offset + height) {
            // Hapus kelas 'active' dari semua link navigasi
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Tambah kelas 'active' ke link yang sesuai dengan section yang terlihat
            // Ini akan memberi warna biru pada link navigasi yang aktif
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
});


// =========================================================================
// BAGIAN 2: LOGIKA UNTUK TOGGLE MENU MOBILE (NAVBAR HAMBURGER)
// =========================================================================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    // Saat ikon menu di-klik, toggle kelas 'bx-x' untuk mengubah ikon menjadi 'X'
    menuIcon.classList.toggle('bx-x');
    // Dan toggle kelas 'active' pada navbar untuk menampilkannya
    navbar.classList.toggle('active');
});

// Tambahan: tutup menu mobile saat salah satu link navigasi di-klik
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x'); // Kembalikan ikon hamburger
        navbar.classList.remove('active'); // Sembunyikan navbar
    });
});


// =========================================================================
// BAGIAN 3: LOGIKA UNTUK ANIMASI SCROLL REVEAL
// =========================================================================
// Inisialisasi library ScrollReveal dengan pengaturan default
ScrollReveal({
    distance: '80px', // Jarak elemen akan bergerak saat muncul
    duration: 2000,   // Durasi animasi dalam milidetik
    delay: 200,       // Penundaan sebelum animasi dimulai
    // reset: true    // Hapus komentar ini jika ingin animasi berulang setiap kali scroll
});

// Atur animasi untuk elemen yang berbeda berdasarkan asalnya
ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.hero-img, .keahlian-container, .proyek-container, .kontak form', { origin: 'bottom' });
ScrollReveal().reveal('.hero-content h1, .tentang-img', { origin: 'left' });
ScrollReveal().reveal('.hero-content p, .tentang-content', { origin: 'right' });