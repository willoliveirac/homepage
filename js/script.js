

function sendEmail() {


    Email.send({
            
        SecureToken: "447669aa-8db4-473f-b790-0f9e933d79d7",
        To: 'will.oliveirac@gmail.com',
        From: "visitantesite27@gmail.com",
        Subject: document.getElementById("Assunto").value,
        Body: "Nome: "+ document.getElementById("nome").value + " Email: "+document.getElementById("email").value+
        "\n" + "Mensagem: \n" + document.getElementById("message").value
    }).then(
        message => alert("Mensagem enviada!")
    );

}