const teamLogos = {
    "real_madrid": {
        url: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        keywords: ["real madrid", "ريال مدريد", "ريال", "مدريد"]
    },
    "barcelona": {
        url: "https://upload.wikimedia.org/wikipedia/sco/4/47/FC_Barcelona_%28crest%29.svg",
        keywords: ["barcelona", "برشلونة", "برشا", "برشلونه"]
    },
    "liverpool": {
        url: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        keywords: ["liverpool", "ليفربول"]
    },
    "manchester_united": {
        url: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        keywords: ["manchester united", "مانشستر يونايتد", "مانشستر", "مان يونايتد"]
    },
    "paris_saint_germain": {
        url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        keywords: ["paris saint-germain", "باريس سان جيرمان", "باريس", "p.s.g", "psg"]
    }
};

function getTeamLogoUrl(teamName) {
    console.log("Team name received:", teamName); // يساعد في الفحص
    const formattedTeamName = teamName.toLowerCase().trim();
    console.log("Formatted team name:", formattedTeamName); // يساعد في الفحص
    
    for (const teamKey in teamLogos) {
        if (teamLogos[teamKey].keywords.includes(formattedTeamName)) {
            console.log("Match found for:", formattedTeamName, "URL:", teamLogos[teamKey].url); // يساعد في الفحص
            return teamLogos[teamKey].url;
        }
    }
    console.log("No match found for:", formattedTeamName); // يساعد في الفحص
    return null;
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
