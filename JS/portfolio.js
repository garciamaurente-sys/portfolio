// ==========================================================================
// PORTFOLIO GLOBAL: Juan Garcia | Especialista Frontend & Logística
// ==========================================================================

// 1. BASE DE DATOS DE PROYECTOS
const proyectos = [
    {
        id: "proy-nacional",
        titulo: "Nacional Viajes & Galería",
        imagen: "../IMG/nacional-viajes.png",
        descripcion: "Plataforma web para centralizar registros multimedia de viajes deportivos. Incluye un mapa interactivo que geolocaliza estadios visitados y permite organizar galerías de fotos y videos.",
        etiquetas: ["HTML5", "CSS3", "JavaScript"],
        desafio: "Arquitectura modular que garantiza una separación clara entre estructura (HTML), estilos (CSS) y lógica (JS), logrando un alto impacto visual. El proceso de desarrollo fue asistido por herramientas de soporte técnico avanzado para optimizar la lógica, depurar código y resolver consultas complejas.",
        linkGithub: "https://github.com/garciamaurente-sys/Nacional_Viajes_galeria",
        linkDemo: "https://youtube.com/tu-video-nacional",
        tipoDemo: "video"
    },
    {
        id: "proy-album",
        titulo: "Album2026",
        imagen: "../IMG/album.png",
        descripcion: "App móvil nativa para la gestión digital de colecciones. Permite organizar artículos, controlar el estado del álbum y administrar duplicados mediante una interfaz intuitiva.",
        etiquetas: ["Vanilla JS", "UI Móvil", "APK Wrapper"],
        desafio: "Estrategia de desarrollo Mobile-First aplicada con éxito, incluyendo la conversión del proyecto web a una aplicación nativa para Android. La implementación fue optimizada mediante el uso de modelos de asistencia computacional, lo que agilizó el proceso de debugging y el refinamiento de la estructura lógica.",
        linkGithub: "https://github.com/garciamaurente-sys/AlbumWeb2026",
        linkDemo: "https://youtube.com/tu-video-album",
        tipoDemo: "video"
    },
    {
        id: "proy-finanzas",
        titulo: "Gestor de Finanzas",
        imagen: "../IMG/finanzas.png",
        descripcion: "Sistema Full-Stack de finanzas personales con autenticación segura. Permite a cada usuario gestionar su presupuesto mensual mediante un registro detallado de ingresos, gastos y ahorros.",
        etiquetas: ["Node.js", "Backend JS", "Dotenv"],
        desafio: "Implementación de una arquitectura Cliente-Servidor sólida, con un manejo preciso de dependencias y aislamiento de la lógica de base de datos. Para garantizar la integridad del sistema, conté con el apoyo de sistemas de asistencia inteligente que facilitaron el control de calidad, la depuración y la mejora de la arquitectura.",
        linkGithub: "https://github.com/garciamaurente-sys/gestor_finanzas",
        linkDemo: "https://youtube.com/tu-video-finanzas",
        tipoDemo: "video"
    }
];

// 2. DATA DEL INTERACTIVE SCOUTING (Filtros Clásicos)
const rolesScouting = {
    frontend: {
        titulo: "Frontend Developer (UI/UX Fokus)",
        pitch: "Junior proactivo enfocado en aprender buenas prácticas como clean code y semántica. Uso de Inteligencia Artificial como asistentes de código para depuración y optimización de lógica.",
        skills: [{ name: "Vanilla JS / DOM", level: "65%" }, { name: "Responsive & CSS", level: "74%" }, { name: "Performance", level: "50%" }, { name: "IA Support", level: "18%" }],
        targetProject: "proy-nacional",
        copyPasteText: "Juan Garcia - Frontend Developer | Especialista en JavaScript puro, interfaces responsivas y consumo dinámico de datos. GitHub: https://github.com/garciamaurente-sys/Nacional_Viajes_galeria"
    },
    backend: {
        titulo: "Backend & Server Architecture",
        pitch: "Capacidad para estructurar entornos de servidor con Node.js, gestionar configuraciones seguras (.env) y desacoplar la lógica de negocio eficientemente con apoyo de la Inteligencia Artificial.",
        skills: [{ name: "Node.js Server", level: "62%" }, { name: "Arquitectura C/S", level: "65%" }, { name: "Dotenv / Security", level: "48%" }, { name: "IA Support", level: "20%" }],
        targetProject: "proy-finanzas",
        copyPasteText: "Juan Garcia - Backend Developer | Enfoque en Node.js, seguridad de entornos y desarrollo de APIs limpias. GitHub: https://github.com/garciamaurente-sys/gestor_finanzas"
    },
    mobile: {
        titulo: "Mobile & Hybrid Developer",
        pitch: "Dominio técnico en enfoques estrictos Mobile-First, persistencia de datos offline (LocalStorage) y empaquetado web a nativo (APK), optimizado con Inteligencia Artificial.",
        skills: [{ name: "Mobile-First Syntax", level: "72%" }, { name: "Offline Storage", level: "60%" }, { name: "APK Compilation", level: "52%" }, { name: "IA Support", level: "17%" }],
        targetProject: "proy-album",
        copyPasteText: "Juan Garcia - Mobile/Hybrid Developer | Experto en desarrollo Mobile-First, almacenamiento persistente local y empaquetado APK. GitHub: https://github.com/garciamaurente-sys/AlbumWeb2026"
    }
};

// ==========================================================================
// SISTEMA DE LOGROS (GAMIFICACIÓN)
// ==========================================================================
const logrosDesbloqueados = new Set();

function unlockAchievement(id, title, desc, icon) {
    if (logrosDesbloqueados.has(id)) return;
    logrosDesbloqueados.add(id);

    const toastHTML = `
        <div class="achievement-toast" id="toast-${id}">
            <div class="ach-icon">${icon}</div>
            <div class="ach-text">
                <strong>Logro Desbloqueado</strong>
                <span class="ach-title">${title}</span>
                <span class="ach-desc">${desc}</span>
            </div>
        </div>
    `;

    document.getElementById('toast-container').insertAdjacentHTML('beforeend', toastHTML);
    const toast = document.getElementById(`toast-${id}`);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 4500);
}

// ==========================================================================
// ESTILOS DINÁMICOS - DISEÑO ACTUALIZADO
// ==========================================================================
const dynamicStyles = `
    .project-image-preview { cursor: zoom-in; transition: transform 0.3s; }
    .project-image-preview:hover { transform: scale(1.05); }
    .modal-overlay { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(2, 6, 23, 0.95); backdrop-filter: blur(10px); opacity: 0; transition: opacity 0.3s ease; justify-content: center; align-items: center; cursor: zoom-out; }
    .modal-overlay.active { display: flex; opacity: 1; }
    .modal-content { max-width: 90%; max-height: 90%; border-radius: 12px; transform: scale(0.9); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
    .modal-overlay.active .modal-content { transform: scale(1); }
    .close-modal { position: absolute; top: 20px; right: 30px; color: #94a3b8; font-size: 40px; cursor: pointer; transition: color 0.3s; }
    .close-modal:hover { color: #f8fafc; }

    /* ESTILO VENTANA TERMINAL (HUD) */
    #scouting-center { display: block; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(20px); border: 1px solid rgba(14, 165, 233, 0.3); border-radius: 16px; padding: 2rem; margin-bottom: 3rem; box-shadow: 0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1); animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1); position: relative; z-index: 10; overflow: hidden; }
    #scouting-center::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 6px; background: linear-gradient(90deg, #0ea5e9, #8b5cf6); }

    @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }

    .main-tabs { display: flex; gap: 15px; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; justify-content: center; }
    .main-tab-btn { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); color: #94a3b8; padding: 10px 20px; border-radius: 50px; cursor: pointer; font-weight: 700; font-size: 0.9rem; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
    .main-tab-btn:hover { background: rgba(255,255,255,0.05); color: #f8fafc; }
    .main-tab-btn.active { background: rgba(14, 165, 233, 0.15); color: #0ea5e9; border-color: rgba(14, 165, 233, 0.4); box-shadow: 0 0 15px rgba(14, 165, 233, 0.2); }

    .scouting-tabs { display: flex; gap: 10px; margin-bottom: 2rem; justify-content: center; }
    .tab-btn { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s; }
    .tab-btn:hover { border-color: #94a3b8; }
    .tab-btn.active { background: #0ea5e9; color: #020617; border-color: #0ea5e9; box-shadow: 0 0 15px rgba(14, 165, 233, 0.4); }

    .scouting-skill-bar { height: 6px; background: rgba(0,0,0,0.5); border-radius: 10px; overflow: hidden; margin-top: 8px; margin-bottom: 16px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.3); }
    .scouting-skill-progress { height: 100%; background: linear-gradient(90deg, #0ea5e9, #38bdf8); width: 0%; transition: width 1s cubic-bezier(0.1, 1, 0.1, 1); box-shadow: 0 0 10px rgba(14, 165, 233, 0.6); border-radius: 10px; }
    .btn-copy-pitch { background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; color: #34d399; padding: 12px; border-radius: 8px; font-size: 0.9rem; cursor: pointer; font-weight: 700; width: 100%; margin-top: 15px; transition: all 0.3s; display: flex; justify-content: center; align-items: center; gap: 8px; }
    .btn-copy-pitch:hover { background: #10b981; color: #020617; box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); }

    .project-card.highlighted-by-scout { border: 2px solid #0ea5e9 !important; box-shadow: 0 0 30px rgba(14, 165, 233, 0.25) !important; transform: translateY(-10px); z-index: 5; }

    #toast-container { position: fixed; bottom: 30px; right: 30px; z-index: 10000; display: flex; flex-direction: column; gap: 15px; pointer-events: none; }
    .achievement-toast { background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid #f59e0b; border-radius: 12px; padding: 15px 20px; display: flex; align-items: center; gap: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transform: translateX(120%) scale(0.9); opacity: 0; transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); min-width: 300px; }
    .achievement-toast.show { transform: translateX(0) scale(1); opacity: 1; }
    .ach-icon { font-size: 2.5rem; background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), transparent); padding: 10px; border-radius: 50%; color: #f59e0b; text-shadow: 0 0 10px rgba(245, 158, 11, 0.5); }
    .ach-text { display: flex; flex-direction: column; }
    .ach-text strong { color: #f59e0b; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; }
    .ach-title { color: #f8fafc; font-weight: 800; font-size: 1rem; margin-top: 2px; }
    .ach-desc { color: #94a3b8; font-size: 0.85rem; margin-top: 4px; line-height: 1.4; }

    /* ESTILOS DEL MAPA DE ARQUITECTURA (Cyber Blueprint) */
    .tech-blueprint { background: #020617; border: 1px solid rgba(14, 165, 233, 0.2); border-radius: 12px; height: 400px; position: relative; margin-top: 20px; overflow: hidden; background-image: radial-gradient(circle at center, rgba(14, 165, 233, 0.05) 0%, transparent 70%), linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px); background-size: 100% 100%, 20px 20px, 20px 20px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; padding: 20px 0; box-shadow: inset 0 0 40px rgba(0,0,0,0.8); }
    .blueprint-zone { width: 85%; height: 26%; border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; display: flex; justify-content: center; align-items: center; gap: 15px; background: rgba(15, 23, 42, 0.4); position: relative; backdrop-filter: blur(4px); transition: all 0.3s; }
    .blueprint-zone:hover { border-color: rgba(255,255,255,0.15); background: rgba(15, 23, 42, 0.6); }
    .zone-frontend { border-top: 2px solid #10b981; }
    .zone-frontend::before { content: 'CAPA CLIENTE'; position: absolute; top: -10px; left: 15px; background: #020617; padding: 0 8px; font-size: 0.7rem; color: #10b981; font-weight: 800; letter-spacing: 1px; border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 4px; }
    .zone-backend { border-bottom: 2px solid #f59e0b; }
    .zone-backend::before { content: 'CAPA SERVIDOR'; position: absolute; bottom: -10px; right: 15px; background: #020617; padding: 0 8px; font-size: 0.7rem; color: #f59e0b; font-weight: 800; letter-spacing: 1px; border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 4px; }
    .zone-ai { border-top: 2px solid #8b5cf6; }
    .zone-ai::before { content: 'CAPA IA (COPILOT, GEMINI, CLAUDE)'; position: absolute; top: -10px; left: 15px; background: #020617; padding: 0 8px; font-size: 0.7rem; color: #8b5cf6; font-weight: 800; letter-spacing: 1px; border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 4px; }

    .tech-node { width: 45px; height: 45px; background: rgba(2, 6, 23, 0.9); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; box-shadow: 0 4px 10px rgba(0,0,0,0.5); cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; color: #f8fafc; }
    .tech-node::after { content: attr(data-tech); position: absolute; bottom: -30px; background: #f8fafc; color: #020617; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 800; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.2s, transform 0.2s; transform: translateY(-5px); z-index: 20; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
    .tech-node:hover { transform: translateY(-8px) scale(1.15); border-color: #0ea5e9; background: rgba(14, 165, 233, 0.1); box-shadow: 0 10px 20px rgba(14, 165, 233, 0.3); color: #0ea5e9; z-index: 10; }
    .tech-node:hover::after { opacity: 1; transform: translateY(0); }

    .api-bridge { height: 10%; width: 2px; border-left: 2px dashed rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; position: relative; }
    .api-bridge span { background: #020617; color: #cbd5e1; font-size: 0.7rem; padding: 4px 8px; font-weight: 800; border-radius: 50px; border: 1px solid rgba(255,255,255,0.1); letter-spacing: 1px; }

    /* BOARDING PASS */
    .boarding-pass-container { background: linear-gradient(135deg, #f8fafc, #e2e8f0); border-radius: 16px; display: flex; overflow: hidden; color: #0f172a; margin-top: 20px; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
    .bp-left { flex: 3; padding: 25px; border-right: 2px dashed #94a3b8; position: relative; }
    .bp-right { flex: 1; background: linear-gradient(135deg, #0ea5e9, #38bdf8); padding: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; position: relative; }
    .bp-left::before, .bp-left::after { content: ''; position: absolute; right: -15px; width: 30px; height: 30px; background: #0f172a; border-radius: 50%; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); }
    .bp-left::before { top: -15px; } .bp-left::after { bottom: -15px; }
    .bp-header { display: flex; justify-content: space-between; margin-bottom: 25px; font-weight: 900; border-bottom: 2px solid #cbd5e1; padding-bottom: 15px; font-size: 1.1rem; }
    .bp-route { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
    .bp-city { text-align: center; }
    .bp-code { font-size: 2.5rem; font-weight: 900; letter-spacing: 1px; color: #020617; font-family: 'Arial Black', sans-serif; }
    .bp-name { font-size: 0.85rem; color: #64748b; text-transform: uppercase; font-weight: 700; }
    .bp-transport { font-size: 1.8rem; color: #0ea5e9; display: flex; align-items: center; gap: 8px; }
    .bp-transport::before, .bp-transport::after { content: '---------'; letter-spacing: -2px; color: #94a3b8; font-size: 1rem; opacity: 0.5; }
    .bp-details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 0.9rem; }
    .bp-label { color: #64748b; text-transform: uppercase; font-size: 0.75rem; font-weight: 800; margin-bottom: 4px; }
    .bp-value { font-weight: 800; font-size: 1.1rem; color: #0f172a; }
    .bp-barcode { font-family: 'Courier New', monospace; font-size: 0.8rem; letter-spacing: 1px; text-align: center; transform: rotate(90deg); white-space: nowrap; font-weight: bold; opacity: 0.9; }
`;

// ==========================================================================
// INYECCIÓN DE LA INTERFAZ MAESTRA
// ==========================================================================
function setupRecruiterEnvironment() {
    const styleTag = document.createElement('style');
    styleTag.textContent = dynamicStyles;
    document.head.appendChild(styleTag);

    document.body.insertAdjacentHTML('beforeend', '<div id="toast-container"></div>');

    const modalHTML = `<div id="imageModal" class="modal-overlay"><span class="close-modal" id="closeModal">&times;</span><img class="modal-content" id="modalImage"></div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const grid = document.getElementById('projectsGrid');
    if (grid) {
        const centerHTML = `
            <div id="scouting-center">
                <div class="main-tabs">
                    <button class="main-tab-btn active" data-target="view-ats"><i class="fas fa-chart-bar"></i> Filtro ATS</button>
                    <button class="main-tab-btn" data-target="view-tactics"><i class="fas fa-sitemap"></i> Arquitectura</button>
                    <button class="main-tab-btn" data-target="view-logistics"><i class="fas fa-plane-departure"></i> Logística</button>
                </div>

                <div id="view-ats" class="scouting-view">
                    <div class="scouting-tabs">
                        <button class="tab-btn active" data-role="frontend">Frontend Stack</button>
                        <button class="tab-btn" data-role="backend">Backend Server</button>
                        <button class="tab-btn" data-role="mobile">Mobile Deploy</button>
                    </div>
                    <div id="scouting-display-panel"></div>
                </div>

                <div id="view-tactics" class="scouting-view" style="display: none;">
                    <div style="color: #f8fafc; font-size: 1rem; margin-bottom: 15px; text-align: center;">
                        <strong>Mapa de Arquitectura Full-Stack</strong><br>
                        <span style="color: #94a3b8; font-size: 0.85rem;">Ecosistema integrado con soporte de Copilot, Gemini y Claude.</span>
                    </div>
                    <div class="tech-blueprint">
                        <div class="blueprint-zone zone-ai">
                            <div class="tech-node" data-tech="Copilot">🤖</div>
                            <div class="tech-node" data-tech="Gemini">♊</div>
                            <div class="tech-node" data-tech="Claude">✨</div>
                        </div>
                        <div class="blueprint-zone zone-frontend">
                            <div class="tech-node" data-tech="HTML5"><i class="fab fa-html5"></i></div>
                            <div class="tech-node" data-tech="CSS3"><i class="fab fa-css3-alt"></i></div>
                            <div class="tech-node" data-tech="Vanilla JS"><i class="fab fa-js-square"></i></div>
                            <div class="tech-node" data-tech="DOM">DOM</div>
                        </div>
                        <div class="api-bridge"><span>API REST</span></div>
                        <div class="blueprint-zone zone-backend">
                            <div class="tech-node" data-tech="Node.js"><i class="fab fa-node-js"></i></div>
                            <div class="tech-node" data-tech=".env">🔐</div>
                            <div class="tech-node" data-tech="Git"><i class="fab fa-git-alt"></i></div>
                            <div class="tech-node" data-tech="C/S">⚙️</div>
                        </div>
                    </div>
                </div>

                <div id="view-logistics" class="scouting-view" style="display: none;">
                    <div class="boarding-pass-container">
                        <div class="bp-left">
                            <div class="bp-header">
                                <span><i class="fas fa-plane"></i> TECH AIRLINES</span>
                                <span>BOARDING PASS</span>
                            </div>
                            <div class="bp-route">
                                <div class="bp-city"><div class="bp-code">UY</div><div class="bp-name">Uruguay</div></div>
                                <div class="bp-transport"><i class="fas fa-paper-plane"></i> GLOBAL <i class="fas fa-globe"></i></div>
                                <div class="bp-city"><div class="bp-code">🌎</div><div class="bp-name">Remote</div></div>
                            </div>
                            <div class="bp-details">
                                <div><div class="bp-label">Desarrollador</div><div class="bp-value">Juan Garcia</div></div>
                                <div><div class="bp-label">Idiomas</div><div class="bp-value">ESP, ENG (B), PORT (B)</div></div>
                                <div><div class="bp-label">Movilidad</div><div class="bp-value">Remoto / Presencial</div></div>
                                <div><div class="bp-label">Status</div><div class="bp-value" style="color: #10b981;"><i class="fas fa-check-circle"></i> Ready to Deploy</div></div>
                            </div>
                        </div>
                        <div class="bp-right">
                            <div class="bp-barcode">||| |||| || ||| ||||| ||</div>
                            <div style="writing-mode: vertical-rl; transform: rotate(180deg); margin-top: 20px; font-weight: 900; letter-spacing: 4px; font-size: 1.2rem;">GLOBAL</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforebegin', centerHTML);
    }

    const modal = document.getElementById('imageModal');
    function closeModal() { modal.classList.remove('active'); document.body.style.overflow = ''; }
    modal.addEventListener('click', (e) => { if (e.target === modal || e.target === document.getElementById('modalImage')) closeModal(); });
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
}

function switchMainView(targetId) {
    document.querySelectorAll('.scouting-view').forEach(view => view.style.display = 'none');
    document.getElementById(targetId).style.display = 'block';
    document.querySelectorAll('.main-tab-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-target') === targetId));
    if (targetId === 'view-tactics') unlockAchievement('tactics', 'Arquitecto de Software', 'Analizaste el mapa de arquitectura del código.', '🏗️');
    if (targetId === 'view-logistics') unlockAchievement('travel', 'Ruta Aprobada', 'Logística MVD -> GLO -> REM confirmada.', '✈️');
}

function updateScoutingView(roleKey) {
    const data = rolesScouting[roleKey];
    const displayPanel = document.getElementById('scouting-display-panel');
    if (!displayPanel) return;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-role') === roleKey));
    document.querySelectorAll('.project-card').forEach(card => card.classList.remove('highlighted-by-scout'));
    const targetCard = document.getElementById(data.targetProject);
    if (targetCard) targetCard.classList.add('highlighted-by-scout');
    displayPanel.innerHTML = `
        <div style="color: #e2e8f0; animation: fadeIn 0.4s ease; background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <h4 style="color: #f8fafc; border-left: 4px solid #0ea5e9; padding-left: 12px; font-size: 1.2rem; margin-bottom: 10px;">${data.titulo}</h4>
            <p style="font-size: 0.95rem; color: #cbd5e1; margin-bottom: 20px; line-height: 1.6;">${data.pitch}</p>
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                ${data.skills.map(sk => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; color: #f8fafc;">
                        <span>${sk.name}</span><span style="color: #0ea5e9;">${sk.level}</span>
                    </div>
                    <div class="scouting-skill-bar"><div class="scouting-skill-progress" data-width="${sk.level}"></div></div>
                `).join('')}
                <button class="btn-copy-pitch" id="btnCopyToClipboard"><i class="far fa-copy"></i> Copiar Resumen para Reporte</button>
            </div>
        </div>
    `;
    setTimeout(() => displayPanel.querySelectorAll('.scouting-skill-progress').forEach(bar => bar.style.width = bar.getAttribute('data-width')), 50);

    document.getElementById('btnCopyToClipboard').addEventListener('click', function() {
        navigator.clipboard.writeText(data.copyPasteText).then(() => {
            this.innerHTML = "<i class='fas fa-check'></i> ¡Copiado!";
            this.style.background = "#10b981";
            this.style.color = "#020617";
            unlockAchievement('silver_rank', '¡Ascenso a Rango Plata!', 'Datos extraídos listos para reportar al mánager.', '🥈');
            setTimeout(() => {
                this.innerHTML = "<i class='far fa-copy'></i> Copiar Resumen para Reporte";
                this.style.background = "";
                this.style.color = "";
            }, 2500);
        });
    });
}

function cargarProyectos() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    proyectos.forEach(proyecto => {
        let btnDemoHTML = '';
        if (proyecto.linkDemo && proyecto.linkDemo.trim() !== '') {
            const icon = proyecto.tipoDemo === 'video' ? 'fas fa-play-circle' : 'fas fa-external-link-alt';
            const text = proyecto.tipoDemo === 'video' ? 'Ver Video Demo' : 'Probar Proyecto';
            btnDemoHTML = `<a href="${proyecto.linkDemo}" target="_blank" class="btn btn-glow" style="width: 100%; justify-content: center; margin-bottom: 12px; padding: 0.8rem;"><i class="${icon}"></i> ${text}</a>`;
        }

        const cardHTML = `
            <article class="project-card glass-panel" id="${proyecto.id}">
                <div class="project-image-container" style="height: 200px; background-color: rgba(2, 6, 23, 0.8); border-radius: 16px 16px 0 0; overflow: hidden; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.05); position: relative;">
                    <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5)); pointer-events: none;"></div>
                    <img src="${proyecto.imagen}" alt="Captura de ${proyecto.titulo}" class="project-image-preview" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                </div>
                <div class="project-content">
                    <div class="project-tags project-tech">${proyecto.etiquetas.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                    <h3>${proyecto.titulo}</h3>
                    <p class="project-description">${proyecto.descripcion}</p>
                    <div class="project-challenge">
                        <strong><i class="fas fa-microchip"></i> Foco Técnico:</strong><br> ${proyecto.desafio}
                    </div>
                    <div class="project-links">
                        ${btnDemoHTML}
                        <a href="${proyecto.linkGithub}" target="_blank" class="btn btn-outline" style="width: 100%; justify-content: center; padding: 0.8rem;"><i class="fab fa-github"></i> Código Fuente</a>
                    </div>
                </div>
            </article>
        `;
        grid.innerHTML += cardHTML;
    });

    document.querySelectorAll('.project-image-preview').forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            modal.classList.add('active'); modalImage.src = img.src;
            document.body.style.overflow = 'hidden';
            unlockAchievement('vision_sky', 'Visor Explorador Activado', 'Revisión en profundidad de la interfaz de usuario.', '🔍');
        });
    });
}

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    setupRecruiterEnvironment();
    cargarProyectos();

    // Activar la vista ATS inicial por defecto
    updateScoutingView('frontend');

    // Desplegar logro inicial
    setTimeout(() => unlockAchievement('th5_ready', '¡Aldea Optimizada (TH5)!', 'Arquitectura base sólida y lista para inspección.', '🛡️'), 500);

    // Manejo de clicks dinámicos
    document.addEventListener('click', (e) => {
        const targetTab = e.target.closest('.main-tab-btn');
        const roleBtn = e.target.closest('.tab-btn');

        if (targetTab) {
            switchMainView(targetTab.getAttribute('data-target'));
        }
        if (roleBtn) {
            updateScoutingView(roleBtn.getAttribute('data-role'));
        }
    });

    // Lógica del Formulario de Contacto (Formspree)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            // Efecto de carga en el botón
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showSuccessToast("¡Mensaje enviado con éxito!");
                    contactForm.reset();
                } else {
                    alert("Hubo un problema al enviar el mensaje. Por favor, revisa tus datos.");
                }
            } catch (error) {
                console.error("Error al enviar el formulario:", error);
                alert("Error de conexión. Inténtalo más tarde.");
            } finally {
                // Restaurar botón
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    function showSuccessToast(msg) {
        let el = document.querySelector('.success-toast');
        if (el) {
            el.textContent = msg;
            el.classList.remove('hide');
            el.classList.add('show');
            clearTimeout(el._timeout);
        } else {
            el = document.createElement('div');
            el.className = 'success-toast show';
            el.textContent = msg;
            document.body.appendChild(el);
        }
        el._timeout = setTimeout(() => {
            el.classList.remove('show');
            el.classList.add('hide');
            setTimeout(() => { if (el && el.parentNode) el.parentNode.removeChild(el); }, 320);
        }, 3500);
    }
});