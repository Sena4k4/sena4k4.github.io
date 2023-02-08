function sendEmail() {
    var subject = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    window.location.href(`mailto:sena4k4.ink@gmail.com?subject=${subject}&body=${message}`)
}