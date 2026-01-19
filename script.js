// DOM (Document Object Model) yüklendiğinde kodu çalıştır
document.addEventListener('DOMContentLoaded', function() {
    
    // Gerekli HTML elementlerini seç
    const burgerMenuButton = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    // Burger menü butonuna tıklanma olayını dinle
    burgerMenuButton.addEventListener('click', function() {
        // 'mobile-nav' elementinin 'active' sınıfını aç/kapat
        // Bu sınıf, CSS'te menüyü göstermek/gizlemek için kullanılır
        mobileNav.classList.toggle('active');

        // Bonus: Buton ikonunu değiştir (bars <-> times)
        const icon = burgerMenuButton.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Bonus: Mobil menüdeki bir linke tıklanınca menüyü kapat
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            // İkonu tekrar 'bars' yap
            const icon = burgerMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

});