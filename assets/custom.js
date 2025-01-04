// Aggiungi un evento click all'elemento con ID 'truncated'
document.querySelector('#truncated').addEventListener('click', function() {
    // Fai sparire l'elemento '#truncated' con effetto fadeOut in 300ms
    fadeOut(document.querySelector('#truncated'), 300, function() {
        // Una volta completato il fadeOut, mostra '#fullDescription' con effetto fadeIn in 500ms
        fadeIn(document.querySelector('#fullDescription'), 500);
    });
});

// Funzione per mostrare un elemento con effetto fadeIn
function fadeIn(element, duration = 400, callback) {
    element.style.opacity = 0; // Inizia con trasparenza
    element.style.display = 'block'; // Assicurati che sia visibile
    const startTime = performance.now();

    function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1); // Calcola il progresso
        element.style.opacity = progress; // Aggiorna l'opacità

        if (progress < 1) {
            requestAnimationFrame(animate); // Continua l'animazione
        } else if (callback) {
            callback(); // Esegui il callback al termine
        }
    }

    requestAnimationFrame(animate);
}

// Funzione per nascondere un elemento con effetto fadeOut
function fadeOut(element, duration = 400, callback) {
    const startTime = performance.now();

    function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1); // Calcola il progresso
        element.style.opacity = 1 - progress; // Aggiorna l'opacità

        if (progress < 1) {
            requestAnimationFrame(animate); // Continua l'animazione
        } else {
            element.style.display = 'none'; // Nascondi alla fine
            if (callback) {
                callback(); // Esegui il callback al termine
            }
        }
    }

    requestAnimationFrame(animate);
}