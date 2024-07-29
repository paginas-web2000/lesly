function mostrarDetalle(destino) {
    let mensaje = '';

    switch(destino) {
        case 'paris':
            mensaje = 'París es la capital de Francia, conocida por su arte, cultura y gastronomía.';
            break;
        case 'tokyo':
            mensaje = 'Tokio es la capital de Japón, famosa por su combinación de tradición y modernidad.';
            break;
        case 'ny':
            mensaje = 'Nueva York es una ciudad emblemática de Estados Unidos, conocida como la ciudad que nunca duerme.';
            break;
        default:
            mensaje = 'Destino no encontrado.';
    }

    alert(mensaje);
}

document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito.');
});