/* eslint-disable no-undef */
print("About to remove " + db.yeasts.count({}) + " yeasts...");
db.yeasts.remove({});
print("Inserting yeasts...");
db.yeasts.insert([{
    "name": "Ale yeast",
    "aa": 75.0
  },
  {
    "name": "Lager yeast",
    "aa": 75.0
  },
  {
    "name": "Safbrew T-58",
    "aa": 75.0
  },
  {
    "name": "Safbrew S-33",
    "aa": 75.0
  },
  {
    "name": "Safbrew WB-06",
    "aa": 75.0
  },
  {
    "name": "Safale S-04",
    "aa": 75.0
  },
  {
    "name": "Safale US-05",
    "aa": 78.0
  },
  {
    "name": "Safale K-97",
    "aa": 75.0
  },
  {
    "name": "Saflager S-23",
    "aa": 75.0
  },
  {
    "name": "Saflager S-189",
    "aa": 75.0
  },
  {
    "name": "Saflager W-34/70",
    "aa": 75.0
  },
  {
    "name": "Safeale S-04",
    "aa": 75.0
  },
  {
    "name": "Danstar Munich",
    "aa": 75.0
  },
  {
    "name": "Danstar Nottingham",
    "aa": 82.0
  },
  {
    "name": "Danstar Bry-97",
    "aa": 80.0
  },
  {
    "name": "Danstar Windsor",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1007 - German Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1010 - American Wheat",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1028 - London Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1056 - American Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1084 - Irish Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1098 - British Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1099 - Whitbread Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1187 - Ringwood Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1272 - American Ale II",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1275 - Thames Valley Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1318 - London Ale III",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1332 - Northwest Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1335 - British Ale II",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1338 - European Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1469 - West Yorkshire Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1728 - Scottish Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1968 - London ESB Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2565 - Kölsch",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2000 - Budvar Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2001 - Urquell Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2007 - Pilsen Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2035 - American Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2042 - Danish Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2112 - California Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2124 - Bohemian Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2206 - Bavarian Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2278 - Czech Pils",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2308 - Munich Lager",
    "aa": 75.0
  },
  {
    "name": "Wyeast 2633 - Octoberfest Lager Blend",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1214 - Belgian Abbey",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1388 - Belgian Strong Ale",
    "aa": 75.0
  },
  {
    "name": "Wyeast 1762 - Belgian Abbey II",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3056 - Bavarian Wheat Blend",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3068 - Weihenstephan Weizen",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3278 - Belgian Lambic Blend",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3333 - German Wheat",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3463 - Forbidden Fruit",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3522 - Belgian Ardennes",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3638 - Bavarian Wheat",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3724 - Belgian Saison",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3787 - Trappist High Gravity",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3942 - Belgian Wheat",
    "aa": 75.0
  },
  {
    "name": "Wyeast 3944 - Belgian Witbier",
    "aa": 75.0
  },
  {
    "name": "Wyeast 5112 - Brettanomyces bruxellensis",
    "aa": 75.0
  },
  {
    "name": "Wyeast 5335 - Lactobacillus",
    "aa": 75.0
  },
  {
    "name": "Wyeast 5526 - Brettanomyces lambicus",
    "aa": 75.0
  },
  {
    "name": "Wyeast 5733 - Pediococcus",
    "aa": 75.0
  },
  {
    "name": "WLP001 - California Ale",
    "aa": 75.0
  },
  {
    "name": "WLP002 - English Ale",
    "aa": 75.0
  },
  {
    "name": "WLP004 - Irish Ale",
    "aa": 75.0
  },
  {
    "name": "WLP005 - British Ale",
    "aa": 75.0
  },
  {
    "name": "WLP006 - Bedford British",
    "aa": 75.0
  },
  {
    "name": "WLP007 - Dry English Ale",
    "aa": 75.0
  },
  {
    "name": "WLP008 - East Coast Ale",
    "aa": 75.0
  },
  {
    "name": "WLP009 - Australian Ale",
    "aa": 75.0
  },
  {
    "name": "WLP011 - European Ale",
    "aa": 75.0
  },
  {
    "name": "WLP013 - London Ale",
    "aa": 75.0
  },
  {
    "name": "WLP022 - Essex Ale",
    "aa": 75.0
  },
  {
    "name": "WLP023 - Burton Ale",
    "aa": 75.0
  },
  {
    "name": "WLP026 - Premium Bitter Ale",
    "aa": 75.0
  },
  {
    "name": "WLP028 - Edinburgh Scottish Ale",
    "aa": 75.0
  },
  {
    "name": "WLP029 - German Ale/Kolsch",
    "aa": 75.0
  },
  {
    "name": "WLP036 - Dusseldorf Alt",
    "aa": 75.0
  },
  {
    "name": "WLP037 - Yorkshire Square Ale",
    "aa": 75.0
  },
  {
    "name": "WLP038 - Manchester Ale Yeast",
    "aa": 75.0
  },
  {
    "name": "WLP039 - Nottingham Ale",
    "aa": 75.0
  },
  {
    "name": "WLP041 - Pacific Ale",
    "aa": 75.0
  },
  {
    "name": "WLP060 - American Ale Yeast Blend",
    "aa": 75.0
  },
  {
    "name": "WLP072 - French Ale",
    "aa": 75.0
  },
  {
    "name": "WLP080 - Cream Ale Blend",
    "aa": 75.0
  },
  {
    "name": "WLP099 - Super High Gravity Ale",
    "aa": 75.0
  },
  {
    "name": "WLP300 - Hefeweizen Ale",
    "aa": 75.0
  },
  {
    "name": "WLP320 - American Hefeweizen Ale",
    "aa": 75.0
  },
  {
    "name": "WLP351 - Bavarian Weizen",
    "aa": 75.0
  },
  {
    "name": "WLP380 - Hefeweizen IV Ale",
    "aa": 75.0
  },
  {
    "name": "WLP400 - Belgian Wit Ale",
    "aa": 75.0
  },
  {
    "name": "WLP410 - Belgian Wit II Ale",
    "aa": 75.0
  },
  {
    "name": "WLP500 - Trappist Ale",
    "aa": 75.0
  },
  {
    "name": "WLP510 - Belgian Bastogne Ale",
    "aa": 75.0
  },
  {
    "name": "WLP515 - Antwerp Ale",
    "aa": 75.0
  },
  {
    "name": "WLP530 - Abbey Ale",
    "aa": 75.0
  },
  {
    "name": "WLP540 - Abbey IV Ale",
    "aa": 75.0
  },
  {
    "name": "WLP545 - Belgian Strong Ale",
    "aa": 75.0
  },
  {
    "name": "WLP550 - Belgian Ale",
    "aa": 75.0
  },
  {
    "name": "WLP565 - Belgian Saison I",
    "aa": 75.0
  },
  {
    "name": "WLP566 - Belgian Saison II",
    "aa": 75.0
  },
  {
    "name": "WLP568 - Belgian Style Saison Ale Blend",
    "aa": 75.0
  },
  {
    "name": "WLP570 - Belgian Golden Ale",
    "aa": 75.0
  },
  {
    "name": "WLP575 - Belgian Style Ale Blend",
    "aa": 75.0
  },
  {
    "name": "WLP800 - Pilsner Lager",
    "aa": 75.0
  },
  {
    "name": "WLP802 - Czech Budejovice Lager",
    "aa": 75.0
  },
  {
    "name": "WLP810 - San Francisco Lager",
    "aa": 75.0
  },
  {
    "name": "WLP820 - Oktoberfest/Märzen Lager",
    "aa": 75.0
  },
  {
    "name": "WLP830 - German Lager",
    "aa": 75.0
  },
  {
    "name": "WLP833 - German Bock Lager",
    "aa": 75.0
  },
  {
    "name": "WLP838 - Southern German Lager",
    "aa": 75.0
  },
  {
    "name": "WLP840 - American Lager",
    "aa": 75.0
  },
  {
    "name": "WLP862 - Cry Havoc",
    "aa": 75.0
  },
  {
    "name": "WLP885 - Zurich Lager",
    "aa": 75.0
  },
  {
    "name": "WLP940 - Mexican Lager",
    "aa": 75.0
  },
  {
    "name": "WLP645 - Brettanomyces claussenii",
    "aa": 75.0
  },
  {
    "name": "WLP650 - Brettanomyces bruxellensis",
    "aa": 75.0
  },
  {
    "name": "WLP653 - Brettanomyces lambicus",
    "aa": 75.0
  },
  {
    "name": "WLP655 - Belgian Sour Mix 1",
    "aa": 75.0
  },
  {
    "name": "WLP675 - Malolactic Bacteria",
    "aa": 75.0
  },
  {
    "name": "WLP677 - Lactobacillus Bacteria",
    "aa": 75.0
  },
  {
    "name": "PRO-09 - AMERICAN ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-10 - AMERICAN SIERRA ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-11 - ENGLISH LONDON ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-12 - IRISH ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-13 - ENGLISH RINGWOOD",
    "aa": 75.0
  },
  {
    "name": "PRO-14 - ENGLISH LONDON OAK",
    "aa": 75.0
  },
  {
    "name": "PRO-15 - ENGLISH THAMES ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-16 - GERMAN KOLSCH",
    "aa": 75.0
  },
  {
    "name": "PRO-17 - BREWER’S MATE",
    "aa": 75.0
  },
  {
    "name": "PRO-18 - GERMAN HEFEWEIZEN",
    "aa": 75.0
  },
  {
    "name": "PRO-19 - BELGIAN WHITE",
    "aa": 75.0
  },
  {
    "name": "PRO-20 - BELGIAN TRAPPIST ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-21 - BELGIAN ACHOUFFE",
    "aa": 75.0
  },
  {
    "name": "PRO-22 - BELGIAN SAISON",
    "aa": 75.0
  },
  {
    "name": "PRO-23 - CZECH LAGER",
    "aa": 75.0
  },
  {
    "name": "PRO-24 - CZECH PILSENER",
    "aa": 75.0
  },
  {
    "name": "PRO-25 - AMERICAN LAGER",
    "aa": 75.0
  },
  {
    "name": "PRO-26 - GERMAN OCTOBERFEST",
    "aa": 75.0
  },
  {
    "name": "PRO-27 - GERMAN STH BAVARIAN",
    "aa": 75.0
  },
  {
    "name": "PRO-28 - STH GERMAN LAGER",
    "aa": 75.0
  },
  {
    "name": "PRO-29 - WEST EUROPEAN LAGER",
    "aa": 75.0
  },
  {
    "name": "PRO-30 - BRETTANOMYCES CLAUSSENII",
    "aa": 75.0
  },
  {
    "name": "PRO-31 - BRETTANOMYCES BRUXELLENSIS",
    "aa": 75.0
  },
  {
    "name": "PRO-32 - BRETTANOMYCES LAMBICUS",
    "aa": 75.0
  },
  {
    "name": "PRO-33 - BELGIAN SOUR MIX I",
    "aa": 75.0
  },
  {
    "name": "PRO-34 - MALOLACTIC CULTURE",
    "aa": 75.0
  },
  {
    "name": "PRO-35 - LACTOBACILLUS CULTURE",
    "aa": 75.0
  },
  {
    "name": "PRO-41 - GERMAN WHEAT",
    "aa": 75.0
  },
  {
    "name": "PRO-42 - BELGIAN WHEAT",
    "aa": 75.0
  },
  {
    "name": "PRO-43 - BELGIAN WIT",
    "aa": 75.0
  },
  {
    "name": "PRO-44 - GERMAN BAVARIAN",
    "aa": 75.0
  },
  {
    "name": "PRO-45 - GERMAN HEFEWEISSE",
    "aa": 75.0
  },
  {
    "name": "PRO-46 - GERMAN MARZEN",
    "aa": 75.0
  },
  {
    "name": "PRO-47 - GERMAN ALTBIER",
    "aa": 75.0
  },
  {
    "name": "PRO-48 - LONDON ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-60 - AMERICAN WHEAT",
    "aa": 75.0
  },
  {
    "name": "PRO-61 - ENGLISH ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-62 - CALIFORNIAN ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-63 - IRISH STOUT",
    "aa": 75.0
  },
  {
    "name": "PRO-64 - BRITISH DRY ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-65 - WHITBREAD ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-66 - ENGLISH RINGWOOD",
    "aa": 75.0
  },
  {
    "name": "PRO-67 - BELGIAN TRAPPIST",
    "aa": 75.0
  },
  {
    "name": "PRO-68 - CALIFORNIAN NUT ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-69 - ENGLISH THAMES ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-70 - NORTHWEST ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-71 - EUROPEAN ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-72 - BELGIAN GOLDEN ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-73 - BELGIAN ABBEY AL",
    "aa": 75.0
  },
  {
    "name": "PRO-74 - ENGLISH PALE ALE",
    "aa": 75.0
  },
  {
    "name": "PRO-75 - URQUELL PILSENER",
    "aa": 75.0
  },
  {
    "name": "PRO-76 - AMERICAN LAGER II",
    "aa": 75.0
  },
  {
    "name": "PRO-77 - DANISH LAGER",
    "aa": 75.0
  },
  {
    "name": "PRO-78 - SAN FRANCISCO LAGER",
    "aa": 75.0
  },
  {
    "name": "PRO-79 - GERMAN LAGER",
    "aa": 75.0
  },
  {
    "name": "PRO-80 - GERMAN DOPPLEBOCK",
    "aa": 75.0
  },
  {
    "name": "PRO-81 - CZECH PILSENER",
    "aa": 75.0
  },
  {
    "name": "PRO-82 - GERMAN LAGER II",
    "aa": 75.0
  },
  {
    "name": "PRO-83 - GERMAN KOLSCH",
    "aa": 75.0
  },
  {
    "name": "PRO-84 - BELGIAN LAMBIC BLEND",
    "aa": 75.0
  },
  {
    "name": "PRO-85 - BELGIAN TRIPPEL",
    "aa": 75.0
  },
  {
    "name": "PRO-86 - BELGIAN SAISON ALE II",
    "aa": 75.0
  },
  {
    "name": "PRO-87 - BELGIAN TRAPPIST ALE II",
    "aa": 75.0
  },
  {
    "name": "PRO-88 - CANADIAN ALE",
    "aa": 75.0
  }
]);
print("Were inserted " + db.yeasts.count({}) + " yeasts");
/* eslint-enable no-undef */
