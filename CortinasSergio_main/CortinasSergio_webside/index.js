document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarNav = document.getElementById("navbarNav");
    const navbarOverlay = document.getElementById("navbarOverlay"); // Agrega esta línea
    const navLinks = document.querySelectorAll(".nav-link");

    navbarToggler.addEventListener("click", function () {
        if (navbarNav.classList.contains("show")) {
            navbarNav.classList.remove("show");
            navbarOverlay.classList.remove("show-overlay");
        } else {
            navbarNav.classList.add("show");
            navbarOverlay.classList.add("show-overlay");
        }
    });

    navLinks.forEach(function (link) { 
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            const target = link.getAttribute("href").substring(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(target);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                const scrollDuration = 800; // Duración del desplazamiento en milisegundos

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth", // Activa el desplazamiento suave
                    duration: scrollDuration
                });

                // Cierra el menú desplegable
                navbarNav.classList.remove("show");
                navbarOverlay.classList.remove("show-overlay");
            }
        });
    });
});


$(window).on("scroll", { passive: true }, function() {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const cardImage = document.querySelector(".card-image img");
    const thumbnailImages = document.querySelectorAll(".thumbnail-images img");

    // Agregar un controlador de clic a cada miniatura
    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            // Obtener la ruta de la imagen grande desde el atributo data-src
            const newImageSrc = this.getAttribute("data-src");
            
            // Cambiar la imagen principal
            cardImage.src = newImageSrc;
        });
    });
});

function goBack() {
    window.history.back();
  }

  document.addEventListener("DOMContentLoaded", function () {
    // ... (otros códigos)

    const carrusel = document.querySelector(".carrusel");
    const imagenes = document.querySelector(".imagenes");
    const anterior = document.querySelector("#anterior");
    const siguiente = document.querySelector("#siguiente");
    const imagenWidth = 20; // Ancho de cada imagen en porcentaje

    let index = 0;
    let limiteCarrusel = -300; // Valor predeterminado para el límite
    let touchStartX = 0; // Posición inicial de deslizamiento táctil

    // Detectar si la ventana está en vista móvil (ancho menor a X píxeles)
    const mobileViewportWidth = 768; // Define el ancho de la vista móvil que prefieras

    function ajustarLimiteCarrusel() {
        if (window.innerWidth < mobileViewportWidth) {
            limiteCarrusel = -700; // Cambiar a -700% en vista móvil
        } else {
            limiteCarrusel = -300; // Restaurar a -200% en otras vistas
        }
    }

    ajustarLimiteCarrusel(); // Llamar la función al cargar la página

    window.addEventListener("resize", ajustarLimiteCarrusel); // Actualizar en cambios de tamaño de ventana

    siguiente.addEventListener("click", () => {
        if (index > limiteCarrusel) {
            index -= 100;
            actualizarCarrusel();
        }
    });

    anterior.addEventListener("click", () => {
        if (index < 0) {
            index += 100;
            actualizarCarrusel();
        }
    });

    carrusel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    carrusel.addEventListener("touchmove", (e) => {
        const touchEndX = e.touches[0].clientX;
        const touchDiff = touchEndX - touchStartX;

        if (touchDiff > 50 && index < 0) {
            index += 100;
            actualizarCarrusel();
        } else if (touchDiff < -50 && index > limiteCarrusel) {
            index -= 100;
            actualizarCarrusel();
        }

        touchStartX = touchEndX;
    }, { passive: true });

    function actualizarCarrusel() {
        imagenes.style.transform = `translateX(${index}%)`;
    }

    actualizarCarrusel();
});






