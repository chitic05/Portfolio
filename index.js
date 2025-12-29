//Asigura ca s-a incarcat documentul
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
                window.location.href="./auth/login/login.html";
            });
        });

function disconnect(){
    localStorage.setItem("logged", "false");
    console.log(localStorage.getItem("logged"));
}