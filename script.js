function mostrarFormulario() {
    const formulario = document.getElementById("formulario-reserva");
    const botonReserva = document.querySelector(".boton-reserva");

    if (formulario.style.display === "block") {
        formulario.style.display = "none";
        botonReserva.textContent = "Reservar cita";
    } else {
        formulario.style.display = "block";
        botonReserva.textContent = "Ocultar formulario";
        formulario.scrollIntoView({ behavior: "smooth" });
    }
}

function mostrarCortes() {
    const listaCortes = document.getElementById("lista-cortes");
    const botonCortes = document.querySelector(".btn-agregar-producto");

    listaCortes.classList.toggle("mostrar");

    if (listaCortes.classList.contains("mostrar")) {
        botonCortes.textContent = "Ocultar cortes";
        listaCortes.scrollIntoView({ behavior: "smooth" });
    } else {
        botonCortes.textContent = "Ver cortes";
    }
}

function mostrarSeccion(idSeccion) {
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    const seccionSeleccionada = document.getElementById(idSeccion);

    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add("activa");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function mostrarSoloContacto() {
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    const contacto = document.getElementById("contacto");

    contacto.scrollIntoView({
        behavior: "smooth"
    });
}