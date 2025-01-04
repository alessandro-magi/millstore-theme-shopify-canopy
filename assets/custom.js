document.addEventListener("DOMContentLoaded", function () {
    const truncatedElement = document.querySelector('#truncated');
    const fullDescriptionElement = document.querySelector('#fullDescription');

    if (truncatedElement && fullDescriptionElement) {
        // Gestisce il click sul link "Leggi di più"
        truncatedElement.querySelector('.read-more-collection').addEventListener('click', function (event) {
            event.preventDefault(); // Evita il comportamento predefinito del link
            fadeOut(truncatedElement, 300, function () {
                fadeIn(fullDescriptionElement, 500);
            });
        });
    }

    // Funzione per il fadeIn
    function fadeIn(element, duration = 400, callback) {
        element.style.opacity = 0;
        element.style.display = 'block'; // Rende visibile l'elemento
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            element.style.opacity = progress;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else if (callback) {
                callback(); // Esegue il callback al termine dell'animazione
            }
        }

        requestAnimationFrame(animate);
    }

    // Funzione per il fadeOut
    function fadeOut(element, duration = 400, callback) {
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            element.style.opacity = 1 - progress;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none'; // Nasconde l'elemento alla fine dell'animazione
                if (callback) {
                    callback(); // Esegue il callback al termine dell'animazione
                }
            }
        }

        requestAnimationFrame(animate);
    }
});