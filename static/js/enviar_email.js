const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");


function enviar(){
    const bodymessage = `Nome: ${nome.value}<br> Email: ${email.value}<br> Número: ${numero.value}<br> Mensagem: ${mensagem.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "testesdepython2@gmail.com",
        Password : "3E124371FBFFE8A35B7C89D59F60AEC14D7B",
        To : email.value,
        From : "testesdepython2@gmail.com",
        Subject : assunto.value,
        Body : bodymessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    enviar();
});