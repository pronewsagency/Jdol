    const teamLogos = {
        // ط§ظ„ظپط±ظ‚ ط§ظ„ط¹ط±ط¨ظٹط©
      "Al-Nassr FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Al-Nassr_FC_logo.svg/1200px-Al-Nassr_FC_logo.svg.png", "keywords": ["ط§ظ„ظ†طµط±"] },
      "Al-Hilal SFC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Al-Hilal_SFC_logo.svg/1200px-Al-Hilal_SFC_logo.svg.png", "keywords": ["ط§ظ„ظ‡ظ„ط§ظ„"] },
      "Al-Ahli Saudi FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Al_Ahli_Saudi_FC_logo.svg/1200px-Al_Ahli_Saudi_FC_logo.svg.png", "keywords": ["ط§ظ„ط£ظ‡ظ„ظٹ"] },
      "Al-Ittihad Club": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Ittihad_FC_logo.svg/1200px-Ittihad_FC_logo.svg.png", "keywords": ["ط§ظ„ط§طھط­ط§ط¯"] },
      "Al-Ahly SC (Egypt)": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Al_Ahly_SC_logo.svg/1200px-Al_Ahly_SC_logo.svg.png", "keywords": ["ط§ظ„ط£ظ‡ظ„ظٹ ط§ظ„ظ…طµط±ظٹ", "ط§ظ„ط£ظ‡ظ„ظٹ"] },
      "Zamalek SC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Zamalek_SC.svg/1200px-Zamalek_SC.svg.png", "keywords": ["ط§ظ„ط²ظ…ط§ظ„ظƒ"] },
      "Wydad AC": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wydad_Athletic_Club_logo.svg/1200px-Wydad_Athletic_Club_logo.svg.png", "keywords": ["ط§ظ„ظˆط¯ط§ط¯", "wydad"] },
      "Raja CA": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Raja_Casablanca_logo.svg/1200px-Raja_Casablanca_logo.svg.png", "keywords": ["ط§ظ„ط±ط¬ط§ط،", "raja"] },
      "ES Tunis": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Esp%C3%A9rance_Sportive_de_Tunis.svg/1200px-Esp%C3%A9rance_Sportive_de_Tunis.svg.png", "keywords": ["ط§ظ„طھط±ط¬ظٹ", "ط§ظ„طھط±ط¬ظٹ ط§ظ„طھظˆظ†ط³ظٹ", "ES Tunis"] },
      
      // ط£ظ†ط¯ظٹط© ط§ظ„ط¯ظˆط±ظٹط§طھ ط§ظ„ط£ظˆط±ظˆط¨ظٹط© ط§ظ„ط®ظ…ط³ ط§ظ„ظƒط¨ط±ظ‰
      "Real Madrid CF": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png", "keywords": ["ط±ظٹط§ظ„ ظ…ط¯ط±ظٹط¯", "Real Madrid", "ط±ظٹط§ظ„"] },
      "FC Barcelona": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png", "keywords": ["ط¨ط±ط´ظ„ظˆظ†ط©", "Barcelona"] },
      "Atlأ©tico Madrid": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png", "keywords": ["ط£طھظ„طھظٹظƒظˆ ظ…ط¯ط±ظٹط¯", "Atletico Madrid"] },
      "Liverpool FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png", "keywords": ["ظ„ظٹظپط±ط¨ظˆظ„", "Liverpool"] },
      "Manchester City FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Manchester_City_F.C._logo.svg/1200px-Manchester_City_F.C._logo.svg.png", "keywords": ["ظ…ط§ظ†ط´ط³طھط± ط³ظٹطھظٹ", "Man City", "ظ…ط§ظ† ط³ظٹطھظٹ", "ظ….ط³ظٹطھظٹ"] },
      "Manchester United FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png", "keywords": ["ظ…ط§ظ†ط´ط³طھط± ظٹظˆظ†ط§ظٹطھط¯", "Man Utd", "ظ…ط§ظ† ظٹظˆظ†ط§ظٹطھط¯", "ظ…ط§ظ†ظٹظˆ"] },
      "Chelsea FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png", "keywords": ["طھط´ظٹظ„ط³ظٹ", "Chelsea"] },
      "Arsenal FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png", "keywords": ["ط£ط±ط³ظ†ط§ظ„", "Arsenal"] },
      "Newcastle United FC": { "url": "https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg", "keywords": ["ظ†ظٹظˆظƒط§ط³ظ„", "Newcastle"] },
      "Tottenham Hotspur FC": { "url": "https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg", "keywords": ["طھطھظ†ظ‡ط§ظ…", "Tottenham", ".ظ‡ظˆطھط³ط¨ظٹط±"] },
      "Juventus FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Juventus_FC_logo.svg/1200px-Juventus_FC_logo.svg.png", "keywords": ["ظٹظˆظپظ†طھظˆط³", "Juventus"] },
      "AC Milan": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/AC_Milan_logo.svg/1200px-AC_Milan_logo.svg.png", "keywords": ["ظ…ظٹظ„ط§ظ†", "Milan", "ط§ظٹ ط³ظٹ ظ…ظٹظ„ط§ظ†"] },
      "FC Internazionale Milano": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png", "keywords": ["ط¥ظ†طھط± ظ…ظٹظ„ط§ظ†", "Inter Milan", "ط§ظ„ط¥ظ†طھط±"] },
      "Bayern Munich": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg.png", "keywords": ["ط¨ط§ظٹط±ظ† ظ…ظٹظˆظ†ط®", "Bayern Munich"] },
      "Borussia Dortmund": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png", "keywords": ["ط¨ط±ظˆط³ظٹط§ ط¯ظˆط±طھظ…ظˆظ†ط¯", "Dortmund"] },
      "Paris Saint-Germain F.C.": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Paris_Saint-Germain_F.C._logo.svg/1200px-Paris_Saint-Germain_F.C._logo.svg.png", "keywords": ["ط¨ط§ط±ظٹط³ ط³ط§ظ† ط¬ظٹط±ظ…ط§ظ†", "PSG", "ط¨ط§ط±ظٹط³", "ط¨.ط¬ظٹط±ظ…ط§ظ†"] },
      "WSG Tirol": { "url": "https://upload.wikimedia.org/wikipedia/fr/5/5b/WSG_Swarovski_Tirol_%28logo%29.svg", "keywords": ["طھظٹط±ظˆظ„"] }
    };
