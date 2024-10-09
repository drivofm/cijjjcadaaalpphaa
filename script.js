function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "01123581321";
    if (password === correctPassword) {
        window.location.href = "pagefinal.html"; // Replace with the page you want to redirect to
    } else {
        alert("Incorrect password! Try again.");
    }
}
