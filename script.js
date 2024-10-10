let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    const numeroIngresado = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        resultado.textContent = 'Por favor, introduce un número entre 1 y 100.';
    } else if (numeroIngresado === numeroAleatorio) {
        resultado.textContent = '¡Correcto! Has adivinado el número.';
    } else if (numeroIngresado < numeroAleatorio) {
        resultado.textContent = 'Demasiado bajo. Intenta de nuevo.';
    } else {
        resultado.textContent = 'Demasiado alto. Intenta de nuevo.';
    }
}

function reiniciar() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById('numero').value = '';
    document.getElementById('resultado').textContent = '';
}
