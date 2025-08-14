    const teamLogos = {
        // الفرق العربية
      "Al-Nassr FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Al-Nassr_FC_logo.svg/1200px-Al-Nassr_FC_logo.svg.png", "keywords": ["النصر"] },
      "Al-Hilal SFC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Al-Hilal_SFC_logo.svg/1200px-Al-Hilal_SFC_logo.svg.png", "keywords": ["الهلال"] },
      "Al-Ahli Saudi FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Al_Ahli_Saudi_FC_logo.svg/1200px-Al_Ahli_Saudi_FC_logo.svg.png", "keywords": ["الأهلي"] },
      "Al-Ittihad Club": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Ittihad_FC_logo.svg/1200px-Ittihad_FC_logo.svg.png", "keywords": ["الاتحاد"] },
      "Al-Ahly SC (Egypt)": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Al_Ahly_SC_logo.svg/1200px-Al_Ahly_SC_logo.svg.png", "keywords": ["الأهلي المصري", "الأهلي"] },
      "Zamalek SC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Zamalek_SC.svg/1200px-Zamalek_SC.svg.png", "keywords": ["الزمالك"] },
      "Wydad AC": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wydad_Athletic_Club_logo.svg/1200px-Wydad_Athletic_Club_logo.svg.png", "keywords": ["الوداد", "wydad"] },
      "Raja CA": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Raja_Casablanca_logo.svg/1200px-Raja_Casablanca_logo.svg.png", "keywords": ["الرجاء", "raja"] },
      "ES Tunis": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Esp%C3%A9rance_Sportive_de_Tunis.svg/1200px-Esp%C3%A9rance_Sportive_de_Tunis.svg.png", "keywords": ["الترجي", "الترجي التونسي", "ES Tunis"] },
      
      // أندية الدوريات الأوروبية الخمس الكبرى
      "Real Madrid CF": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png", "keywords": ["ريال مدريد", "Real Madrid", "ريال"] },
      "FC Barcelona": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png", "keywords": ["برشلونة", "Barcelona"] },
      "Atlético Madrid": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png", "keywords": ["أتلتيكو مدريد", "Atletico Madrid"] },
      "Liverpool FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png", "keywords": ["ليفربول", "Liverpool"] },
      "Manchester City FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Manchester_City_F.C._logo.svg/1200px-Manchester_City_F.C._logo.svg.png", "keywords": ["مانشستر سيتي", "Man City", "مان سيتي", "م.سيتي"] },
      "Manchester United FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png", "keywords": ["مانشستر يونايتد", "Man Utd", "مان يونايتد", "مانيو"] },
      "Chelsea FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png", "keywords": ["تشيلسي", "Chelsea"] },
      "Arsenal FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png", "keywords": ["أرسنال", "Arsenal"] },
      "Newcastle United FC": { "url": "https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg", "keywords": ["نيوكاسل", "Newcastle"] },
      "Tottenham Hotspur FC": { "url": "https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg", "keywords": ["توتنهام", "Tottenham", "ت.هوتسبير"] },
      "Juventus FC": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Juventus_FC_logo.svg/1200px-Juventus_FC_logo.svg.png", "keywords": ["يوفنتوس", "Juventus"] },
      "AC Milan": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/AC_Milan_logo.svg/1200px-AC_Milan_logo.svg.png", "keywords": ["ميلان", "Milan", "اي سي ميلان"] },
      "FC Internazionale Milano": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png", "keywords": ["إنتر ميلان", "Inter Milan", "الإنتر"] },
      "Bayern Munich": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg.png", "keywords": ["بايرن ميونخ", "Bayern Munich"] },
      "Borussia Dortmund": { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png", "keywords": ["بروسيا دورتموند", "Dortmund"] },
      "Paris Saint-Germain F.C.": { "url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Paris_Saint-Germain_F.C._logo.svg/1200px-Paris_Saint-Germain_F.C._logo.svg.png", "keywords": ["باريس سان جيرمان", "PSG", "ب.جيرمان", "Paris Saint Germain"] },
      "WSG Tirol": { "url": "https://upload.wikimedia.org/wikipedia/fr/5/5b/WSG_Swarovski_Tirol_%28logo%29.svg", "keywords": ["تيرول"] }
    };
