function sendEmail() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    Email.send({
        Host : "smtp.mail.yahoo.com",
        Username : "sena.ink@yahoo.com",
        Password : "blu3.f1sh",
        To : "d4vss@outlook.com",
        From : "sena.ink@yahoo.com",
        Subject : "New message from " + subject,
        Body : email + "\n\n" + message
    })
}