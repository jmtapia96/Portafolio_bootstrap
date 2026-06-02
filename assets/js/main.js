/**
 * Lógica para el Modo claro, oscuro del Portafolio
 * Se ejecuta una vez que el HTML ha cargado completamente.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionamos los elementos del HTML que vamos a manipular
    const htmlElement = document.documentElement; // La etiqueta <html>
    const btnTema = document.getElementById('btn-tema'); // El botón circular
    const iconoTema = document.getElementById('icono-tema'); // El icono de FontAwesome (sol o luna)

    // 2. Comprobar preferencias guardadas
    // Buscamos en el almacenamiento local del navegador si el usuario ya había elegido un tema antes
    const temaGuardado = localStorage.getItem('portfolio-tema');
    
    // Si hay un tema guardado, lo aplicamos inmediatamente
    if (temaGuardado) {
        htmlElement.setAttribute('data-bs-theme', temaGuardado);
        actualizarIcono(temaGuardado);
    } else {
        // Si no hay tema guardado, inicializamos el icono según el tema por defecto que pusimos en el HTML
        actualizarIcono('dark');
    }

    // 3. Evento de clic en el botón
    // Escuchamos cada vez que el usuario hace clic en el botón de cambiar tema
    btnTema.addEventListener('click', () => {
        // Obtenemos el tema actual que tiene la etiqueta html
        const temaActual = htmlElement.getAttribute('data-bs-theme');
        
        // Operador ternario: si el actual es oscuro, el nuevo será claro. Si no, será dark.
        const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
        
        // Aplicamos el nuevo tema al HTML
        htmlElement.setAttribute('data-bs-theme', nuevoTema);
        
        // Guardamos esta nueva preferencia en el navegador mediante el localstorage
        localStorage.setItem('portfolio-tema', nuevoTema);
        
        // Llamamos a la función para cambiar el icono
        actualizarIcono(nuevoTema);
    });

    // 4. Función de ayuda para cambiar el icono
    // Sustituye las clases dependiendo del tema activo
    function actualizarIcono(tema) {
        if (tema === 'dark') {
            // Si es oscuro, mostramos el sol (para cambiar a claro)
            iconoTema.classList.remove('fa-moon');
            iconoTema.classList.add('fa-sun');
        } else {
            // Si es claro, mostramos la luna (para cambiar a oscuro)
            iconoTema.classList.remove('fa-sun');
            iconoTema.classList.add('fa-moon');
        }
    }
});