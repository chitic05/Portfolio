//Asigura ca s-a incarcat documentul
document.addEventListener('DOMContentLoaded', () => {
            // puteam sa fac cu un hover dar nu era placut
            const cards = document.getElementsByClassName("project-card"); // nu ne da un array, ci un htmlcollection
            Array.from(cards).forEach(card => {  //convertim collectionul in array
            card.classList.remove("revealed");
            setTimeout(() => card.classList.add("revealed"), 10);
            //am facut asta pentru ca broswerul pastreaza un cache si toate project card-urile
            //vor avea clasa revealed mereu astfel nu se mai face animatia
            });

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
        });