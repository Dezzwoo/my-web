// REGISTRATION
function handleRegister(event) {
    event.preventDefault();

    const fullName = document.getElementById("regFullName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const confirmPassword = document.getElementById("regConfirmPassword").value.trim();
    const message = document.getElementById("registerMessage");

    message.innerText = "";

    if (!fullName || !email || !password || !confirmPassword) {
        message.innerText = "All fields are required.";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.innerText = "Invalid email.";
        return false;
    }

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match.";
        return false;
    }

    localStorage.setItem("userName", fullName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration complete!");
    window.location.href = "login.html";
    return true;
}



// LOGIN
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const message = document.getElementById("loginMessage");

    message.innerText = "";

    if (!email || !password) {
        message.innerText = "Please fill in all fields.";
        return false;
    }

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    const savedName = localStorage.getItem("userName");

    if (email === savedEmail && password === savedPassword) {
        alert(`Welcome, ${savedName}!`);
        window.location.href = "dashboard.html";
        return true;
    }

    message.innerText = "Invalid email or password.";
    return false;
}



// LOGOUT
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    window.location.href = "login.html";
}
