
 document.addEventListener("DOMContentLoaded", () => {

    // ANIMAÇÃO AO ROLAR A PÁGINA

    const elementos = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver((entradas, observer) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observer.unobserve(entrada.target);

                }

            });

        }, {
            threshold: 0.12
        });

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });

    } else {

        elementos.forEach((elemento) => {
            elemento.classList.add("visible");
        });

    }


    // BOTÃO DA ÚLTIMA SURPRESA

    const botao = document.querySelector("#surpriseButton");

    const mensagem = document.querySelector("#finalNote");

    botao.addEventListener("click", () => {

        mensagem.classList.remove("hidden");

        botao.textContent = "Uma última lembrança para guardar ♡";

        botao.setAttribute("aria-expanded", "true");

        botao.disabled = true;

        mensagem.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});