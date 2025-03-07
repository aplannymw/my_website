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
document.addEventListener("DOMContentLoaded", function () {
    const uploadButton = document.getElementById("upload-button");
    const projectGallery = document.getElementById("project-gallery");

    uploadButton.addEventListener("click", function () {
        const projectName = document.getElementById("project-name").value;
        const projectDescription = document.getElementById("project-description").value;
        const projectImage = document.getElementById("project-image").files[0];

        if (!projectName || !projectDescription || !projectImage) {
            alert("Please fill all fields and upload an image!");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");

            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = projectName;

            const title = document.createElement("h4");
            title.textContent = projectName;

            const description = document.createElement("p");
            description.textContent = projectDescription;

            projectItem.appendChild(img);
            projectItem.appendChild(title);
            projectItem.appendChild(description);

            projectGallery.appendChild(projectItem);
        };

        reader.readAsDataURL(projectImage);

        document.getElementById("upload-form").reset();
    });
});
// Konfirmasi saat mengunggah
document.querySelector('form').addEventListener('submit', function (e) {
    const confirmed = confirm('Apakah Anda yakin ingin mengunggah gambar ini?');
    if (!confirmed) {
        e.preventDefault();
    }
});

// Galeri Interaktif: klik gambar untuk memperbesar
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function () {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1000';

        const enlargedImg = document.createElement('img');
        enlargedImg.src = this.src;
        enlargedImg.style.maxWidth = '90%';
        enlargedImg.style.maxHeight = '90%';
        enlargedImg.style.borderRadius = '10px';
        overlay.appendChild(enlargedImg);

        document.body.appendChild(overlay);

        overlay.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Kontainer untuk menampilkan repositori
    const reposContainer = document.getElementById("repos-container");

    // URL untuk GitHub Pages
    const githubPagesURL = "https://aplannymw.github.io/my_website/";

    // Menambahkan link GitHub Pages ke halaman
    const githubLinkContainer = document.getElementById("github-link");
    if (githubLinkContainer) {
        const link = document.createElement("a");
        link.href = githubPagesURL;
        link.target = "_blank";
        link.textContent = "Kunjungi My Website";
        link.classList.add("cta-button");
        githubLinkContainer.appendChild(link);
    }

    // Fetch daftar repositori dari GitHub API
    fetch("https://api.github.com/users/aplannymw/repos")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((repos) => {
            repos.forEach((repo) => {
                const repoItem = document.createElement("div");
                repoItem.classList.add("repo-item");

                repoItem.innerHTML = `
                    <h4><a href="${repo.html_url}" target="_blank">${repo.name}</a></h4>
                    <p>${repo.description || "Tidak ada deskripsi"}</p>
                `;
                reposContainer.appendChild(repoItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching repos:", error);
            reposContainer.innerHTML = "<p>Gagal memuat repositori.</p>";
        });
});


const githubLink = "https://aplannymw.github.io/my_website/";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".github-pages");
    if (container) {
        const link = document.createElement("a");
        link.href = githubLink;
        link.target = "_blank";
        link.textContent = "Kunjungi My Website";
        link.classList.add("cta-button");
        container.appendChild(link);
    }
});


