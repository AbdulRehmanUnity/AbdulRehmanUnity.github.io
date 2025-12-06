// Main application logic
class Portfolio {
    constructor() {
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.projects = [];
        this.init();
    }

    async init() {
        this.setupNavigation();
        await this.loadProjects();
        this.loadPage();
    }

    async loadProjects() {
        try {
            this.projects = await window.projectLoader.getProjects();
        } catch (error) {
            console.error('Failed to load projects:', error);
            this.projects = [];
        }
    }

    setupNavigation() {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateActiveNav();
        });
    }

    updateActiveNav() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(this.currentPage)) {
                link.classList.add('active');
            }
        });
    }

    loadPage() {
        if (this.currentPage === 'index.html' || this.currentPage === '') {
            this.renderHomePage();
        } else if (this.currentPage === 'resume.html') {
            this.renderResumePage();
        } else if (this.currentPage.startsWith('project-')) {
            this.renderProjectPage();
        }
    }

    renderHomePage() {
        this.renderAboutSection();
        this.renderProjectsSection(4);
    }

    renderAboutSection() {
        const aboutContainer = document.getElementById('about-section');
        if (!aboutContainer) return;

        const interestsText = bio.interests.map(interest => interest.name).join(', ');
        
        const socialIcons = this.generateSocialIcons();

        aboutContainer.innerHTML = `
            <div style="background-color: var(--tf-page-bg-color)" class="bg-gradient py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <img width="300px" src="${bio.basics.picture}" class="d-block mx-auto rounded-circle">
                        </div>
                        <div class="col-lg-8">
                            <h1 class="display-4 text-center">${bio.basics.name}</h1>
                            <p class="lead text-center">${bio.basics.label}</p>
                            <p class="lead">${bio.basics.summary}</p>
                            <hr class="my-4">
                            <p class="lead m-0">
                                Interests: ${interestsText}
                            </p>
                            <hr class="my-4">
                            <div class="row">
                                ${socialIcons}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateSocialIcons() {
        let icons = '';
        
        if (bio.basics.website) {
            icons += `
                <div class="col text-center">
                    <a href="${bio.basics.website}">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                    </a>
                </div>
            `;
        }

        if (bio.basics.email) {
            icons += `
                <div class="col text-center">
                    <a href="mailto:${bio.basics.email}">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                    </a>
                </div>
            `;
        }

        bio.basics.profiles.forEach(profile => {
            const iconName = profile.network.toLowerCase();
            let iconSvg = '';
            
            if (iconName === 'github') {
                iconSvg = `
                    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                `;
            } else if (iconName === 'linkedin') {
                iconSvg = `
                    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                `;
            }

            if (iconSvg) {
                icons += `
                    <div class="col text-center">
                        <a href="${profile.url}">${iconSvg}</a>
                    </div>
                `;
            }
        });

        return icons;
    }

    renderProjectsSection(limit = null) {
        const projectsContainer = document.getElementById('projects-section');
        if (!projectsContainer) return;

        const sortedProjects = [...this.projects].sort((a, b) => parseInt(b.date) - parseInt(a.date));
        const displayProjects = limit ? sortedProjects.slice(0, limit) : sortedProjects;
        
        let projectsHtml = displayProjects.map(project => this.generateProjectCard(project)).join('');
        
        let showAllLink = '';
        if (limit && this.projects.length > limit) {
            showAllLink = `<p class="text-center pt-4"><a href="projects.html">See all ${this.projects.length} projects</a></p>`;
        }

        projectsContainer.innerHTML = `
            <div style="background-color: var(--tf-projects-bg-color)" class="bg-gradient py-3" id="projects">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <h2 class="display-4 text-start">Projects</h2>
                        </div>
                    </div>
                    <div class="vstack gap-3">
                        ${projectsHtml}
                    </div>
                    ${showAllLink}
                </div>
            </div>
        `;
    }

    generateProjectCard(project) {
        const labels = project.labels.map(label => `<span class="badge bg-secondary me-1">${label}</span>`).join('');
        
        return `
            <a href="projects.html?id=${project.id}" class="text-decoration-none">
                <div class="card project-card">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${project.image}" class="project-icon" alt="${project.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-dark">${project.title}</h5>
                                <p class="card-text text-muted">${project.summary}</p>
                                <div class="project-labels">
                                    ${labels}
                                </div>
                                <p class="card-text"><small class="text-muted">${project.date}</small></p>
                                <div class="mt-2">
                                    <small class="text-primary">Click to view details →</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        `;
    }

    renderResumePage() {
        const resumeContainer = document.getElementById('resume-content');
        if (!resumeContainer) return;

        resumeContainer.innerHTML = this.generateResumeHTML();
    }

    generateResumeHTML() {
        const workExperience = bio.work.map(job => `
            <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="mb-0">${job.position}</h5>
                    <small class="text-muted">${job.startDate} - ${job.endDate}</small>
                </div>
                <h6 class="text-primary mb-1">${job.company}</h6>
                <p class="mb-2">${job.summary}</p>
                <ul class="mb-0">
                    ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        `).join('');

        const education = bio.education.map(edu => `
            <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="mb-0">${edu.studyType} in ${edu.area}</h5>
                    <small class="text-muted">${edu.startDate} - ${edu.endDate}</small>
                </div>
                <h6 class="text-primary mb-1">${edu.institution}</h6>
            </div>
        `).join('');

        const skills = bio.skills.map(skill => `
            <div class="mb-3">
                <h6>${skill.name}</h6>
                <p>${skill.keywords.join(', ')}</p>
            </div>
        `).join('');

        const awards = bio.awards.map(award => `
            <div class="mb-3">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <h6 class="mb-0">${award.title}</h6>
                    <small class="text-muted">${award.date}</small>
                </div>
                <p class="text-primary mb-0">${award.awarder}</p>
            </div>
        `).join('');

        return `
            <div style="background-color: var(--tf-page-bg-color)" class="bg-gradient py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <img width="300px" src="${bio.basics.picture}" class="d-block mx-auto rounded-circle mb-4">
                            <div class="text-center mb-4">
                                <h3>${bio.basics.name}</h3>
                                <p class="lead">${bio.basics.label}</p>
                                <div class="contact-info">
                                    <p><strong>Email:</strong> ${bio.basics.email}</p>
                                    <p><strong>Phone:</strong> ${bio.basics.phone}</p>
                                    <p><strong>Location:</strong> ${bio.basics.location.city}, ${bio.basics.location.region}</p>
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <h4>Skills</h4>
                                ${skills}
                            </div>
                            
                            <div class="mb-4">
                                <h4>Awards</h4>
                                ${awards}
                            </div>
                        </div>
                        
                        <div class="col-lg-8">
                            <div class="mb-4">
                                <h4>Professional Summary</h4>
                                <p>${bio.basics.summary}</p>
                            </div>
                            
                            <div class="mb-4">
                                <h4>Work Experience</h4>
                                ${workExperience}
                            </div>
                            
                            <div class="mb-4">
                                <h4>Education</h4>
                                ${education}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize the application
new Portfolio();