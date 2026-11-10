
// MENÚ DE NAVEGACIÓN


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Abrir y cerrar menú móvil
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

});

// Cerrar menú al seleccionar una sección
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

});

// ACTUALIZAR AÑO DEL FOOTER

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
// FORMULARIO DE CONTACTO CON WHATSAPP

const contactForm = document.getElementById("contact-form");

// NÚMERO EDITABLE: reemplazar por el WhatsApp del negocio.
// Incluir el código del país, sin +, espacios ni guiones.
const whatsappNumber = "573001234567";

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const phone = document.getElementById("contact-phone").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        const whatsappMessage = `
¡Hola! Me gustaría realizar una consulta.

Nombre: ${name}
Correo: ${email}
Teléfono: ${phone || "No especificado"}

Pedido o consulta:
${message}
        `;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}