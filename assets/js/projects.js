function createProjectCard({
    title,
    description,
    image,
    imageAlt,
    technologies,
    githubLink,
    projectLink
}) {
    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${image}" alt="${imageAlt || title}">
            </div>
            <div class="project-info">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="project-tags">
                    ${technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${githubLink ? `<a href="${githubLink}" class="btn small secondary" target="_blank">GitHub</a>` : ''}
                    ${projectLink ? `<a href="${projectLink}" class="btn small primary" target="_blank">View Project</a>` : ''}
                </div>
            </div>
        </div>
    `;
}