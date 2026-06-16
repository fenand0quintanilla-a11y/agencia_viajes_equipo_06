// ==========================================
// DESARROLLADOR JAVASCRIPT: SCRIPT PRINCIPAL
// PROYECTO: EXPLORA TOURS EL SALVADOR
// ==========================================

// Esperar a que todo el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================================
    // TAREA 1: NAVEGACIÓN DE UNA SOLA PÁGINA (SINGLE-PAGE APP)
    // =========================================================
    
    // Seleccionamos todos los enlaces del menú de navegación
    const enlacesNav = document.querySelectorAll(".nav-link");
    // Seleccionamos todas las secciones de contenido de la página
    const secciones = document.querySelectorAll(".content-section");

    enlacesNav.forEach(enlace => {
        enlace.addEventListener("click", (evento) => {
            // Evitar que la página se recargue o salte bruscamente
            evento.preventDefault();

            // Obtener el ID de la sección que queremos mostrar (ej: #inicio, #lugares)
            const destinoId = enlace.getAttribute("href");
            const seccionDestino = document.querySelector(destinoId);

            if (seccionDestino) {
                // 1. Ocultar TODAS las secciones quitando la clase 'active'
                secciones.forEach(seccion => seccion.classList.remove("active"));
                
                // 2. Mostrar ÚNICAMENTE la sección seleccionada agregando 'active'
                seccionDestino.classList.add("active");

                // 3. Actualizar el menú visualmente (quitar 'active' del botón viejo y ponerlo al nuevo)
                enlacesNav.forEach(btn => btn.classList.remove("active"));
                enlace.classList.add("active");

                // 4. Hacer un scroll suave hacia arriba para que la nueva pantalla se vea desde el inicio
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });

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
    
    const formulario = document.getElementById("form-contacto");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // DETENER el envío automático para que JavaScript pueda revisar los datos primero
            evento.preventDefault();

            // Capturar los valores que el usuario escribió y borrar espacios vacíos (.trim())
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            // Expresión regular básica para verificar que el correo lleve un '@' y un '.' válido
            const estructuraCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // 1. Validación: Que ningún campo quede completamente vacío
            if (nombre === "" || correo === "" || telefono === "" || mensaje === "") {
                alert("❌ ¡Hey! Por favor, rellena todos los campos obligatorios antes de enviar.");
                return; // Detiene el código aquí para que el usuario corrija
            }

            // 2. Validación: Formato de correo electrónico
            if (!estructuraCorreo.test(correo)) {
                alert("❌ Por favor, ingresa un correo electrónico válido (ejemplo@dominio.com).");
                return; // Detiene el código
            }

            // 3. Validación: Teléfono (mínimo 8 dígitos para El Salvador)
            if (telefono.length < 8 || isNaN(telefono)) {
                alert("❌ Por favor, ingresa un número de teléfono válido (mínimo 8 números).");
                return; // Detiene el código
            }

            // 4. ÉXITO: Si pasa todas las pruebas, simulamos el envío exitoso
            alert(`¡Gracias ${nombre}! 🎉\nHemos recibido tu solicitud con éxito. Un asesor de Explora Tours se contactará contigo pronto.`);
            
            // Limpiar el formulario automáticamente para que quede vacío de nuevo
            formulario.reset();
        });
    }
});
