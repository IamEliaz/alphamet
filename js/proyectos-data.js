/* ============================================================
   ALPHAMET - Datos Centralizados de Proyectos
   ============================================================
   Cada proyecto puede tener un slider con imágenes y/o videos.
   ============================================================ */

const proyectosData = [
  {
    id: "planta-50-tpd-puno",
    titulo: "Instalación Planta 50 TPD",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Puno, Perú",
    descripcion: "Diseño e instalación completa de planta concentradora gravimétrica con capacidad de 50 toneladas por día. Incluyó sistema de chancado, molienda, concentración gravimétrica y mesa vibratoria para recuperación de oro.",
    media: [
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-1.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-1b.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-1c.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-1d.jpg" }
    ]
  },
  {
    id: "puesta-marcha-arequipa",
    titulo: "Puesta en Marcha Planta Gravimétrica",
    servicio: "Puesta en Marcha",
    estado: "Completado",
    ubicacion: "Arequipa, Perú",
    descripcion: "Supervisión técnica especializada para la puesta en marcha de planta gravimétrica de 30 TPD. Optimización de parámetros operativos y capacitación del personal local en operación y mantenimiento.",
    media: [
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-2.jpg" },
      { tipo: "video", src: "/assets/videos/proyectos/proyecto-2.mp4" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-2b.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-2c.jpg" }
    ]
  },
  {
    id: "soporte-la-libertad",
    titulo: "Soporte Técnico Continuo",
    servicio: "Soporte Técnico",
    estado: "Completado",
    ubicacion: "La Libertad, Perú",
    descripcion: "Contrato de mantenimiento preventivo y correctivo por 12 meses para planta de flotación de 40 TPD. Atención de emergencias 24/7 y suministro de repuestos originales.",
    media: [
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-3.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-3b.jpg" },
      { tipo: "video", src: "/assets/videos/proyectos/proyecto-3.mp4" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-3c.jpg" }
    ]
  },
  {
    id: "flotacion-cajamarca",
    titulo: "Instalación Planta de Flotación",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Cajamarca, Perú",
    descripcion: "Montaje e instalación de planta de flotación de 60 TPD para minerales sulfurados. Incluyó celdas de flotación, sistema de reactivos, bombeo de pulpas y tablero de control eléctrico.",
    media: [
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-4.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-4b.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-4c.jpg" },
      { tipo: "video", src: "/assets/videos/proyectos/proyecto-4.mp4" }
    ]
  },
  {
    id: "transporte-madre-dios",
    titulo: "Transporte y Logística Minera",
    servicio: "Transporte de Minerales",
    estado: "Completado",
    ubicacion: "Madre de Dios, Perú",
    descripcion: "Servicio logístico integral para traslado de concentrados de oro desde Madre de Dios hasta plantas de procesamiento en Arequipa. Gestión de permisos y seguros de carga.",
    media: [
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-5.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-5b.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-5c.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-5d.jpg" }
    ]
  },
  {
    id: "compra-concentrados-cusco",
    titulo: "Compra de Concentrados de Oro",
    servicio: "Compra de Minerales",
    estado: "Completado",
    ubicacion: "Cusco, Perú",
    descripcion: "Adquisición directa de concentrados de oro con leyes promedio de 40-60 g/ton. Proceso transparente con pago inmediato basado en cotización internacional y análisis metalúrgico certificado.",
    media: [
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-6.jpg" },
      { tipo: "video", src: "/assets/videos/proyectos/proyecto-6.mp4" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-6b.jpg" },
      { tipo: "imagen", src: "/assets/images/proyectos/proyecto-6c.jpg" }
    ]
  }
];

// ============================================================
// FUNCIÓN: Generar HTML de un slider multimedia (imágenes y/o videos)
// ============================================================
function generarProjectCard(proyecto) {
  var slidesHTML = '';
  var dotsHTML = '';
  var mediaItems = proyecto.media || [];

  mediaItems.forEach(function (item, index) {
    var activeClass = index === 0 ? ' active' : '';
    var mediaContent = '';

    if (item.tipo === 'video') {
      mediaContent = '<video class="project-slider__media" autoplay muted loop playsinline preload="auto"' +
        ' onerror="this.parentElement.style.display=\'none\'; ocultarSliderSiEsNecesario(this.parentElement.parentElement);">' +
        '<source src="' + item.src + '" type="video/mp4">' +
        'Tu navegador no soporta video.' +
        '</video>';
    } else {
      mediaContent = '<img class="project-slider__media" src="' + item.src + '" alt="' + proyecto.titulo + '" loading="lazy"' +
        ' onerror="this.parentElement.style.display=\'none\'; ocultarSliderSiEsNecesario(this.parentElement.parentElement);">';
    }

    slidesHTML += '<div class="project-slider__slide' + activeClass + '">' + mediaContent + '</div>';
    dotsHTML += '<span class="project-slider__dot' + activeClass + '" data-index="' + index + '"></span>';
  });

  var prevBtn = mediaItems.length > 1 ? '<button class="project-slider__btn project-slider__prev" aria-label="Anterior">&#10094;</button>' : '';
  var nextBtn = mediaItems.length > 1 ? '<button class="project-slider__btn project-slider__next" aria-label="Siguiente">&#10095;</button>' : '';
  var dotsNav = mediaItems.length > 1 ? '<div class="project-slider__dots">' + dotsHTML + '</div>' : '';

  return `
    <div class="project-card fade-in">
      <div class="project-slider" data-project-id="${proyecto.id}">
        ${prevBtn}
        ${nextBtn}
        <div class="project-slider__slides">
          ${slidesHTML}
        </div>
        ${dotsNav}
      </div>
      <div class="project-card__body">
        <span class="project-card__badge">${proyecto.servicio}</span>
        <span class="project-card__badge completed">${proyecto.estado}</span>
        <h3 class="project-card__title">${proyecto.titulo}</h3>
        <p class="project-card__location">📍 ${proyecto.ubicacion}</p>
        <p class="project-card__desc">${proyecto.descripcion}</p>
      </div>
    </div>
  `;
}

// ============================================================
// FUNCIÓN: Generar el grid completo de proyectos
// ============================================================
function generarProyectosHTML() {
  return proyectosData.map(function (proy) {
    return generarProjectCard(proy);
  }).join('');
}
