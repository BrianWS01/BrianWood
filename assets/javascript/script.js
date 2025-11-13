document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggleBtn.classList.remove("btn-outline-light");
            themeToggleBtn.classList.add("btn-outline-dark");
        }
    });
})

const text = "Bem-vindo ao meu site!";
let index = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Velocidade da digitação (em ms)
    }
}

typeEffect();

