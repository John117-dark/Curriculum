// Renderizar Certificaciones
function renderCertifications() {
    if (resumeData.certifications && resumeData.certifications.length > 0) {
        const certificationsRow = document.getElementById('certificationsRow');
        certificationsRow.style.display = 'block';
        
        const certificationsContainer = document.getElementById('certificationsContainer');
        certificationsContainer.innerHTML = '';
        
        resumeData.certifications.forEach(cert => {
            const certDiv = document.createElement('div');
            certDiv.className = 'certificate-card';
            certDiv.innerHTML = `
                <div class="d-flex align-items-start gap-3">
                    <div class="certificate-icon">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="mb-1">${cert.name}</h6>
                        <p class="text-muted small mb-0">${cert.issuer}</p>
                        <span class="badge bg-success mt-2">${cert.year}</span>
                    </div>
                </div>
            `;
            certificationsContainer.appendChild(certDiv);
        });
    }
}// Datos del currículum
const resumeData = {
    name: 'Juan Eduardo Salinas Ruiz',
    title: 'Ingeniero en Sistemas Computacionales',
    email: 'crackdown2004@outlook.com',
    phone: '636-135-27-51',
    location: 'Nuevo Casas Grandes, Chihuahua',
    bio: 'Ingeniero en Sistemas Computacionales apasionado por el desarrollo web y las nuevas tecnologías. Con experiencia en desarrollo full stack y capacidad para resolver problemas complejos de manera innovadora.',
    github: 'https://github.com/john117-dark',
    
    technicalSkills: [
        'JavaScript', 'HTML/CSS', 'Node.js', 
        'Python', 'Bootstrap', 'Git',
        'SQL', 'Vue.js' , 'MySQL',
        'PHP' , 'Excel'
    ],
    
    softSkills: [
        'Resolución de problemas',
        'Trabajo en equipo',
        'Pensamiento crítico',
        'Creatividad',
        'Comunicación efectiva',
        'Adaptabilidad',
    ],
    
    experience: [
        {
            period: '2022 - 2024',
            role: 'Empleado en Comercio',
            company: 'Ayuntamiento de Nuevo Casas Grandes',
            description: 'Encargado del cobro en comercio local, atencion a la comunidad y manejo de efectivo.',
            achievements: [
                'Desarrollo de habilidades interpersonales que mejoraron la atención al cliente',
                'Optimización de procesos de cobro',
                'Trabajo efectivo en equipo'
            ]
        }
    ],
    
    education: [
        {
            year: '2022 - 2026',
            degree: 'Ingeniería en Sistemas Computacionales',
            school: 'Instituto Tecnológico Superior de Nuevo Casas Grandes',
            status: 'En curso'
        },
        {
            year: '2019 - 2022',
            degree: 'Diploma Técnico en Informática',
            school: 'CETIS 93 - Centro de Estudios Tecnológicos Industriales y de Servicios',
            status: 'Completado'
        }
    ],
    
    certifications: [
        
    ]
};

// Configuración de GitHub
const GITHUB_USERNAME = 'john117-dark';

// Elementos del DOM
const skillsContainer = document.getElementById('skillsContainer');
const experienceContainer = document.getElementById('experienceContainer');
const educationContainer = document.getElementById('educationContainer');
const projectsContainer = document.getElementById('projectsContainer');
const contactContainer = document.getElementById('contactContainer');
const githubUserInput = document.getElementById('githubUser');
const loadBtn = document.getElementById('loadBtn');
const loadingSpinner = document.getElementById('loadingSpinner');

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    renderBio();
    renderSkills();
    renderSoftSkills();
    renderExperience();
    renderEducation();
    renderContact();
    updateNavbar();
    
    // Cargar proyectos automáticamente
    loadGithubProjects();
    
    // Permitir recargar proyectos si se desea
    loadBtn.addEventListener('click', loadGithubProjects);
});

// Renderizar Perfil
function renderBio() {
    const bioContainer = document.getElementById('bioContainer');
    bioContainer.textContent = resumeData.bio;
}

// Renderizar Habilidades Técnicas
function renderSkills() {
    skillsContainer.innerHTML = '';
    
    const row = document.createElement('div');
    row.className = 'row';
    
    resumeData.technicalSkills.forEach((skill, index) => {
        if (index % 2 === 0) {
            const col = document.createElement('div');
            col.className = 'col-md-6';
            
            const skillDiv = document.createElement('div');
            skillDiv.className = 'mb-2';
            skillDiv.innerHTML = `
                <span class="skill-badge">
                    <i class="fas fa-check-circle"></i> ${skill}
                </span>
            `;
            col.appendChild(skillDiv);
            row.appendChild(col);
        } else {
            const lastCol = row.lastChild;
            const skillDiv = document.createElement('div');
            skillDiv.className = 'mb-2';
            skillDiv.innerHTML = `
                <span class="skill-badge">
                    <i class="fas fa-check-circle"></i> ${skill}
                </span>
            `;
            lastCol.appendChild(skillDiv);
        }
    });
    
    skillsContainer.appendChild(row);
}

// Renderizar Habilidades Blandas
function renderSoftSkills() {
    const softSkillsContainer = document.getElementById('softSkillsContainer');
    softSkillsContainer.innerHTML = '';
    
    const row = document.createElement('div');
    row.className = 'row';
    
    resumeData.softSkills.forEach((skill, index) => {
        if (index % 2 === 0) {
            const col = document.createElement('div');
            col.className = 'col-md-6';
            
            const skillDiv = document.createElement('div');
            skillDiv.className = 'mb-2';
            skillDiv.innerHTML = `
                <span class="skill-badge">
                    <i class="fas fa-star"></i> ${skill}
                </span>
            `;
            col.appendChild(skillDiv);
            row.appendChild(col);
        } else {
            const lastCol = row.lastChild;
            const skillDiv = document.createElement('div');
            skillDiv.className = 'mb-2';
            skillDiv.innerHTML = `
                <span class="skill-badge">
                    <i class="fas fa-star"></i> ${skill}
                </span>
            `;
            lastCol.appendChild(skillDiv);
        }
    });
    
    softSkillsContainer.appendChild(row);
}

// Renderizar Experiencia
function renderExperience() {
    experienceContainer.innerHTML = '';
    resumeData.experience.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        
        let achievementsHTML = '';
        if (exp.achievements) {
            achievementsHTML = `
                <div class="mt-3 ms-3">
                    <strong class="text-muted" style="font-size: 0.9rem;">Logros:</strong>
                    <ul class="small text-muted mb-0" style="margin-top: 8px;">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                    <h5>${exp.role}</h5>
                    <span class="badge bg-primary">${exp.period}</span>
                </div>
            </div>
            <p class="text-primary fw-bold mb-2">${exp.company}</p>
            <p class="text-muted mb-1">${exp.description}</p>
            ${achievementsHTML}
        `;
        experienceContainer.appendChild(card);
    });
}

// Renderizar Educación
function renderEducation() {
    educationContainer.innerHTML = '';
    
    resumeData.education.forEach(edu => {
        const col = document.createElement('div');
        col.className = 'mb-3';
        col.innerHTML = `
            <div class="education-card">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <h5><i class="fas fa-graduation-cap"></i> ${edu.degree}</h5>
                        <p class="text-muted mb-2">${edu.school}</p>
                        <div>
                            <span class="badge bg-secondary me-2">${edu.year}</span>
                            <span class="badge bg-info">${edu.status}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        educationContainer.appendChild(col);
    });
}

// Renderizar Contacto
function renderContact() {
    contactContainer.innerHTML = '';
    
    const contacts = [
        {
            icon: 'fa-envelope',
            label: 'Correo Electrónico',
            value: resumeData.email,
            link: `mailto:${resumeData.email}`,
            isLink: false
        },
        {
            icon: 'fa-phone',
            label: 'Teléfono',
            value: resumeData.phone,
            link: `tel:${resumeData.phone}`,
            isLink: false
        },
        {
            icon: 'fab fa-github',
            label: 'GitHub',
            value: 'github.com/john117-dark',
            link: resumeData.github,
            isLink: true
        }
    ];
    
    contacts.forEach(contact => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-4';
        col.innerHTML = `
            <a href="${contact.link}" class="contact-card text-decoration-none" ${contact.isLink ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                <i class="fas ${contact.icon}"></i>
                <h5>${contact.label}</h5>
                <p>${contact.value}</p>
            </a>
        `;
        contactContainer.appendChild(col);
    });
}

// Cargar Proyectos de GitHub
async function loadGithubProjects() {
    const username = GITHUB_USERNAME;
    
    showLoading(true);
    projectsContainer.innerHTML = '';
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
            throw new Error('No se pudo cargar los proyectos de GitHub');
        }
        
        const repos = await response.json();
        const filteredRepos = repos.filter(repo => !repo.fork).slice(0, 6);
        
        if (filteredRepos.length === 0) {
            projectsContainer.innerHTML = `
                <div class="col-12 text-center text-muted">
                    <p>No se encontraron proyectos públicos</p>
                </div>
            `;
        } else {
            renderProjects(filteredRepos);
        }
    } catch (error) {
        projectsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    <i class="fas fa-exclamation-circle"></i> Error: ${error.message}
                </div>
            </div>
        `;
    } finally {
        showLoading(false);
    }
}

// Renderizar Proyectos
function renderProjects(projects) {
    projectsContainer.innerHTML = '';
    
    projects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        const language = project.language || 'No especificado';
        const description = project.description || 'Sin descripción disponible';
        const topics = project.topics ? project.topics.slice(0, 2) : [];
        
        let tagsHTML = '';
        topics.forEach(topic => {
            tagsHTML += `<span class="badge bg-light text-dark">${topic}</span>`;
        });
        
        col.innerHTML = `
            <div class="project-card">
                <div class="project-card-header">
                    <i class="fab fa-github fa-2x"></i>
                    ${project.language ? `<span class="language-badge">${language}</span>` : ''}
                </div>
                <div class="project-card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${description}</p>
                    ${tagsHTML ? `<div class="project-tags">${tagsHTML}</div>` : ''}
                    <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
                        Ver Repositorio
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(col);
    });
}

// Mostrar/Ocultar Loading
function showLoading(isLoading) {
    if (isLoading) {
        loadingSpinner.classList.remove('d-none');
        loadBtn.disabled = true;
    } else {
        loadingSpinner.classList.add('d-none');
        loadBtn.disabled = false;
    }
}

// Actualizar navbar al hacer scroll
function updateNavbar() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Smooth scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Cerrar navbar en móvil
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        }
    });
});