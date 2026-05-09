/* ============================================================
   ALPHAMET - Datos Centralizados de Proyectos
   ============================================================
   Cada proyecto puede tener un slider con imágenes y/o videos.
   ============================================================ */

const proyectosData = [
  {
    id: "pespiral-01",
    titulo: "Planta con espirales concentradoras + Mesas Gravimétricas",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Cuzco, Perú",
    descripcion: "Diseño e instalación de planta concentradora gravimétrica con espirales concentradoras y mesas gravimétricas para recuperación de oro y minerales pesados.",
    media: [
      { tipo: "video", src: "/assets/images/proyectos/pespiral01.mp4" },
    ]
  },
  {
    id: "pespiral-02",
    titulo: "Planta con espiral concentradora",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Cuzco, Perú",
    descripcion: "Instalación y puesta en marcha de espiral concentradora para recuperación de minerales pesados mediante gravimetría con agua.",
    media: [
      { tipo: "video", src: "/assets/images/proyectos/pespiral02.mp4" },
    ]
  },
  {
    id: "pmesag-01",
    titulo: "Instalación de mesa gravimétrica",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Arequipa, Perú",
    descripcion: "Proyecto de suministro e instalación de mesa gravimétrica para concentración de minerales pesados, incluyendo montaje mecánico, nivelación y puesta en marcha del equipo en planta del cliente.",
    media: [
      { tipo: "video", src: "/assets/images/proyectos/pmesag01.mp4" },
    ]
  },
  {
    id: "pmesag-02.",
    titulo: "Montaje y puesta en marcha de mesa gravimétrica",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Arequipa, Perú",
    descripcion: "Proyecto de montaje y puesta en marcha de mesa gravimétrica en Arequipa, incluyendo instalación mecánica, calibración de parámetros operativos y verificación de eficiencia en recuperación de minerales.",
    media: [
      { tipo: "video", src: "/assets/images/proyectos/pmesag02.mp4" },
    ]
  },
  {
    id: "pmolino-01",
    titulo: "Instalación de planta (Chancadora - Molino y Mesas gravimétricas)",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Cuzco, Perú",
    descripcion: "Proyecto de instalación integral de planta de procesamiento mineral que comprendió chancadora, molino y mesas gravimétricas para recuperación de oro, garantizando eficiencia operativa y continuidad productiva en Cuzco.",
    media: [
      { tipo: "video", src: "/assets/images/proyectos/pmolino01.mp4" },
    ]
  },
  {
    id: "pmolino-02",
    titulo: "Planta con Molino y Mesas gravimétricas",
    servicio: "Instalación de Plantas",
    estado: "Completado",
    ubicacion: "Cuzco, Perú",
    descripcion: "Proyecto de suministro e instalación de planta con molino y mesas gravimétricas para concentración gravimétrica de minerales auríferos, asegurando la correcta puesta en marcha y operatividad del sistema en Cuzco.",
    media: [
      { tipo: "video", src: "/assets/images/proyectos/pmolino02.mp4" },
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
