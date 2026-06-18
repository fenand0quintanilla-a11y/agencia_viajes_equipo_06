// ==========================================
// DESARROLLADOR JAVASCRIPT: SCRIPT PRINCIPAL
// PROYECTO: EXPLORA TOURS EL SALVADOR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    function actualizarTextosDelSitio() {
        const barraSuperior = document.querySelectorAll("aside p");
        if (barraSuperior[0]) {
            barraSuperior[0].textContent = "📞 WhatsApp: 7548-7884 | ✉️ fernanda072@gmail.com";
        }
        if (barraSuperior[1]) {
            barraSuperior[1].textContent = "Turismo nacional | Paquetes de un día y recorridos personalizados";
        }

        const tituloPrincipal = document.querySelector("#inicio h1");
        if (tituloPrincipal) {
            tituloPrincipal.textContent = "Explora volcanes, pueblos y playas de El Salvador";
        }

        const parrafoPrincipal = document.querySelector("#inicio .lead");
        if (parrafoPrincipal) {
            parrafoPrincipal.textContent = "En Explora Tours El Salvador organizamos recorridos nacionales para familias, estudiantes y grupos que desean conocer los destinos más representativos del país.";
        }

        const tarjetasInicio = document.querySelectorAll("#inicio .row.g-4.mt-5 .card");
        const contenidoTarjetasInicio = [
            {
                titulo: "Aventura",
                texto: "Recorridos por volcanes, miradores y espacios naturales ideales para quienes buscan una experiencia activa."
            },
            {
                titulo: "Cultura",
                texto: "Visitas a pueblos, sitios históricos y lugares que conservan parte de la identidad salvadoreña."
            },
            {
                titulo: "Playa",
                texto: "Destinos de costa para disfrutar del mar, la gastronomía local y los paisajes al atardecer."
            }
        ];

        tarjetasInicio.forEach((tarjeta, indice) => {
            const contenido = contenidoTarjetasInicio[indice];
            if (!contenido) return;

            const titulo = tarjeta.querySelector("h3");
            const parrafo = tarjeta.querySelector("p");

            if (titulo) titulo.textContent = contenido.titulo;
            if (parrafo) parrafo.textContent = contenido.texto;
        });

        const encabezadoDestinos = document.querySelector("#mejores-lugares header.text-center p");
        if (encabezadoDestinos) {
            encabezadoDestinos.textContent = "Elige entre destinos naturales, culturales y de playa para viajes de un día, fines de semana o recorridos grupales dentro de El Salvador.";
        }

        const textoDestacados = Array.from(document.querySelectorAll("p.text-muted"))
            .find(parrafo => parrafo.textContent.includes("Tres lugares principales"));
        if (textoDestacados) {
            textoDestacados.textContent = "Tres opciones ideales para comenzar a descubrir la riqueza turística de El Salvador.";
        }

        const tituloReserva = document.querySelector("#reserva h2");
        if (tituloReserva) {
            tituloReserva.textContent = "Solicita información para tu viaje";
        }

        const badgeReserva = document.querySelector("#reserva .badge");
        if (badgeReserva) {
            badgeReserva.textContent = "Atención personalizada";
        }

        const descripcionReserva = document.querySelector("#reserva header.text-center p");
        if (descripcionReserva) {
            descripcionReserva.textContent = "Completa el formulario y nos pondremos en contacto para ayudarte a organizar tu recorrido.";
        }

        const tituloAntesReserva = Array.from(document.querySelectorAll("#reserva h3"))
            .find(titulo => titulo.textContent.includes("Antes de reservar"));
        if (tituloAntesReserva) {
            tituloAntesReserva.textContent = "Antes de solicitar información";
        }

        const tarjetaReserva = document.querySelector("#reserva aside .card");
        if (tarjetaReserva) {
            const parrafo = tarjetaReserva.querySelector("p");
            if (parrafo) {
                parrafo.textContent = "Verifica el destino, la fecha aproximada y la cantidad de personas antes de enviar tu solicitud.";
            }

            const lista = tarjetaReserva.querySelector("ul");
            if (lista) {
                lista.innerHTML = `
                    <li>Te orientaremos según el tipo de viaje que necesites.</li>
                    <li>Los paquetes pueden adaptarse a familias, estudiantes o grupos.</li>
                    <li>La respuesta se enviará al correo o teléfono proporcionado.</li>
                `;
            }
        }

        const botonFormulario = document.querySelector("#formReserva button[type='submit']");
        if (botonFormulario) {
            botonFormulario.textContent = "Enviar solicitud";
        }

        const contactoEmpresa = document.querySelector("#contacto article:first-child .card p");
        if (contactoEmpresa) {
            contactoEmpresa.textContent = "Somos una agencia dedicada a promover el turismo nacional mediante recorridos organizados, paquetes de viaje y atención personalizada para quienes desean conocer El Salvador.";
        }

        const mediosContacto = document.querySelectorAll("#contacto article:nth-child(2) .card p");
        if (mediosContacto[0]) mediosContacto[0].innerHTML = "<strong>WhatsApp:</strong> 7548-7884";
        if (mediosContacto[1]) mediosContacto[1].innerHTML = "<strong>Correo:</strong> fernanda072@gmail.com";

        const avisoEducativo = document.querySelector("#contacto .alert");
        if (avisoEducativo) {
            avisoEducativo.textContent = "Escríbenos para recibir información sobre destinos, disponibilidad y paquetes turísticos nacionales.";
        }

        const footer = document.querySelector("footer .container");
        if (footer) {
            footer.innerHTML = `
                <h5 class="fw-bold">Explora Tours El Salvador</h5>
                <p class="mb-1">Turismo nacional, paquetes personalizados y recorridos por El Salvador.</p>
                <p class="mb-0">© 2026 Explora Tours El Salvador. Todos los derechos reservados.</p>
            `;
        }
    }

    actualizarTextosDelSitio();
    
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
                alert("Por favor, completa todos los campos antes de enviar la solicitud.");
                return; // Detiene el código aquí para que el usuario corrija
            }

            // 2. Validación: Formato de correo electrónico
            if (!estructuraCorreo.test(correo)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return; // Detiene el código
            }

            // 3. Validación: Teléfono (mínimo 8 dígitos para El Salvador)
            if (soloNumerosTelefono.length < 8) {
                alert("Por favor, ingresa un número de teléfono válido.");
                return; // Detiene el código
            }

            if (Number(personas) < 1) {
                alert("La cantidad de personas debe ser mayor que cero.");
                return; // Detiene el código
            }

            // 4. ÉXITO: Si pasa todas las pruebas, mostramos confirmación al visitante
            if (mensajeReserva) {
                const aviso = document.createElement("section");
                aviso.className = "alert alert-success mb-0";
                aviso.textContent = `Gracias ${nombre}. Hemos recibido tu solicitud para ${destino}. Pronto nos comunicaremos contigo por correo o teléfono.`;

                mensajeReserva.replaceChildren(aviso);
            }
            
            // Limpiar el formulario automáticamente para que quede vacío de nuevo
            formulario.reset();
        });
    }
});