// Alerta simples ao clicar no botão do menu
const btnContato = document.getElementById('btn-contato');

btnContato.addEventListener('click', () => {
    alert('Console: Hello World! Vamos programar algo incrível?');
});

// Função para animar os cards quando clicados
function animarCard(elemento) {
    elemento.style.backgroundColor = "#38bdf8";
    elemento.style.color = "#0f172a";
    
    setTimeout(() => {
        elemento.style.backgroundColor = "#1e293b";
        elemento.style.color = "#f8fafc";
    }, 500);
}

// Log de boas-vindas no console (coisa de dev!)
console.log("%c Bem-vindo ao CodeLab!", "color: #38bdf8; font-size: 20px; font-weight: bold;");
