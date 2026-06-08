// js/portfolio.js

// 1. Base de Datos de Proyectos
const proyectosData = [
    {
        id: 1,
        badge: "Arquitectura Cloud",
        titulo: "Infraestructura Nacional Viajes",
        problema: "Establecer la base de datos y la analítica en tiempo real desde cero para un proyecto a escala requiere una configuración de entorno impecable.",
        solucion: "Implementación completa del entorno en Firebase utilizando Firestore para bases de datos NoSQL, Analytics para seguimiento de usuarios y el SDK estructurado en GitHub.",
        tecnologias: ["Firebase", "Firestore", "Google Analytics", "Git"],
        githubLink: "https://github.com/garciamaurente-sys",
        demoLink: "#"
    },
    {
        id: 2,
        badge: "[TU PROYECTO 2 AQUÍ]",
        titulo: "Nombre de tu Proyecto 2",
        problema: "Describe acá el problema o la necesidad que tenía este proyecto antes de que lo programaras.",
        solucion: "Describe cómo tu código resolvió ese problema (ej: creé un panel de control rápido, o una web responsiva).",
        tecnologias: ["Tech 1", "Tech 2", "Tech 3"],
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: 3,
        badge: "[TU PROYECTO 3 AQUÍ]",
        titulo: "Nombre de tu Proyecto 3",
        problema: "Describe el problema de tu tercer proyecto.",
        solucion: "Describe la solución que programaste.",
        tecnologias: ["Tech 1", "Tech 2", "Tech 3"],
        githubLink: "#",
        demoLink: "#"
    }
];

// 2. Función de Renderizado Mejorada (Agrega el glass-panel)
function cargarProyectos() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = proyectosData.map(proyecto => `
        <article class="project-card glass-panel">
            <div class="project-badge">${proyecto.badge}</div>
            <h3>${proyecto.titulo}</h3>
            <p class="project-problem"><strong>Contexto:</strong> ${proyecto.problema}</p>
            <p class="project-solution"><strong>Desarrollo:</strong> ${proyecto.solucion}</p>
            <div class="project-tech">
                ${proyecto.tecnologias.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${proyecto.githubLink}" class="btn-link recruiter-target" target="_blank">Código fuente</a>
                <a href="${proyecto.demoLink}" class="btn-link live-demo" target="_blank">Ver Proyecto</a>
            </div>
        </article>
    `).join('');
}

// 3. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarProyectos();

    const recruiterToggle = document.getElementById('recruiterModeToggle');
    const body = document.body;

    recruiterToggle.addEventListener('change', () => {
        if (recruiterToggle.checked) {
            body.classList.add('recruiter-mode-active');
        } else {
            body.classList.remove('recruiter-mode-active');
        }
    });
});

// 4. Lógica de Formspree (Sin Cambios, ya funciona perfecto)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const btnSubmit = this.querySelector('button[type="submit"]');
        const originalText = btnSubmit.innerText;

        btnSubmit.innerText = 'Enviando... ⏳';
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = '0.7';

        const formData = new FormData(this);

        try {
            const response = await fetch(this.action, {
                method: this.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                btnSubmit.innerText = '¡Mensaje Enviado! ✅';
                btnSubmit.style.background = '#10b981';
                btnSubmit.style.color = '#ffffff';
                btnSubmit.style.opacity = '1';
                this.reset();
                setTimeout(() => {
                    btnSubmit.innerText = originalText;
                    btnSubmit.disabled = false;
                    btnSubmit.style.background = '';
                    btnSubmit.style.color = '';
                }, 3000);
            } else { throw new Error('Error en Formspree'); }
        } catch (error) {
            btnSubmit.innerText = 'Error al enviar ❌';
            btnSubmit.style.background = '#ef4444';
            setTimeout(() => {
                btnSubmit.innerText = originalText;
                btnSubmit.disabled = false;
                btnSubmit.style.background = '';
                btnSubmit.style.opacity = '1';
            }, 3000);
        }
    });
}

// ==========================================================================
// RENDERIZADO DINÁMICO DE PROYECTOS
// ==========================================================================

const proyectos = [
    {
        titulo: "Nacional Viajes & Galería",
        imagen: "assets/nacional-preview.jpg", // Reemplazar con imagen real
        descripcion: "Plataforma web enfocada en el deporte y el seguimiento de rutas. Diseñada con una estructura modular para gestionar galerías de partidos y documentar de forma visual los viajes del equipo.",
        etiquetas: ["HTML5", "CSS3", "JavaScript"],
        desafio: "Separación limpia de la lógica (JS), estilos (CSS) y estructura (HTML) para renderizar contenido deportivo dinámico sin afectar el rendimiento.",
        linkGithub: "https://github.com/tu-usuario/Nacional_Viajes_galeria", // Reemplazar
        linkDemo: "#"
    },
    {
        titulo: "Album2026",
        imagen: "assets/album-preview.jpg", // Reemplazar con imagen real
        descripcion: "Aplicación móvil diseñada específicamente para documentar viajes y trayectos (como cruces en buquebus o rutas terrestres). Creada con tecnologías web y empaquetada como APK instalable.",
        etiquetas: ["Vanilla JS", "UI Móvil", "APK Wrapper"],
        desafio: "Desarrollo Mobile-First estricto y conversión de un proyecto web tradicional a una aplicación nativa instalable en Android.",
        linkGithub: "https://github.com/tu-usuario/Album2026", // Reemplazar
        linkDemo: "#"
    },
    {
        titulo: "Gestor de Finanzas",
        imagen: "assets/finanzas-preview.jpg", // Reemplazar con imagen real
        descripcion: "Sistema Full-Stack para el control analítico de presupuestos. Ideal para administrar el bankroll de apuestas deportivas en fútbol europeo/sudamericano o para estructurar los fondos de viajes internacionales.",
        etiquetas: ["Node.js", "Backend JS", "Dotenv"],
        desafio: "Implementación de arquitectura Cliente-Servidor. Manejo de dependencias (node_modules), variables de entorno (.env) y separación de la lógica de base de datos.",
        linkGithub: "https://github.com/tu-usuario/gestor_finanzas", // Próximamente
        linkDemo: "#"
    }
];

function cargarProyectos() {
    const grid = document.getElementById('projectsGrid');

    if (!grid) return;

    grid.innerHTML = '';

    proyectos.forEach(proyecto => {
        const cardHTML = `
            <div class="project-card glass-panel">
                <div class="project-image-placeholder" style="height: 200px; background: #1e293b; overflow: hidden;">
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #64748b;">
                        Captura de ${proyecto.titulo}
                    </div>
                </div>

                <div class="project-content">
                    <div class="project-tags">
                        ${proyecto.etiquetas.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>

                    <h3>${proyecto.titulo}</h3>
                    <p class="project-description">
                        ${proyecto.descripcion}
                    </p>

                    <div class="project-challenge">
                        <strong>Foco Técnico:</strong> ${proyecto.desafio}
                    </div>

                    <div class="project-actions">
                        <a href="${proyecto.linkGithub}" target="_blank" class="btn-project secondary">
                            <i class="fab fa-github"></i> Código
                        </a>
                    </div>
                </div>
            </div>
        `;

        grid.innerHTML += cardHTML;
    });
}

document.addEventListener('DOMContentLoaded', cargarProyectos);