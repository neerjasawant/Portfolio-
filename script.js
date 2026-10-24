// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Close the mobile navbar after clicking a navigation link
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            window.innerWidth < 992 &&
            navbarMenu &&
            navbarMenu.classList.contains("show") &&
            window.bootstrap
        ) {
            bootstrap.Collapse
                .getOrCreateInstance(navbarMenu)
                .hide();
        }
    });
});

// Contact form confirmation
// This displays a message but does not send an actual email.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const name = nameInput ? nameInput.value.trim() : "";

        formMessage.textContent =
            "Thank you" +
            (name ? ", " + name : "") +
            "! Your message has been received.";

        formMessage.style.display = "block";

        contactForm.reset();
    });
}
