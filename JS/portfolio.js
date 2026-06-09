// ==========================================================================
// PORTFOLIO GLOBAL: Juan Garcia | Especialista Frontend & Logística
// ==========================================================================

// 1. BASE DE DATOS DE PROYECTOS
const proyectos = [
    {
        id: "proy-nacional",
        titulo: "Nacional Viajes & Galería",
        imagen: "../IMG/nacional-viajes.png",
        descripcion: "Plataforma web enfocada en el deporte y el seguimiento de rutas. Diseñada con una estructura modular para gestionar galerías de partidos.",
        etiquetas: ["HTML5", "CSS3", "JavaScript"],
        desafio: "Separación limpia de la lógica (JS), estilos (CSS) y estructura (HTML) para alto impacto visual. Desarrollo realizado con apoyo de Copilot, Gemini y Claude como herramientas de consulta, depuración y optimización de lógica.",
        linkGithub: "https://github.com/garciamaurente-sys/Nacional_Viajes_galeria",
        linkDemo: "https://youtube.com/tu-video-nacional",
        tipoDemo: "video"
    },
    {
        id: "proy-album",
        titulo: "Album2026",
        imagen: "../IMG/album.png",
        descripcion: "Aplicación interactiva y móvil diseñada específicamente para documentar viajes y trayectos. Empaquetada como APK instalable.",
        etiquetas: ["Vanilla JS", "UI Móvil", "APK Wrapper"],
        desafio: "Desarrollo Mobile-First estricto y conversión de proyecto web a una aplicación nativa Android. Desarrollo realizado con apoyo de Copilot, Gemini y Claude como herramientas de consulta, depuración y optimización de lógica.",
        linkGithub: "https://github.com/garciamaurente-sys/AlbumWeb2026",
        linkDemo: "https://youtube.com/tu-video-album",
        tipoDemo: "video"
    },
    {
        id: "proy-finanzas",
        titulo: "Gestor de Finanzas",
        imagen: "../IMG/finanzas.png",
        descripcion: "Sistema Full-Stack para el control analítico de presupuestos. Ideal para administrar bankrolls de apuestas deportivas.",
        etiquetas: ["Node.js", "Backend JS", "Dotenv"],
        desafio: "Implementación de arquitectura Cliente-Servidor. Manejo de dependencias y separación de lógica de DB. Desarrollo realizado con apoyo de Copilot, Gemini y Claude como herramientas de consulta, depuración y optimización de lógica.",
        linkGithub: "https://github.com/garciamaurente-sys/gestor_finanzas",
        linkDemo: "https://youtube.com/tu-video-finanzas",
        tipoDemo: "video"
    }
];

// 2. DATA DEL INTERACTIVE SCOUTING (Filtros Clásicos)
const rolesScouting = {
    frontend: {
        titulo: "Frontend Developer (UI/UX Fokus)",
        pitch: "Junior proactivo enfocado en aprender buenas prácticas como clean code y semántica. Uso de Copilot, Gemini y Claude como asistentes de código para depuración y optimización de lógica.",
        skills: [{ name: "Vanilla JS / DOM", level: "65%" }, { name: "Responsive & CSS", level: "74%" }, { name: "Performance", level: "50%" }, { name: "IA Support", level: "18%" }],
        targetProject: "proy-nacional",
        copyPasteText: "Juan Garcia - Frontend Developer | Especialista en JavaScript puro, interfaces responsivas y consumo dinámico de datos. GitHub: https://github.com/garciamaurente-sys/Nacional_Viajes_galeria"
    },
    backend: {
        titulo: "Backend & Server Architecture",
        pitch: "Capacidad para estructurar entornos de servidor con Node.js, gestionar configuraciones seguras (.env) y desacoplar la lógica de negocio eficientemente con apoyo de Copilot, Gemini y Claude.",
        skills: [{ name: "Node.js Server", level: "62%" }, { name: "Arquitectura C/S", level: "65%" }, { name: "Dotenv / Security", level: "48%" }, { name: "IA Support", level: "20%" }],
        targetProject: "proy-finanzas",
        copyPasteText: "Juan Garcia - Backend Developer | Enfoque en Node.js, seguridad de entornos y desarrollo de APIs limpias. GitHub: https://github.com/garciamaurente-sys/gestor_finanzas"
    },
    mobile: {
        titulo: "Mobile & Hybrid Developer",
        pitch: "Dominio técnico en enfoques estrictos Mobile-First, persistencia de datos offline (LocalStorage) y empaquetado web a nativo (APK), optimizado con Copilot, Gemini y Claude.",
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
// ESTILOS DINÁMICOS
// ==========================================================================
const dynamicStyles = `
    .project-image-preview { cursor: zoom-in; }
    .modal-overlay { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.9); backdrop-filter: blur(5px); opacity: 0; transition: opacity 0.3s ease; justify-content: center; align-items: center; cursor: zoom-out; }
    .modal-overlay.active { display: flex; opacity: 1; }
    .modal-content { max-width: 90%; max-height: 90%; border-radius: 12px; transform: scale(0.9); transition: transform 0.3s ease; }
    .modal-overlay.active .modal-content { transform: scale(1); }
    .close-modal { position: absolute; top: 20px; right: 30px; color: #f1f1f1; font-size: 40px; cursor: pointer; }

    #scouting-center { display: none; background: rgba(15, 23, 42, 0.8); border: 2px solid #38bdf8; border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 0 30px rgba(56, 189, 248, 0.2); animation: slideDown 0.5s ease-out; position: relative; z-index: 10; }
    body.recruiter-mode-active #scouting-center { display: block; }

    .main-tabs { display: flex; gap: 10px; margin-bottom: 1.5rem; border-bottom: 2px solid rgba(56, 189, 248, 0.3); padding-bottom: 10px; flex-wrap: wrap; }
    .main-tab-btn { background: transparent; border: none; color: #94a3b8; padding: 8px 15px; cursor: pointer; font-weight: bold; font-size: 1rem; position: relative; transition: color 0.3s; }
    .main-tab-btn.active { color: #38bdf8; }
    .main-tab-btn.active::after { content: ''; position: absolute; bottom: -12px; left: 0; width: 100%; height: 3px; background: #38bdf8; border-radius: 3px 3px 0 0; }

    .scouting-tabs { display: flex; gap: 10px; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .tab-btn { background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 0.8rem; transition: all 0.2s; }
    .tab-btn.active { background: #38bdf8; color: #0f172a; border-color: #38bdf8; }

    .scouting-skill-bar { height: 8px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden; margin-top: 6px; margin-bottom: 14px; }
    .scouting-skill-progress { height: 100%; background: #38bdf8; width: 0%; transition: width 0.8s cubic-bezier(0.1, 1, 0.1, 1); }
    .btn-copy-pitch { background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #34d399; padding: 8px 16px; border-radius: 6px; font-size: 0.85rem; cursor: pointer; font-weight: bold; width: 100%; margin-top: 10px; transition: all 0.2s; }
    .btn-copy-pitch:hover { background: #10b981; color: white; }

    .project-card.highlighted-by-scout { border: 2px solid #38bdf8 !important; box-shadow: 0 0 40px rgba(56, 189, 248, 0.35) !important; transform: scale(1.03) translateY(-5px); z-index: 5; }

    #toast-container { position: fixed; top: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
    .achievement-toast { background: rgba(15, 23, 42, 0.95); border-left: 4px solid #f59e0b; border-radius: 8px; padding: 12px 15px; display: flex; align-items: center; gap: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5); transform: translateX(120%); opacity: 0; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); min-width: 280px; }
    .achievement-toast.show { transform: translateX(0); opacity: 1; }
    .ach-icon { font-size: 2rem; background: rgba(245, 158, 11, 0.2); padding: 8px; border-radius: 50%; }
    .ach-text { display: flex; flex-direction: column; }
    .ach-text strong { color: #f59e0b; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; }
    .ach-title { color: white; font-weight: bold; font-size: 0.95rem; }
    .ach-desc { color: #94a3b8; font-size: 0.8rem; }

    /* ESTILOS DEL MAPA DE ARQUITECTURA */
    .tech-blueprint { background: #0f172a; border: 2px dashed #38bdf8; border-radius: 8px; height: 360px; position: relative; margin-top: 15px; overflow: hidden; background-image: linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px); background-size: 20px 20px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; padding: 10px 0; }
    .blueprint-zone { width: 85%; height: 25%; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px; display: flex; justify-content: center; align-items: center; gap: 12px; background: rgba(15, 23, 42, 0.6); position: relative; }
    .zone-frontend { border-color: #10b981; }
    .zone-frontend::before { content: 'CAPA CLIENTE'; position: absolute; top: -10px; left: 15px; background: #0f172a; padding: 0 5px; font-size: 0.65rem; color: #10b981; font-weight: bold; }
    .zone-backend { border-color: #f59e0b; }
    .zone-backend::before { content: 'CAPA SERVIDOR'; position: absolute; top: -10px; left: 15px; background: #0f172a; padding: 0 5px; font-size: 0.65rem; color: #f59e0b; font-weight: bold; }
    .zone-ai { border-color: #a855f7; }
    .zone-ai::before { content: 'CAPA IA (COPILOT, GEMINI, CLAUDE)'; position: absolute; top: -10px; left: 15px; background: #0f172a; padding: 0 5px; font-size: 0.65rem; color: #a855f7; font-weight: bold; }

    .tech-node { width: 40px; height: 40px; background: rgba(30, 41, 59, 0.9); border: 2px solid #38bdf8; border-radius: 8px; display: flex; justify-content: center; align-items: center; font-size: 1.1rem; box-shadow: 0 4px 8px rgba(0,0,0,0.4); cursor: pointer; transition: all 0.3s; position: relative; }
    .tech-node::after { content: attr(data-tech); position: absolute; bottom: -25px; background: rgba(0,0,0,0.9); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.2s; z-index: 20; }
    .tech-node:hover { transform: translateY(-5px) scale(1.1); box-shadow: 0 8px 15px rgba(56, 189, 248, 0.4); background: #38bdf8; color: #0f172a; z-index: 10; }
    .tech-node:hover::after { opacity: 1; }

    .api-bridge { height: 15%; width: 2px; border-left: 2px dashed #94a3b8; display: flex; align-items: center; justify-content: center; position: relative; }
    .api-bridge span { background: #0f172a; color: #94a3b8; font-size: 0.65rem; padding: 2px 4px; font-weight: bold; border-radius: 4px; border: 1px solid #94a3b8; }

    .boarding-pass-container { background: #f8fafc; border-radius: 12px; display: flex; overflow: hidden; color: #0f172a; margin-top: 15px; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
    .bp-left { flex: 3; padding: 20px; border-right: 2px dashed #cbd5e1; position: relative; }
    .bp-right { flex: 1; background: #38bdf8; padding: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; }
    .bp-left::before, .bp-left::after { content: ''; position: absolute; right: -12px; width: 24px; height: 24px; background: #0f172a; border-radius: 50%; }
    .bp-left::before { top: -12px; } .bp-left::after { bottom: -12px; }
    .bp-header { display: flex; justify-content: space-between; margin-bottom: 20px; font-weight: bold; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
    .bp-route { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .bp-city { text-align: center; }
    .bp-code { font-size: 2.2rem; font-weight: 900; letter-spacing: 2px; color: #0f172a; }
    .bp-name { font-size: 0.8rem; color: #64748b; text-transform: uppercase; }
    .bp-transport { font-size: 1.5rem; color: #38bdf8; display: flex; align-items: center; gap: 5px; }
    .bp-transport::before, .bp-transport::after { content: '---------'; letter-spacing: -2px; color: #cbd5e1; font-size: 1rem; }
    .bp-details { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 0.85rem; }
    .bp-label { color: #64748b; text-transform: uppercase; font-size: 0.7rem; font-weight: bold; }
    .bp-value { font-weight: bold; font-size: 1rem; }
    .bp-barcode { font-family: 'Courier New', monospace; font-size: 0.7rem; letter-spacing: 2px; text-align: center; transform: rotate(90deg); white-space: nowrap; }

    #projectsGrid { transition: filter 0.6s ease, opacity 0.6s ease; }
    body.guide-active #projectsGrid { filter: blur(8px); opacity: 0.4; pointer-events: none; }
    #recruiter-guide-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(4px); z-index: 9990; display: none; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.5s ease; }
    body.guide-active #recruiter-guide-overlay { display: flex; opacity: 1; }
    .guide-panel { background: rgba(30, 41, 59, 0.95); border: 2px solid #38bdf8; padding: 2.5rem; border-radius: 16px; max-width: 550px; text-align: center; box-shadow: 0 0 50px rgba(56, 189, 248, 0.3); }
    .btn-activate-scouting { background: #38bdf8; color: #0f172a; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 1rem; margin-top: 15px; transition: all 0.2s; }
    .btn-activate-scouting:hover { background: white; transform: translateY(-2px); }
    #guide-pointer { position: fixed; z-index: 9995; display: none; color: #38bdf8; font-size: 2.5rem; animation: pointArrow 1s infinite; pointer-events: none; }
    body.guide-active #guide-pointer { display: block; }
    @keyframes pointArrow { 0%, 100% { transform: translate(0, 0); opacity: 1; } 50% { transform: translate(0, -15px); opacity: 0.5; } }
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

    const grid = document.getElementById('projectsGrid');
    if (grid) {
        const centerHTML = `
            <div id="scouting-center">
                <div class="main-tabs">
                    <button class="main-tab-btn active" data-target="view-ats">Filtro ATS 📊</button>
                    <button class="main-tab-btn" data-target="view-tactics">Arquitectura 🏗️</button>
                    <button class="main-tab-btn" data-target="view-logistics">Logística ✈️</button>
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
                    <div style="color: white; font-size: 0.9rem; margin-bottom: 10px;">
                        <strong>Mapa de Arquitectura Full-Stack</strong><br>
                        <span style="color: #94a3b8; font-size: 0.8rem;">Ecosistema integrado con soporte de Copilot, Gemini y Claude.</span>
                    </div>
                    <div class="tech-blueprint">
                        <div class="blueprint-zone zone-ai">
                            <div class="tech-node" data-tech="Copilot">🤖</div>
                            <div class="tech-node" data-tech="Gemini">♊</div>
                            <div class="tech-node" data-tech="Claude">✨</div>
                        </div>
                        <div class="blueprint-zone zone-frontend">
                            <div class="tech-node" data-tech="HTML5">🌐</div>
                            <div class="tech-node" data-tech="CSS3">🎨</div>
                            <div class="tech-node" data-tech="Vanilla JS">JS</div>
                            <div class="tech-node" data-tech="DOM">DOM</div>
                        </div>
                        <div class="api-bridge"><span>API REST</span></div>
                        <div class="blueprint-zone zone-backend">
                            <div class="tech-node" data-tech="Node.js">🟢</div>
                            <div class="tech-node" data-tech=".env">🔐</div>
                            <div class="tech-node" data-tech="Git">🌿</div>
                            <div class="tech-node" data-tech="C/S">⚙️</div>
                        </div>
                    </div>
                </div>

                <div id="view-logistics" class="scouting-view" style="display: none;">
                    <div style="color: white; font-size: 0.9rem; margin-bottom: 10px;">
                        <strong>Logística de Movilidad y Alcance Global</strong>
                    </div>
                    <div class="boarding-pass-container">
                        <div class="bp-left">
                            <div class="bp-header">
                                <span>TECH AIRLINES</span>
                                <span>BOARDING PASS</span>
                            </div>
                            <div class="bp-route">
                                <div class="bp-city"><div class="bp-code">UY</div><div class="bp-name">Uruguay</div></div>
                                <div class="bp-transport">✈️ GLOBAL ✈️</div>
                                <div class="bp-city"><div class="bp-code">🌎</div><div class="bp-name">Remote</div></div>
                            </div>
                            <div class="bp-details">
                                <div><div class="bp-label">Desarrollador</div><div class="bp-value">Juan Garcia</div></div>
                                <div><div class="bp-label">Idiomas</div><div class="bp-value">ESP, ENG (B), PORT (B)</div></div>
                                <div><div class="bp-label">Movilidad</div><div class="bp-value">Remoto / Precencial. </div></div>
                                <div><div class="bp-label">Status</div><div class="bp-value" style="color: #10b981;">Ready to Deploy</div></div>
                            </div>
                        </div>
                        <div class="bp-right">
                            <div class="bp-barcode">||| |||| || ||| ||||| ||</div>
                            <div style="writing-mode: vertical-rl; transform: rotate(180deg); margin-top: 20px; font-weight: bold; letter-spacing: 2px;">GLOBAL</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforebegin', centerHTML);
    }

    const guideHTML = `
        <div id="recruiter-guide-overlay">
            <div class="guide-panel">
                <div style="font-size: 3rem; margin-bottom: 1rem;">💼</div>
                <h2>Vista de Auditoría Técnica</h2>
                <p>Detectada visita de perfil técnico. Activa este modo para acceder a los filtros ATS, el esquema táctico de arquitectura y la logística de disponibilidad.</p>
                <button class="btn-activate-scouting" id="btnGuideActivate">🔐 Desbloquear Panel</button>
            </div>
        </div>
        <div id="guide-pointer"><i class="fas fa-hand-point-up"></i></div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML + guideHTML);

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
        <div style="color: #e2e8f0; animation: fadeIn 0.4s ease;">
            <h4 style="color: white; border-left: 3px solid #38bdf8; padding-left: 10px;">${data.titulo}</h4>
            <p style="font-size: 0.95rem; color: #94a3b8; margin-bottom: 15px;">${data.pitch}</p>
            <div style="background: rgba(30, 41, 59, 0.5); padding: 15px; border-radius: 8px;">
                ${data.skills.map(sk => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: bold;">
                        <span>${sk.name}</span><span style="color: #38bdf8;">${sk.level}</span>
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
            this.innerHTML = "🏆 ¡Copiado!"; this.style.background = "#10b981"; this.style.color = "white";
            unlockAchievement('silver_rank', '¡Ascenso a Rango Plata!', 'Datos extraídos listos para reportar al mánager.', '🥈');
            setTimeout(() => { this.innerHTML = "Copiar Resumen para Reporte"; this.style.background = ""; this.style.color = ""; }, 2500);
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
            btnDemoHTML = `<a href="${proyecto.linkDemo}" target="_blank" class="btn" style="width: 100%; justify-content: center; background-color: #38bdf8; color: #0f172a; margin-bottom: 10px; border: none; font-weight: bold;"><i class="${icon}"></i> ${text}</a>`;
        }

        const cardHTML = `
            <article class="project-card glass-panel" id="${proyecto.id}" style="transition: all 0.3s ease;">
                <div class="project-image-container" style="height: 220px; background-color: rgba(15, 23, 42, 0.5); border-radius: 8px 8px 0 0; overflow: hidden; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--glass-border);">
                    <img src="${proyecto.imagen}" alt="Captura de ${proyecto.titulo}" class="project-image-preview" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                </div>
                <div class="project-content" style="padding: 1.8rem;">
                    <div class="project-tags project-tech">${proyecto.etiquetas.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                    <h3>${proyecto.titulo}</h3>
                    <p class="project-description">${proyecto.descripcion}</p>
                    <div class="project-challenge" style="margin-top: 1.2rem; background: rgba(255, 255, 255, 0.03); padding: 0.8rem; border-radius: 6px; font-size: 0.9rem; border-left: 3px solid var(--accent, #38bdf8);">
                        <strong>Foco Técnico:</strong> ${proyecto.desafio}
                    </div>
                    <div class="project-links" style="margin-top: 1.8rem; display: flex; flex-direction: column;">
                        ${btnDemoHTML}
                        <a href="${proyecto.linkGithub}" target="_blank" class="btn btn-outline" style="width: 100%; justify-content: center;"><i class="fab fa-github"></i> Código Fuente</a>
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

function toggleEmployerGuide(active) {
    const body = document.body;
    const toggle = document.getElementById('recruiterModeToggle');
    const pointer = document.getElementById('guide-pointer');

    if (active) {
        body.classList.add('guide-active');
        if (toggle && pointer) {
            const rect = toggle.getBoundingClientRect();
            pointer.style.top = (rect.bottom + window.scrollY + 15) + 'px';
            pointer.style.left = (rect.left + rect.width / 2 - 20) + 'px';
        }
    } else {
        body.classList.remove('guide-active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupRecruiterEnvironment();
    cargarProyectos();

    setTimeout(() => toggleEmployerGuide(true), 600);

    const recruiterToggle = document.getElementById('recruiterModeToggle');
    if (recruiterToggle) {
        recruiterToggle.addEventListener('change', () => {
            toggleEmployerGuide(false);
            if (recruiterToggle.checked) {
                document.body.classList.add('recruiter-mode-active');
                updateScoutingView('frontend');
                setTimeout(() => unlockAchievement('th5_ready', '¡Aldea Optimizada (TH5)!', 'Arquitectura base sólida y lista para inspección.', '🛡️'), 500);
            } else {
                document.body.classList.remove('recruiter-mode-active');
                document.querySelectorAll('.project-card').forEach(card => card.classList.remove('highlighted-by-scout'));
            }
        });
    }

    document.getElementById('btnGuideActivate')?.addEventListener('click', () => recruiterToggle?.click());

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('main-tab-btn')) {
            switchMainView(e.target.getAttribute('data-target'));
        }
        if (e.target.classList.contains('tab-btn')) {
            updateScoutingView(e.target.getAttribute('data-role'));
        }
    });
});