const urlParams = new URLSearchParams(window.location.search);
const respuesta = urlParams.get("answer");

if (respuesta && respuesta.toLowerCase() === "correct") {
    alert("¡Correcto! 🎉 Una silla tiene patas pero no camina 🎉");
} else {
    alert("Incorrecto 😢 Inténtalo de nuevo");
}
