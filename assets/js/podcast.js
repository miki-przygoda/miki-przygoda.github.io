function createPodcastCard({
    title,
    description,
    episodeNumber,
    link,
    date
}) {
    return `
        <div class="podcast-card">
            <div class="podcast-info">
                <h3>Episode ${episodeNumber}: ${title}</h3>
                <p>${description}</p>
                ${date ? `<span class="podcast-date">${date}</span>` : ''}
                <a href="${link}" class="podcast-link">Listen Now</a>
            </div>
        </div>
    `;
}