document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (event) {
            const targetID = this.getAttribute("href").substring(1); // Obtém apenas o ID sem o #
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                event.preventDefault(); // Impede a atualização automática da URL
                targetElement.scrollIntoView({ behavior: "smooth" });

                // Adiciona um pequeno delay para garantir que a URL seja alterada após o scroll
                setTimeout(() => {
                    history.pushState(null, null, window.location.pathname + window.location.search);
                }, 10); // Pequeno delay para remover o hash logo após o clique
            }
        });
    });

    if (window.location.hash) {
        setTimeout(() => {
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }, 10);
    }
});
