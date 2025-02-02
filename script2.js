document.getElementById("mensaje-btn").addEventListener("click", function() {
    const mensaje = document.getElementById("mensaje");
    const mensajes = [
        "Eres la mejor parte de mi vida, ¡te amo infinitamente!",
        "Cada día a tu lado es un nuevo capítulo de felicidad.",
        "Tu amor es mi mayor tesoro, siempre estaré agradecido por ti.",
        "Contigo, todo es posible, eres mi inspiración.",
        "Eres mi sueño hecho realidad, mi amor por ti crece cada día."
    ];
    
    // Selecciona un mensaje aleatorio
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensaje.textContent = mensajeAleatorio;
});
window.onload = function() {
    const audio = document.getElementById("audio");
    audio.volume = 0.1; // Establece el volumen al 10%
};
