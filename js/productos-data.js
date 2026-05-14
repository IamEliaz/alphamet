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
        id: "agitador-condicionador",
        nombre: "Agitador Acondicionador",
        imagenes: [
          "/assets/images/productos/agitador01.jpg",
          "/assets/images/productos/agitador02.jpg",
          "/assets/images/productos/agitador03.jpg",
          "/assets/images/productos/agitador04.jpg"
        ],
        descripcion: "Tanque de agitación para mezcla y acondicionamiento de pulpas minerales con reactivos previo al proceso de flotación o lixiviación. Garantiza homogeneidad de la mezcla y tiempo de contacto óptimo entre el mineral y los reactivos.",
        especificaciones: [
          "Capacidad: 0.35-320 m³",
          "Potencia: 1.5-55 HP",
          "Velocidad: 15-100 rpm"
        ],
        destacado: false
      },
      {
        id: "equipos-de-filtración-separación",
        nombre: "Equipos de Filtración y Separación",
        imagenes: [
          "/assets/images/productos/filtysep01.jpg",
          "/assets/images/productos/filtysep02.jpg",
          "/assets/images/productos/filtysep03.jpg",
          "/assets/images/productos/filtysep04.jpg"
        ],
        descripcion: "Equipos para la separación, filtración y deshidratación de pulpas y concentrados en procesos de flotación y lixiviación. Permiten la recuperación eficiente de sólidos valiosos y la reducción del contenido de humedad en los concentrados finales.",
        especificaciones: [
          "Capacidad: Variable según modelo",
          "Humedad residual: 0.1-30%",
          "Potencia: 1.5-55 HP"
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
        destacado: true
      },
      {
        id: "accesorios-varios",
        nombre: "Accesorios Varios",
        imagenes: [
          "/assets/images/productos/accesoriosv01.jpg",
          "/assets/images/productos/accesoriosv02.jpg",
          "/assets/images/productos/accesoriosv03.jpg",
          "/assets/images/productos/accesoriosv04.jpg"
        ],
        descripcion: "Equipos auxiliares para el control, clasificación y tratamiento de materiales en plantas de procesamiento mineral. Incluye separadores magnéticos, colectores de polvo y ciclones para optimizar la eficiencia operativa de la planta.",
        especificaciones: [
          "Aplicación: Variable según equipo",
          "Material: Acero estructural",
          "Potencia: Variable"
        ],
        destacado: false
      },
      {
        id: "secadores-industriales",
        nombre: "Secadores Industriales",
        imagenes: [
          "/assets/images/productos/secadores01.jpg",
          "/assets/images/productos/secadores02.jpg"
        ],
        descripcion: "Equipos para secado de minerales y concentrados mediante tambor rotatorio. Reducen la humedad del material para facilitar su transporte, almacenamiento y procesamiento posterior.",
        especificaciones: [
          "Capacidad: 0.5-32 Ton/hora",
          "Temperatura: hasta 700°C",
          "Potencia: 3-35 HP"
        ],
        destacado: true
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
        <a href="https://wa.me/51929175492?text=${encodeURIComponent('Hola, me interesa el equipo: ' + producto.nombre)}" target="_blank" rel="noopener">
          <button class="button2">
            Consultar ahora
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z" fill="#fff"/>
              <path d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z" fill="#fff"/>
              <path d="M24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4z" fill="#cfd8dc"/>
              <path d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z" fill="#40c351"/>
              <path clip-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" fill-rule="evenodd" fill="#fff"/>
            </svg>
          </button>
        </a>
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
