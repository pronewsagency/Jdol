const teamLogos = {
    "real_madrid": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    "barcelona": "https://upload.wikimedia.org/wikipedia/ar/b/ba/FC_Barcelona_logo.svg",
    "liverpool": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    "manchester_united": "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    "paris_saint_germain": "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
};

function getTeamLogoUrl(teamName) {
    const formattedTeamName = teamName.toLowerCase().replace(/ /g, '_');
    return teamLogos[formattedTeamName] || null;
}

function displayTeamLogo(teamName, imageElementId) {
    const logoUrl = getTeamLogoUrl(teamName);
    const imageElement = document.getElementById(imageElementId);

    if (imageElement && logoUrl) {
        imageElement.src = logoUrl;
        imageElement.alt = `شعار فريق ${teamName}`;
    } else if (imageElement) {
        imageElement.src = "";
        imageElement.alt = `شعار ${teamName} غير متوفر`;
    }
}
