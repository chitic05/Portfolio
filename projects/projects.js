
    document.addEventListener('DOMContentLoaded', () => {
        const projectsContainer = document.querySelector(".projects-container");

        // Ajax
        fetch("cards.json") 
            .then((response) => response.json())
            .then((data) => {  //data este response.json()
                projectsContainer.innerHTML = ""; //modifica html-ul manual(direct)

                data.cards.forEach((project) => {
                    const cardElement = document.createElement("div");
                    cardElement.classList.add("project-card");
                                    
                    const descriptionListItems = project.description
                        .split("\n")
                        .map((line) => `<li>${line}</li>`)
                        .join("");

                    cardElement.innerHTML = `
                        <h3>${project.name}</h3>
                        <p class="tech">${project.technologies}</p>
                        <ul>${descriptionListItems}</ul>
                        <a class="project-link" target="_blank" href="${project.link}">
                            <i class="fa-brands fa-github"></i> GitHub Repository
                        </a>
                    `;

                    projectsContainer.appendChild(cardElement);
                });

            
                const cards = document.querySelectorAll(".project-card");
                
                cards.forEach((card, index) => {
                    card.classList.remove("revealed");
                    //Timeout pentru a vedea ca e hidden astfel e efectul bun
                    setTimeout(() => {
                        card.classList.add("revealed");
                    }, 10); 
                });

            })
            .catch((error) => console.error("Error loading projects:", error));

        // Profile menu logic remains here (it works fine outside because the header is static)
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
            window.location.replace("../auth/login/login.html");
        });
    });
