document.addEventListener('DOMContentLoaded', () => {
    
    const profileMenu = document.getElementById('profile');

    if (profileMenu) {
        profileMenu.addEventListener('click', (event) => {
            event.stopPropagation();
            profileMenu.classList.toggle('menu-open');
        });
    }

    window.addEventListener('click', () => {
        if (profileMenu && profileMenu.classList.contains('menu-open')) {
            profileMenu.classList.remove('menu-open');
        }
    });

    const logOut=document.getElementById("logOut");
    logOut.addEventListener("click", ()=>{
        localStorage.setItem("logged","false");
        window.location.href="../auth/login/login.html";
    });

    const form = document.querySelector(".contact-form");
    const sendBtn = document.getElementById("send");

    // Încarcă date salvate în localStorage
    const saved = JSON.parse(localStorage.getItem("contactFormData"));
    if (saved) {
        form.name.value = saved.name || "";
        form.email.value = saved.email || "";
        form.message.value = saved.message || "";
    }

    // Salvare automată în localStorage la input
    form.addEventListener("input", () => {
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };
        localStorage.setItem("contactFormData", JSON.stringify(formData));
    });

    // Validare formular cu REGEX
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        const nameRegex = /^[A-Za-z\s]{3,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(name)) {
            alert("Name must contain at least 3 letters.");
            return;
        }
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (message.length < 10) {
            alert("Message must contain at least 10 characters.");
            return;
        }

        // Schimbare style
        sendBtn.style.transform = "scale(1.2)";
        setTimeout(() => {
            sendBtn.style.transform = "scale(1)";
        }, 200);

        alert("Message sent successfully!");

        form.reset();
        localStorage.removeItem("contactFormData");
    });

    // Schimbare aleatorie SA STERG ASTA DIN PROIECTUL FINAL
    sendBtn.addEventListener("mouseover", () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        sendBtn.style.backgroundColor = randomColor;
    });

    // Folosire target
    form.addEventListener("click", (event) => {
        console.log("Ai apăsat pe:", event.target);
        });

    // getComputedStyle
    sendBtn.addEventListener("mouseenter", () => {
        const styles = getComputedStyle(sendBtn);
        console.log("Butonul are în prezent culoarea:", styles.backgroundColor);
    });

});
