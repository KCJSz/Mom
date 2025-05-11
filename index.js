function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");
    const correctPassword = "5201314";

    if (passwordInput === correctPassword) {
        // Redirect to YouTube video
        window.location.href = "https://youtube.com/shorts/Ew7xb_9SFyQ?feature=shared"; // Replace with your YouTube URL
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect password. Try again!";
    }
}
