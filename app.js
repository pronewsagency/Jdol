const teamLogos = {
    'real_madrid': { url: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', keywords: ['real madrid', 'ريال مدريد', 'ريال', 'مدريد', 'ر.مدريد'] },
    'barcelona': { url: 'https://upload.wikimedia.org/wikipedia/sco/4/47/FC_Barcelona_%28crest%29.svg', keywords: ['barcelona', 'برشلونة', 'برشا', 'برشلونه'] },
    'liverpool': { url: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', keywords: ['liverpool', 'ليفربول'] },
    'manchester_united': { url: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', keywords: ['manchester united', 'مانشستر يونايتد', 'مانشستر', 'مان يونايتد'] },
    'paris_saint_germain': { url: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', keywords: ['paris saint-germain', 'ب.جيرمان', 'باريس', 'p.s.g', 'psg'] },
    'tirol': { url: 'https://upload.wikimedia.org/wikipedia/fr/5/5b/WSG_Swarovski_Tirol_%28logo%29.svg', keywords: ['تيرول'] },
    'Manchester city': { url: 'https://upload.wikimedia.org/wikipedia/sco/e/eb/Manchester_City_FC_badge.svg', keywords: ['م.سيتي'] },
    'Chelsea': { url: 'https://upload.wikimedia.org/wikipedia/sco/c/cc/Chelsea_FC.svg', keywords: ['تشيلسي'] },
    'Arsenal': { url: 'https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg', keywords: ['آرسنال'] },
    'Newcastle': { url: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg', keywords: ['نيوكاسل'] },
    'Alnasr': { url: 'https://upload.wikimedia.org/wikipedia/ar/a/ac/Al_Nassr_FC_Logo.svg', keywords: ['النصر'] },
    'Tottenham': { url: 'https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg', keywords: ['ت.هوتسبير'] },
};

function getTeamLogoUrl(teamName) {
    const formattedTeamName = teamName.toLowerCase().trim();
    
    for (const teamKey in teamLogos) {
        if (teamLogos[teamKey].keywords.includes(formattedTeamName)) {
            return teamLogos[teamKey].url;
        }
    }
    return null;
}
