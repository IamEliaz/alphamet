/* ============================================================
   ALPHAMET - JavaScript Principal
   Empresa de equipos y servicios para minería artesanal,
   pequeña y mediana escala en Perú.
   ============================================================ */

'use strict';

// ============================================================
// ESPERAR A QUE EL DOM ESTÉ LISTO
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

  // ============================================================
  // HEADER - SCROLL EFFECT
  // ============================================================
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    // Agregar/quitar clase scrolled
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ============================================================
  // MENÚ HAMBURGUESA - MÓVIL
  // ============================================================
  const toggleBtn = document.querySelector('.header__toggle');
  const navMenu = document.querySelector('.header__nav');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      toggleBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        toggleBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target) && navMenu.classList.contains('open')) {
        toggleBtn.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }

  // ============================================================
  // NAVBAR ACTIVA - RESALTAR PÁGINA ACTUAL
  // ============================================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinksAll = document.querySelectorAll('.header__nav a');

  navLinksAll.forEach(function (link) {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ============================================================
  // ANIMACIONES SCROLL - FADE IN
  // ============================================================
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  // Crear Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Dejar de observar una vez visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // ============================================================
  // CONTADOR DE ESTADÍSTICAS - ANIMACIÓN
  // ============================================================
  const statsNumbers = document.querySelectorAll('.stats__number');
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    statsNumbers.forEach(function (stat) {
      const targetText = stat.textContent;
      // Extraer número del texto (ej: "+10 años" -> 10)
      const match = targetText.match(/(\d+)/);
      if (!match) return;

      const target = parseInt(match[1]);
      const suffix = targetText.replace(match[0], '');
      const duration = 2000;
      const step = Math.max(1, Math.floor(target / 60));
      let current = 0;

      const increment = function () {
        current += step;
        if (current >= target) {
          current = target;
          stat.textContent = current + suffix;
          return;
        }
        stat.textContent = current + suffix;
        requestAnimationFrame(function () {
          setTimeout(increment, 30);
        });
      };

      increment();
    });
  }

  // Observar sección de estadísticas para animar
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateStats();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  // ============================================================
  // SMOOTH SCROLL PARA ANCLAS
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================================
  // FORMULARIO DE CONTACTO
  // ============================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validar campos requeridos
      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');
      const mensaje = document.getElementById('mensaje');
      let isValid = true;

      // Resetear estilos de error
      document.querySelectorAll('.form__input, .form__select, .form__textarea').forEach(function (el) {
        el.style.borderColor = '';
      });

      // Validar nombre
      if (!nombre.value.trim()) {
        nombre.style.borderColor = '#ff4444';
        isValid = false;
      }

      // Validar email
      if (!email.value.trim() || !isValidEmail(email.value)) {
        email.style.borderColor = '#ff4444';
        isValid = false;
      }

      // Validar mensaje
      if (!mensaje.value.trim()) {
        mensaje.style.borderColor = '#ff4444';
        isValid = false;
      }

      if (!isValid) {
        // Mostrar alerta de error
        showFormAlert('Por favor, completa todos los campos requeridos.', 'error');
        return;
      }

      // Construir mailto
      const asunto = document.getElementById('asunto').value;
      const telefono = document.getElementById('telefono').value;
      const empresa = document.getElementById('empresa').value;

      const body = `Nombre: ${nombre.value}%0AEmail: ${email.value}%0ATeléfono: ${telefono}%0AEmpresa: ${empresa}%0AAsunto: ${asunto}%0A%0AMensaje:%0A${mensaje.value}`;

      const mailtoLink = `mailto:elias@udhconecta.com?subject=${encodeURIComponent('Contacto - ALPHAMET: ' + asunto)}&body=${body}`;

      // Abrir cliente de correo
      window.location.href = mailtoLink;

      // Mostrar mensaje de éxito
      showFormAlert('¡Mensaje enviado! Serás redirigido a tu cliente de correo.', 'success');
      contactForm.reset();
    });
  }

  // ============================================================
  // FUNCIÓN: VALIDAR EMAIL
  // ============================================================
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ============================================================
  // FUNCIÓN: MOSTRAR ALERTA EN FORMULARIO
  // ============================================================
  function showFormAlert(message, type) {
    // Eliminar alerta existente
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) {
      existingAlert.remove();
    }

    const alert = document.createElement('div');
    alert.className = 'form-alert';
    alert.style.cssText = `
      padding: 16px 20px;
      border-radius: 20px;
      margin-bottom: 20px;
      font-size: 0.95rem;
      font-weight: 500;
      text-align: center;
      animation: fadeIn 0.3s ease;
    `;

    if (type === 'error') {
      alert.style.background = 'rgba(255, 68, 68, 0.15)';
      alert.style.color = '#ff4444';
      alert.style.border = '1px solid rgba(255, 68, 68, 0.3)';
    } else {
      alert.style.background = 'rgba(37, 211, 102, 0.15)';
      alert.style.color = '#25D366';
      alert.style.border = '1px solid rgba(37, 211, 102, 0.3)';
    }

    alert.textContent = message;

    const form = document.querySelector('.form');
    if (form) {
      form.insertBefore(alert, form.firstChild);

      // Auto-eliminar después de 5 segundos
      setTimeout(function () {
        alert.style.opacity = '0';
        alert.style.transition = 'opacity 0.3s ease';
        setTimeout(function () {
          alert.remove();
        }, 300);
      }, 5000);
    }
  }

  // ============================================================
  // BOTONES WHATSAPP - ABRIR ENLACE
  // ============================================================
  document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-nav, .whatsapp-float').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // Solo si no tiene href propio
      if (!this.getAttribute('href')) {
        e.preventDefault();
        window.open('https://wa.me/51929175492', '_blank');
      }
    });
  });

  // ============================================================
  // PRODUCT CARDS - BOTÓN CONSULTAR WHATSAPP (con delegación)
  // ============================================================
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.product-card__btn');
    if (btn) {
      e.preventDefault();
      var productName = btn.getAttribute('data-product') || 'Equipo';
      var message = 'Hola, me interesa el equipo: ' + productName;
      var url = 'https://wa.me/51929175492?text=' + encodeURIComponent(message);
      window.open(url, '_blank');
    }
  });

  // ============================================================
  // AÑO ACTUAL EN FOOTER
  // ============================================================
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ============================================================
  // KEYFRAME ANIMATION PARA FORM ALERT
  // ============================================================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

}); // Fin DOMContentLoaded
