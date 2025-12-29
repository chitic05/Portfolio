form = document.querySelector("form");
form.addEventListener("submit",(e) =>{
            e.preventDefault();
            const data = JSON.parse(localStorage.getItem("db"));
            const userFound = data.users.find((user) => 
                user.email === form.email.value && 
                user.password === form.password.value
                );

            if (userFound) {
                console.log("Login Success!");
                localStorage.setItem("logged", "true");
                window.location.href = "../../index.html"; 
            }else {
               alert("Invalid email or password");
            }
            })
    
