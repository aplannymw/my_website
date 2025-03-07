document.addEventListener("DOMContentLoaded", () => {
    // Validasi Form Login
    const loginForm = document.querySelector("form[action='dashboard.html']");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            const email = loginForm.querySelector("input[type='email']").value;
            const password = loginForm.querySelector("input[type='password']").value;

            if (!email.includes("@") || password.length < 6) {
                event.preventDefault();
                alert("Email harus valid dan password minimal 6 karakter.");
            }
        });
    }

    // Validasi Form Register
    const registerForm = document.querySelector("form[action='dashboar.html']");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            const inputs = registerForm.querySelectorAll("input");
            let valid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    valid = false;
                }
            });

            if (!valid) {
                event.preventDefault();
                alert("Semua kolom harus diisi.");
            }
        });
    }

    // Validasi Form Kontak
    const contactForm = document.querySelector("form[action='#']");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const name = document.getElementById("text").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("pesan").value.trim();

            if (name === "" || email === "" || message === "") {
                event.preventDefault();
                alert("Semua kolom harus diisi.");
            }
        });
    }
});
