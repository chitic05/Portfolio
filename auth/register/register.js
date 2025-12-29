document.addEventListener("DOMContentLoaded", () => {
    const db = JSON.parse(localStorage.getItem("db"));
    const form = document.getElementsByTagName("form")[0];

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.email.value;
        const password = form.password.value;
        const passwordConf = form.passwordConf.value;

        const userFound = db.users.find(user => user.email === email);

        if (userFound) {
            alert("Email already exists");
        } 
        else if (password === passwordConf) {
            const newUser = { email, password };
            console.log(newUser);
            db.users.push(newUser);
            localStorage.setItem("db", JSON.stringify(db));
            localStorage.setItem("logged", "true");
            window.location.replace("../../index.html"); 
        } 
        else {
            alert("Passwords are not matching!");
        }
    });
});
