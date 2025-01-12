let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist")
function menuToggle() {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
menu.addEventListener('click', menuToggle);
menu.addEventListener('touchstart', menuToggle);
menu.addEventListener('touchend', menuToggle);
window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
}
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".dark-mode");
    const body = document.body;
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode-active");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode-active");
        const darkMode = body.classList.contains("dark-mode-active") ? "enabled" : "disabled";
        localStorage.setItem("darkMode", darkMode);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        if (!name || !email || !message) {
            alert("All fields are required!");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }
        const formData = {
            name,
            email,
            message,
        };
        console.log("Form submitted with data:", formData);
        fetch(form.action, {
            method: form.method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Form submitted successfully!");
                    form.reset();
                } else {
                    throw new Error("Form submission failed.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
    });
});
function playAudio() {
    const audio = document.querySelector('.audio audio');
    audio.play()
        .then(() => {
            console.log("Audio is playing...");
        })
        .catch((error) => {
            console.error("Error playing audio:", error);
        });
}
