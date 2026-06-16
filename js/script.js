// ==========================================
// DESARROLLADOR JAVASCRIPT: SCRIPT PRINCIPAL
// PROYECTO: EXPLORA TOURS EL SALVADOR
// ==========================================

// Esperar a que todo el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================================
    // TAREA 1: NAVEGACIÓN DE UNA SOLA PÁGINA (SINGLE-PAGE APP)
    // =========================================================
    
    // Seleccionamos todos los elementos que cambian de pantalla
    const enlacesNav = document.querySelectorAll("[data-seccion]");
    // Seleccionamos todas las pantallas del sitio
    const secciones = document.querySelectorAll(".pantalla");
    const menuPrincipal = document.getElementById("menuPrincipal");

    function mostrarPantalla(idPantalla) {
        const seccionDestino = document.getElementById(idPantalla);

        if (!seccionDestino) {
            return;
        }

        // 1. Ocultar TODAS las pantallas quitando la clase 'activa'
        secciones.forEach(seccion => seccion.classList.remove("activa"));

        // 2. Mostrar UNICAMENTE la pantalla seleccionada agregando 'activa'
        seccionDestino.classList.add("activa");

        // 3. Actualizar el menu visualmente
        document.querySelectorAll(".nav-link").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.seccion === idPantalla);
        });

        // 4. Cerrar el menu responsive si esta abierto
        if (menuPrincipal && window.bootstrap) {
            const menuBootstrap = bootstrap.Collapse.getOrCreateInstance(menuPrincipal, {
                toggle: false
            });
            menuBootstrap.hide();
        }

        // 5. Hacer scroll hacia arriba para ver la nueva pantalla desde el inicio
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    enlacesNav.forEach(enlace => {
        enlace.addEventListener("click", (evento) => {
            // Evitar que la página se recargue o salte bruscamente
            evento.preventDefault();

            // Obtener el ID de la pantalla desde data-seccion (ej: reserva)
            const destinoId = enlace.dataset.seccion;
            mostrarPantalla(destinoId);
        });
    });

    // El texto de la galería "+ más lugares" también abre la sección de destinos
    const accesoMasLugares = Array.from(document.querySelectorAll("figcaption"))
        .find(elemento => elemento.textContent.includes("+ más lugares"));

    if (accesoMasLugares) {
        accesoMasLugares.setAttribute("role", "button");
        accesoMasLugares.setAttribute("tabindex", "0");
        accesoMasLugares.setAttribute("title", "Ver todos los destinos turísticos");

        accesoMasLugares.addEventListener("click", () => {
            mostrarPantalla("mejores-lugares");
        });

        accesoMasLugares.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                mostrarPantalla("mejores-lugares");
            }
        });
    }

    // =========================================================
    // TAREA 2: BOTÓN "VER MÁS DETALLES" (DESPLIEGUE EN LUGARES)
    // =========================================================
    
    // Seleccionamos todos los botones de detalles en las tarjetas
    const botonesDetalles = document.querySelectorAll(".btn-detalles");

    botonesDetalles.forEach(boton => {
        boton.addEventListener("click", () => {
            // Buscamos el contenedor de texto oculto que está justo a la par (o abajo) del botón
            const infoExtra = boton.nextElementSibling;

            // Validamos que el contenedor exista
            if (infoExtra && infoExtra.classList.contains("info-extra")) {
                // Alternamos la clase 'd-none' de Bootstrap (oculto / visible)
                const estaOculto = infoExtra.classList.toggle("d-none");

                // Cambiamos el texto del botón dependiendo del estado
                if (estaOculto) {
                    boton.textContent = "Ver más detalles";
                    boton.classList.replace("btn-secondary", "btn-primary"); // Color original
                } else {
                    boton.textContent = "Ocultar detalles";
                    boton.classList.replace("btn-primary", "btn-secondary"); // Cambia de color al abrirse
                }
            }
        });
    });

    // =========================================================
    // TAREA 3: VALIDACIÓN DEL FORMULARIO DE CONTACTO
    // =========================================================
    
    const formulario = document.getElementById("formReserva");
    const mensajeReserva = document.getElementById("mensajeReserva");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // DETENER el envío automático para que JavaScript pueda revisar los datos primero
            evento.preventDefault();

            // Capturar los valores que el usuario escribió y borrar espacios vacíos (.trim())
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const fecha = document.getElementById("fecha").value.trim();
            const destino = document.getElementById("destino").value.trim();
            const personas = document.getElementById("personas").value.trim();
            const paquete = document.getElementById("paquete").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            // Expresión regular básica para verificar que el correo lleve un '@' y un '.' válido
            const estructuraCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const soloNumerosTelefono = telefono.replace(/\D/g, "");

            // 1. Validación: Que ningún campo quede completamente vacío
            if (nombre === "" || correo === "" || telefono === "" || fecha === "" || destino === "" || personas === "" || paquete === "" || mensaje === "") {
                alert("Por favor, rellena todos los campos obligatorios antes de enviar.");
                return; // Detiene el código aquí para que el usuario corrija
            }

            // 2. Validación: Formato de correo electrónico
            if (!estructuraCorreo.test(correo)) {
                alert("Por favor, ingresa un correo electrónico válido (ejemplo@dominio.com).");
                return; // Detiene el código
            }

            // 3. Validación: Teléfono (mínimo 8 dígitos para El Salvador)
            if (soloNumerosTelefono.length < 8) {
                alert("Por favor, ingresa un número de teléfono válido (mínimo 8 números).");
                return; // Detiene el código
            }

            if (Number(personas) < 1) {
                alert("La cantidad de personas debe ser mayor que cero.");
                return; // Detiene el código
            }

            // 4. ÉXITO: Si pasa todas las pruebas, simulamos el envío exitoso
            if (mensajeReserva) {
                const aviso = document.createElement("section");
                aviso.className = "alert alert-success mb-0";
                aviso.textContent = `Gracias ${nombre}. Tu reserva para ${destino} fue simulada correctamente.`;

                mensajeReserva.replaceChildren(aviso);
            }
            
            // Limpiar el formulario automáticamente para que quede vacío de nuevo
            formulario.reset();
        });
    }
});