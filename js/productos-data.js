/* ============================================================
   ALPHAMET - Datos Centralizados de Productos
   ============================================================
   Este archivo es la ÚNICA fuente de verdad para los datos
   de productos. Si modificas algo aquí, se actualizará
   automáticamente en todas las páginas (index.html, equipos.html).
   ============================================================ */

const productosData = {
  // ============================================================
  // CATEGORÍA 1: Concentración Gravimétrica
  // ============================================================
  concentracion_gravimetrica: {
    titulo: "Concentración Gravimétrica",
    subtitulo: "Equipos para recuperación de minerales pesados por gravedad",
    productos: [
      {
        id: "espiral-concentradora",
        nombre: "Espiral Concentradora",
        imagenes: [
          "/assets/images/productos/espiral01.jpg",
          "/assets/images/productos/espiral02.jpg",
          "/assets/images/productos/espiral03.jpg",
          "/assets/images/productos/espiral01.jpg"
        ],
        descripcion: "Concentrador gravimétrico helicoidal para recuperación de oro, plata, zinc, plomo, antimonio y otros minerales pesados. Método de gravimetría con agua (H₂O).",
        especificaciones: [
          "Capacidad: 1 Ton/hora",
          "Recuperación: 80%",
          "Estructura: 4.20 m",
          "Diámetro: 60 cm",
          "Fibra de Vidrio"
        ],
        destacado: true // Aparece en la página de inicio
      },
      {
        id: "mesa-gravimetrica",
        nombre: "Mesa Gravimétrica",
        imagenes: [
          "/assets/images/productos/mesag01.jpg",
          "/assets/images/productos/mesag03.jpg",
          "/assets/images/productos/mesag03.jpg",
          "/assets/images/productos/mesag04.jpg"
        ],
        descripcion: "Concentrador gravimétrico de mesa para separación fina de minerales como oro, plata, plomo, zinc y otros metales preciosos. Separación por gravimetría con exclusivamente agua.",
        especificaciones: [
          "Capacidad: 1 Ton/hora",
          "Motor: 3 HP trifásico",
          "Rifles: 80",
          "Dimensiones: 3m x 1.20m"
        ],
        destacado: false
      },
      {
        id: "concentrador-jig",
        nombre: "Concentradores Jig",
        imagenes: [
          "/assets/images/productos/concentjig01.jpg",
          "/assets/images/productos/concentjig02.jpg",
          "/assets/images/productos/concentjig03.jpg",
          "/assets/images/productos/concentjig04.jpg"
        ],
        descripcion: "Concentrador gravimétrico de pulsación hidráulica para recuperación de minerales pesados en oro aluvial, estaño, tungsteno y otros metales preciosos. Separa por diferencia de densidad mediante ciclos de pulsación con agua.",
        especificaciones: [
          "Capacidad: 1-25 Ton/hora",
          "Método: Pulsación hidráulica",
          "Alimentación: hasta 25 mm"
        ],
        destacado: false
      }
    ]
  },

  // ============================================================
  // CATEGORÍA 2: Molienda y Clasificación
  // ============================================================
  molienda_clasificacion: {
    titulo: "Molienda y Clasificación",
    subtitulo: "Equipos para reducción de tamaño y clasificación de minerales",
    productos: [
      {
        id: "chancadora-de-quijada",
        nombre: "Chancadora de Quijada",
        imagenes: [
          "/assets/images/productos/chancadora01.jpg",
          "/assets/images/productos/chancadora02.jpg",
          "/assets/images/productos/chancadora03.jpg",
          "/assets/images/productos/chancadora04.jpg"
        ],
        descripcion: "Equipo de reducción primaria de tamaño para minerales de alta dureza. Ideal como primera etapa en plantas de procesamiento gravimétrico antes del molino y la concentración.",
        especificaciones: [
          "Capacidad: Variable",
          "Potencia: Variable",
          "Dimensiones variables"
        ],
        destacado: true
      },
      {
        id: "molino-de-bolas",
        nombre: "Molino de bolas",
        imagenes: [
          "/assets/images/productos/molinob01.jpg",
          "/assets/images/productos/molinob02.jpg",
          "/assets/images/productos/molinob03.jpg",
          "/assets/images/productos/molinob04.jpg"
        ],
        descripcion: "Molino para reducción de tamaño de partículas mediante molienda húmeda o seca. Ideal para la preparación de pulpas en plantas de concentración gravimétrica y flotación.",
        especificaciones: [
          "Capacidad: Varias",
          "Potencia: Varias",
          "Dimensiones variables"
        ],
        destacado: true
      },
      {
        id: "Alimentadores-varios",
        nombre: "Alimentadores (Varios tipos)",
        imagenes: [
          "/assets/images/productos/alimentadores01.jpg",
          "/assets/images/productos/alimentadores02.jpg",
          "/assets/images/productos/alimentadores03.jpg",
          "/assets/images/productos/alimentadores04.jpg"
        ],
        descripcion: "Equipos de alimentación para dosificación uniforme y continua de material hacia los circuitos de chancado, molienda y concentración. Disponibles en versión disco, vibratorio, faja y cadena según el tipo de material y proceso requerido.",
        especificaciones: [
          "Capacidad: Variable según modelo",
          "Material: Acero estructural",
          "Aplicación: Chancado, molienda, concentración"
        ],
        destacado: false
      }
    ]
  },

  // ============================================================
  // CATEGORÍA 3: Flotación y Lixiviación
  // ============================================================
  flotacion_lixiviacion: {
    titulo: "Flotación y Lixiviación",
    subtitulo: "Equipos para procesos de concentración por flotación y lixiviación",
    productos: [
      {
        id: "bomba-de-pulpas",
        nombre: "Bomba de Pulpas",
        imagenes: [
          "/assets/images/productos/bombap01.jpg",
          "/assets/images/productos/bombap02.jpg",
          "/assets/images/productos/bombap03.jpg",
          "/assets/images/productos/bombap04.jpg"
        ],
        descripcion: "Bomba centrífuga especializada para el transporte de pulpas minerales con alto contenido de sólidos abrasivos y corrosivos. Ampliamente usada en circuitos de flotación, lixiviación y concentración gravimétrica.",
        especificaciones: [
          "Caudal: 10-200 m³/h",
          "Potencia: 5-50 HP",
          "Sólidos: hasta 60%"
        ],
        destacado: true
      },
      {
        id: "tanque-lixiviacion",
        nombre: "Tanque de Lixiviación",
        imagenes: [
          "/assets/images/productos/tanque-lixiviacion.jpg",
          "/assets/images/productos/tanque-lixiviacion-2.jpg",
          "/assets/images/productos/tanque-lixiviacion-3.jpg",
          "/assets/images/productos/tanque-lixiviacion-4.jpg"
        ],
        descripcion: "Tanque agitado para procesos de lixiviación de oro y plata con cianuro u otros reactivos.",
        especificaciones: [
          "Capacidad: 5-100 m³",
          "Potencia: 5-20 HP",
          "Acero revestido"
        ],
        destacado: false
      },
      {
        id: "bomba-pulpa",
        nombre: "Bomba de Pulpa",
        imagenes: [
          "/assets/images/productos/bomba-pulpa.jpg",
          "/assets/images/productos/bomba-pulpa-2.jpg",
          "/assets/images/productos/bomba-pulpa-3.jpg",
          "/assets/images/productos/bomba-pulpa-4.jpg"
        ],
        descripcion: "Bomba centrífuga para manejo de pulpas minerales abrasivas y corrosivas en plantas concentradoras.",
        especificaciones: [
          "Caudal: 10-200 m³/h",
          "Potencia: 5-50 HP",
          "Hierro blanco"
        ],
        destacado: false
      },
      {
        id: "agitador-mecanico",
        nombre: "Agitador Mecánico",
        imagenes: [
          "/assets/images/productos/agitador-mecanico.jpg",
          "/assets/images/productos/agitador-mecanico-2.jpg",
          "/assets/images/productos/agitador-mecanico-3.jpg",
          "/assets/images/productos/agitador-mecanico-4.jpg"
        ],
        descripcion: "Sistema de agitación para tanques de lixiviación y acondicionamiento de pulpas minerales.",
        especificaciones: [
          "Capacidad: 5-50 m³",
          "Potencia: 3-15 HP",
          "Acero inoxidable"
        ],
        destacado: false
      },
      {
        id: "filtro-prensa",
        nombre: "Filtro Prensa",
        imagenes: [
          "/assets/images/productos/filtro-prensa.jpg",
          "/assets/images/productos/filtro-prensa-2.jpg",
          "/assets/images/productos/filtro-prensa-3.jpg",
          "/assets/images/productos/filtro-prensa-4.jpg"
        ],
        descripcion: "Equipo de filtración para deshidratación de concentrados y relaves. Reduce la humedad al mínimo.",
        especificaciones: [
          "Capacidad: 5-50 TPD",
          "Presión: 15 bar",
          "Placas de polipropileno"
        ],
        destacado: false
      }
    ]
  },

  // ============================================================
  // CATEGORÍA 4: Accesorios
  // ============================================================
  accesorios: {
    titulo: "Accesorios",
    subtitulo: "Equipos complementarios para tu planta minera",
    productos: [
      {
        id: "sistemas-de-transporte",
        nombre: "Sistemas de Transporte",
        imagenes: [
          "/assets/images/productos/transport01.jpg",
          "/assets/images/productos/transport02.jpg",
          "/assets/images/productos/transport03.jpg",
          "/assets/images/productos/transport04.jpg"
        ],
        descripcion: "Equipos para el transporte y elevación continua de materiales en plantas de procesamiento mineral. Disponibles en versión helicoidal, faja, cadena y cangilones según el tipo de material y proceso requerido.",
        especificaciones: [
          "Caudal: 5-100 m³/h",
          "Capacidad: Variable",
          "Potencia: 0.75-37 HP",
          "Material: Acero estructural"
        ],
        destacado: false
      },
      {
        id: "faja-transportadora",
        nombre: "Faja Transportadora",
        imagenes: [
          "/assets/images/productos/faja-transportadora.jpg",
          "/assets/images/productos/faja-transportadora-2.jpg",
          "/assets/images/productos/faja-transportadora-3.jpg",
          "/assets/images/productos/faja-transportadora-4.jpg"
        ],
        descripcion: "Sistema de transporte continuo para minerales. Ideal para alimentación de plantas y movimiento de materiales.",
        especificaciones: [
          "Ancho: 18-48 pulg",
          "Potencia: 3-25 HP",
          "Caucho vulcanizado"
        ],
        destacado: false
      },
      {
        id: "tolva-alimentacion",
        nombre: "Tolva de Alimentación",
        imagenes: [
          "/assets/images/productos/tolva-alimentacion.jpg",
          "/assets/images/productos/tolva-alimentacion-2.jpg",
          "/assets/images/productos/tolva-alimentacion-3.jpg",
          "/assets/images/productos/tolva-alimentacion-4.jpg"
        ],
        descripcion: "Tolva de almacenamiento y alimentación con feeder vibratorio para dosificación controlada de mineral.",
        especificaciones: [
          "Capacidad: 5-50 ton",
          "Acero estructural",
          "Con feeder"
        ],
        destacado: false
      },
      {
        id: "bomba-centrifuga",
        nombre: "Bomba Centrífuga",
        imagenes: [
          "/assets/images/productos/bomba-centrifuga.jpg",
          "/assets/images/productos/bomba-centrifuga-2.jpg",
          "/assets/images/productos/bomba-centrifuga-3.jpg",
          "/assets/images/productos/bomba-centrifuga-4.jpg"
        ],
        descripcion: "Bomba centrífuga multietapa para aplicaciones mineras. Ideal para sistemas de agua y pulpas diluidas.",
        especificaciones: [
          "Caudal: 10-150 m³/h",
          "Potencia: 5-40 HP",
          "Acero inoxidable"
        ],
        destacado: false
      },
      {
        id: "tablero-electrico",
        nombre: "Tablero Eléctrico",
        imagenes: [
          "/assets/images/productos/tablero-electrico.jpg",
          "/assets/images/productos/tablero-electrico-2.jpg",
          "/assets/images/productos/tablero-electrico-3.jpg",
          "/assets/images/productos/tablero-electrico-4.jpg"
        ],
        descripcion: "Tablero de control y distribución eléctrica para plantas mineras. Incluye protecciones y sistema de control.",
        especificaciones: [
          "Voltaje: 220-480V",
          "IP65",
          "Acero galvanizado"
        ],
        destacado: false
      }
    ]
  }
};

// ============================================================
// FUNCIÓN: Obtener productos destacados (para la página de inicio)
// ============================================================
function obtenerProductosDestacados() {
  const destacados = [];
  for (const categoria in productosData) {
    const cat = productosData[categoria];
    cat.productos.forEach(function (prod) {
      if (prod.destacado) {
        destacados.push(prod);
      }
    });
  }
  return destacados;
}

// ============================================================
// FUNCIÓN: Generar HTML de una tarjeta de producto (con slider)
// ============================================================
function generarProductCard(producto) {
  const specsHTML = producto.especificaciones.map(function (spec) {
    return '<span class="product-card__spec">' + spec + '</span>';
  }).join('');

  // Generar slides del slider
  var slidesHTML = '';
  var dotsHTML = '';
  var imagenes = producto.imagenes || [producto.imagen || ''];
  imagenes.forEach(function (img, index) {
    var activeClass = index === 0 ? ' active' : '';
    slidesHTML += '<div class="product-slider__slide' + activeClass + '">' +
      '<img class="product-card__image" src="' + img + '" alt="' + producto.nombre + '" loading="lazy"' +
      ' onerror="this.parentElement.style.display=\'none\'; ocultarSliderSiEsNecesario(this.parentElement.parentElement);">' +
      '</div>';
    dotsHTML += '<span class="product-slider__dot' + activeClass + '" data-index="' + index + '"></span>';
  });

  var prevBtn = imagenes.length > 1 ? '<button class="product-slider__btn product-slider__prev" aria-label="Anterior">&#10094;</button>' : '';
  var nextBtn = imagenes.length > 1 ? '<button class="product-slider__btn product-slider__next" aria-label="Siguiente">&#10095;</button>' : '';
  var dotsNav = imagenes.length > 1 ? '<div class="product-slider__dots">' + dotsHTML + '</div>' : '';

  return `
    <div class="product-card fade-in">
      <div class="product-slider" data-product-id="${producto.id}">
        ${prevBtn}
        ${nextBtn}
        <div class="product-slider__slides">
          ${slidesHTML}
        </div>
        ${dotsNav}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__title">${producto.nombre}</h3>
        <p class="product-card__desc">${producto.descripcion}</p>
        <div class="product-card__specs">
          ${specsHTML}
        </div>
        <button class="product-card__btn" data-product="${producto.nombre}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Consultar por WhatsApp
        </button>
      </div>
    </div>
  `;
}

// ============================================================
// FUNCIÓN: Generar HTML de una categoría completa (para equipos.html)
// ============================================================
function generarCategoriaHTML(categoriaKey) {
  const cat = productosData[categoriaKey];
  if (!cat) return '';

  const productosHTML = cat.productos.map(function (prod) {
    return generarProductCard(prod);
  }).join('');

  return `
    <div class="category-section fade-in">
      <h2 class="category-section__title">${cat.titulo}</h2>
      <p class="category-section__subtitle">${cat.subtitulo}</p>
      <div class="cards-grid">
        ${productosHTML}
      </div>
    </div>
  `;
}
