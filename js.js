/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.getElementById("horoscopeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Captura os dados do formulário
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;

    // Gera o horóscopo fictício
    var horoscope = getFakeHoroscope();

    // Esconde o formulário e exibe o resultado
    document.querySelector(".form-container").classList.add("hidden");
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayDob").textContent = formatDate(dob);
    document.getElementById("displayCpf").textContent = cpf;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("horoscopeMessage").textContent = horoscope;

    document.getElementById("horoscopeResult").classList.remove("hidden");
});

// Função que gera horóscopos fictícios aleatórios
function getFakeHoroscope() {
    var horoscopes = [
        "Hoje é um dia de autorreflexão. Abrace sua força interior.",
        "Uma oportunidade surpresa está no horizonte. Esteja pronto para agir!",
        "Sua criatividade vai brilhar hoje. Compartilhe suas ideias.",
        "Um amigo próximo pode precisar do seu apoio hoje. Esteja lá para eles.",
        "Novas aventuras esperam por você. Aproveite a oportunidade e explore!",
        "Hoje é um bom dia para focar no crescimento pessoal. Estabeleça novas metas.",
        "Espere boas notícias em um futuro próximo. Mantenha-se positivo!",
        "Paciência é a chave hoje. Não se precipite nas decisões."
    ];

    var randomIndex = Math.floor(Math.random() * horoscopes.length);
    return horoscopes[randomIndex];
}

// Função para formatar a data (YYYY-MM-DD -> DD/MM/YYYY)
function formatDate(dateString) {
    var date = new Date(dateString);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

// Função para aplicar máscara de CPF
document.getElementById("cpf").addEventListener("input", function(event) {
    var value = event.target.value;
    event.target.value = formatCPF(value);
});

// Função para formatar CPF (000.000.000-00)
function formatCPF(value) {
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}