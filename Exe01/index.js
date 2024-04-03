var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

var hide = document.getElementById("hide");
hide.style.display = "none";

function conferirMensagemWhatsApp() {
    hide.style.display = "block";

    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    var data = date.toLocaleDateString('pt-BR');
    var hora = date.toLocaleTimeString('pt-BR');

    date = data + " " + hora

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = date;
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var linkWhatsApp =
    "https://wa.me/" +
    numeroTelefone +
    "?text=NOME DO RECEPTOR(A): " +
    nomeGlobal +
    " MENSAGEM DO RECEPITOR: " +
    mensagemGlobal +
    " DATA DA SOLICITAÇÃO: " +
    dateGlobal;

    window.open(linkWhatsApp);
}


function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }