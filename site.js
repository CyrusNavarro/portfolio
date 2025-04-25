document.addEventListener("DOMContentLoaded", function () {
    // Typed.js initialization
    new Typed('.multiple-text', {
      strings: ['Student', 'Aspiring Developer', 'Future Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  
    // Vanta.js initialization
    VANTA.RINGS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0,
      color: 0x563baf
    });
  });