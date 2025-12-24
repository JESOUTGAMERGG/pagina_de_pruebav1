// Función para crear lluvia de flores (Nochebuenas)
function crearFlores() {
    const contenedor = document.getElementById('jardin');
    const florSVG = '❄️'; // Usamos un emoji por simplicidad, puedes usar una imagen real
    
    // Crear 20 flores
    for(let i=0; i<30; i++) {
        const flor = document.createElement('div');
        flor.classList.add('flor');
        flor.innerHTML = florSVG;
        
        // Posición aleatoria en horizontal
        flor.style.left = Math.random() * 100 + 'vw';
        
        // Tamaño aleatorio
        flor.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        // Duración de la caída aleatoria
        flor.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // Retraso aleatorio
        flor.style.animationDelay = Math.random() * 5 + 's';
        
        contenedor.appendChild(flor);
    }
}

// Función del botón
function irAlAlbum() {
    const album = document.getElementById('album');
    const portada = document.getElementById('portada');
    
    // Mostrar el álbum
    album.style.display = 'block';
    
    // Desplazamiento suave hacia el álbum
    album.scrollIntoView({ behavior: 'smooth' });
}

// Iniciar la lluvia de flores al cargar
window.onload = crearFlores;