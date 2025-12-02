document.querySelector(".caixa-reservaMesa").addEventListener("submit", function(e) {
    e.preventDefault();

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const dataReserva = document.getElementById('data');
const hora = document.getElementById('hora');
const pessoas = document.getElementById('pessoas');
const btnReservar = document.getElementById('btn-reservar');

if (nome.value === "" || email.value === "" || dataReserva.value === "" || hora.value === "" || pessoas.value === "") {
    alert("Por favor, preencha todos os campos para fazer a reserva.");
    return;
}
alert(`Obrigado, ${nome.value}! Sua reserva para ${pessoas.value} pessoas no dia ${dataReserva.value} às ${hora.value} foi recebida. Enviaremos uma confirmação para o e-mail: ${email.value}.`);

if (nome.value && email.value && dataReserva.value && hora.value && pessoas.value) {
    btnReservar.disabled = true;
    btnReservar.textContent = "Reservando...";
    setTimeout(() => {
        btnReservar.disabled = false;
        btnReservar.textContent = "Reservar Mesa";
        nome.value = "";
        email.value = "";
        dataReserva.value = "";
        hora.value = "";
        pessoas.value = "";
    }, 2000);
}


});
