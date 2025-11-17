//Asigura ca s-a incarcat documentul
document.addEventListener('DOMContentLoaded', () => {
            
            const cards = document.getElementsByClassName("project-card"); // nu ne da un array, ci un htmlcollection
            Array.from(cards).forEach(card => {  //convertim collectionul in array
            card.classList.add("revealed");
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