function createPodcastCard({
    title,
    description,
    image,
    imageAlt,
    episodeNumber,
    link,
    date
}) {
    return `
        <div class="podcast-card">
            <div class="podcast-image">
                <img src="${image}" alt="${imageAlt || title}">
            </div>
            <div class="podcast-info">
                <h3>Episode ${episodeNumber}: ${title}</h3>
                <p>${description}</p>
                ${date ? `<span class="podcast-date">${date}</span>` : ''}
                <a href="${link}" class="podcast-link">Listen Now</a>
            </div>
        </div>
    `;
}