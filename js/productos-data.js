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
        descripcion: "Concentrador gravimétrico helicoidal para recuperación de oro, estaño, tungsteno y otros minerales pesados. Separa minerales por diferencia de densidad sin uso de mercurio ni reactivos químicos.",
        especificaciones: [
          "Capacidad: 2-10 TPH",
          "Potencia: 3 HP",
          "Acero inoxidable"
        ],
        destacado: true // Aparece en la página de inicio
      },
      {
        id: "mesa-vibratoria",
        nombre: "Mesa Vibratoria",
        imagenes: [
          "/assets/images/productos/mesa-vibratoria.jpg",
          "/assets/images/productos/mesa-vibratoria-2.jpg",
          "/assets/images/productos/mesa-vibratoria-3.jpg",
          "/assets/images/productos/mesa-vibratoria-4.jpg"
        ],
        descripcion: "Mesa de concentración gravimétrica para separación fina de minerales. Ideal para oro y metales preciosos.",
        especificaciones: [
          "Capacidad: 0.5-2 TPH",
          "Potencia: 1.5 HP",
          "Fibra de vidrio"
        ],
        destacado: false
      },
      {
        id: "zaranda-vibratoria",
        nombre: "Zaranda Vibratoria",
        imagenes: [
          "/assets/images/productos/zaranda-vibratoria.jpg",
          "/assets/images/productos/zaranda-vibratoria-2.jpg",
          "/assets/images/productos/zaranda-vibratoria-3.jpg",
          "/assets/images/productos/zaranda-vibratoria-4.jpg"
        ],
        descripcion: "Clasificador vibratorio para separación de minerales por tamaño. Mallas intercambiables para diferentes granulometrías.",
        especificaciones: [
          "Capacidad: 5-50 TPH",
          "Potencia: 5 HP",
          "Mallas de acero"
        ],
        destacado: false
      },
      {
        id: "concentrador-centrifugo",
        nombre: "Concentrador Centrífugo",
        imagenes: [
          "/assets/images/productos/concentrador-centrifugo.jpg",
          "/assets/images/productos/concentrador-centrifugo-2.jpg",
          "/assets/images/productos/concentrador-centrifugo-3.jpg",
          "/assets/images/productos/concentrador-centrifugo-4.jpg"
        ],
        descripcion: "Concentrador centrífugo para recuperación de oro fino. Alta eficiencia en la captura de partículas ultrafinas.",
        especificaciones: [
          "Capacidad: 1-5 TPH",
          "Potencia: 2 HP",
          "Acero inoxidable"
        ],
        destacado: false
      },
      {
        id: "espiral-concentradora",
        nombre: "Espiral Concentradora",
        imagenes: [
          "/assets/images/productos/espiral-concentradora.jpg",
          "/assets/images/productos/espiral-concentradora-2.jpg",
          "/assets/images/productos/espiral-concentradora-3.jpg",
          "/assets/images/productos/espiral-concentradora-4.jpg"
        ],
        descripcion: "Concentrador en espiral para separación gravimétrica de minerales. Ideal para arenas negras y minerales pesados.",
        especificaciones: [
          "Capacidad: 1-3 TPH",
          "Sin motor",
          "Poliuretano"
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
        id: "molino-bolas",
        nombre: "Molino de Bolas",
        imagenes: [
          "/assets/images/productos/molino-bolas.jpg",
          "/assets/images/productos/molino-bolas-2.jpg",
          "/assets/images/productos/molino-bolas-3.jpg",
          "/assets/images/productos/molino-bolas-4.jpg"
        ],
        descripcion: "Molino para molienda fina de minerales. Ideal para procesos de conminución en plantas concentradoras de pequeña y mediana escala.",
        especificaciones: [
          "Capacidad: 5-50 TPD",
          "Potencia: 15-100 HP",
          "Forro de acero"
        ],
        destacado: true
      },
      {
        id: "molino-barras",
        nombre: "Molino de Barras",
        imagenes: [
          "/assets/images/productos/molino-barras.jpg",
          "/assets/images/productos/molino-barras-2.jpg",
          "/assets/images/productos/molino-barras-3.jpg",
          "/assets/images/productos/molino-barras-4.jpg"
        ],
        descripcion: "Molino para molienda gruesa y media. Ideal para preparación de alimentación a circuitos de concentración gravimétrica.",
        especificaciones: [
          "Capacidad: 3-30 TPD",
          "Potencia: 10-75 HP",
          "Barras de acero"
        ],
        destacado: false
      },
      {
        id: "clasificador-espiral",
        nombre: "Clasificador Espiral",
        imagenes: [
          "/assets/images/productos/clasificador-espiral.jpg",
          "/assets/images/productos/clasificador-espiral-2.jpg",
          "/assets/images/productos/clasificador-espiral-3.jpg",
          "/assets/images/productos/clasificador-espiral-4.jpg"
        ],
        descripcion: "Clasificador de minerales por sedimentación. Separa finos de gruesos en circuitos cerrados de molienda.",
        especificaciones: [
          "Capacidad: 5-50 TPD",
          "Potencia: 3-10 HP",
          "Acero al carbono"
        ],
        destacado: false
      },
      {
        id: "hidrociclon",
        nombre: "Hidrociclón",
        imagenes: [
          "/assets/images/productos/hidrociclon.jpg",
          "/assets/images/productos/hidrociclon-2.jpg",
          "/assets/images/productos/hidrociclon-3.jpg",
          "/assets/images/productos/hidrociclon-4.jpg"
        ],
        descripcion: "Clasificador centrífugo para separación de partículas finas y gruesas en suspensiones minerales.",
        especificaciones: [
          "Capacidad: 5-100 m³/h",
          "Sin motor",
          "Poliuretano"
        ],
        destacado: false
      },
      {
        id: "chancadora-quijada",
        nombre: "Chancadora de Quijada",
        imagenes: [
          "/assets/images/productos/chancadora-quijada.jpg",
          "/assets/images/productos/chancadora-quijada-2.jpg",
          "/assets/images/productos/chancadora-quijada-3.jpg",
          "/assets/images/productos/chancadora-quijada-4.jpg"
        ],
        descripcion: "Trituradora primaria de mandíbulas para reducción de mineral grueso. Robusta y de alta capacidad.",
        especificaciones: [
          "Capacidad: 1-20 TPH",
          "Potencia: 10-40 HP",
          "Acero al manganeso"
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
        id: "celda-flotacion",
        nombre: "Celda de Flotación",
        imagenes: [
          "/assets/images/productos/celda-flotacion.jpg",
          "/assets/images/productos/celda-flotacion-2.jpg",
          "/assets/images/productos/celda-flotacion-3.jpg",
          "/assets/images/productos/celda-flotacion-4.jpg"
        ],
        descripcion: "Equipo para procesos de flotación de minerales sulfurados y oxidados. Alta eficiencia en recuperación de concentrados.",
        especificaciones: [
          "Capacidad: 1-50 m³",
          "Potencia: 5-30 HP",
          "Acero revestido"
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
        id: "bomba-agua",
        nombre: "Bomba de Agua",
        imagenes: [
          "/assets/images/productos/bomba-agua.jpg",
          "/assets/images/productos/bomba-agua-2.jpg",
          "/assets/images/productos/bomba-agua-3.jpg",
          "/assets/images/productos/bomba-agua-4.jpg"
        ],
        descripcion: "Bomba centrífuga para suministro de agua en plantas de procesamiento mineral. Alta eficiencia y durabilidad.",
        especificaciones: [
          "Caudal: 5-100 m³/h",
          "Potencia: 2-30 HP",
          "Hierro fundido"
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
