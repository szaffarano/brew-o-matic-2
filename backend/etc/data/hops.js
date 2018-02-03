/* eslint-disable no-undef */
print("About to remove " + db.hops.count({}) + " hops...");
db.hops.remove({});
print("Inserting hops...");
db.hops.insert([{
    "name": "Admiral",
    "alpha": 10.6
  },
  {
    "name": "Ahtanum",
    "alpha": 5.2
  },
  {
    "name": "Amarillo",
    "alpha": 8.6
  },
  {
    "name": "Aquila",
    "alpha": 6.5
  },
  {
    "name": "B Saaz",
    "alpha": 6.8
  },
  {
    "name": "Banner",
    "alpha": 10.0
  },
  {
    "name": "Boadicea",
    "alpha": 7.1
  },
  {
    "name": "Bramling Cross",
    "alpha": 5.1
  },
  {
    "name": "Brewers Gold",
    "alpha": 5.0
  },
  {
    "name": "Bullion",
    "alpha": 9.5
  },
  {
    "name": "Cascade Arg",
    "alpha": 7.8
  },
  {
    "name": "Cascade USA",
    "alpha": 5.5
  },
  {
    "name": "Centennial",
    "alpha": 9.7
  },
  {
    "name": "Challenger",
    "alpha": 6.1
  },
  {
    "name": "Chinook",
    "alpha": 11.4
  },
  {
    "name": "Citra",
    "alpha": 11.1
  },
  {
    "name": "Cluster",
    "alpha": 5.7
  },
  {
    "name": "Columbia",
    "alpha": 5.5
  },
  {
    "name": "Columbus",
    "alpha": 14.2
  },
  {
    "name": "Cornet",
    "alpha": 9.5
  },
  {
    "name": "Crystal",
    "alpha": 4.3
  },
  {
    "name": "D Saaz",
    "alpha": 5.4
  },
  {
    "name": "Delta",
    "alpha": 5
  },
  {
    "name": "East Kent Golding",
    "alpha": 4.7
  },
  {
    "name": "Eroica",
    "alpha": 2.4
  },
  {
    "name": "First Gold",
    "alpha": 7.9
  },
  {
    "name": "Fuggles",
    "alpha": 5.7
  },
  {
    "name": "Galaxy",
    "alpha": 13.4
  },
  {
    "name": "Galena",
    "alpha": 12.5
  },
  {
    "name": "Galena",
    "alpha": 5.8
  },
  {
    "name": "Green Bullet",
    "alpha": 13.6
  },
  {
    "name": "Hallertau Aroma",
    "alpha": 8.1
  },
  {
    "name": "Hallertau Mittlefrueh",
    "alpha": 6.3
  },
  {
    "name": "Hallertau Tradition",
    "alpha": 5.7
  },
  {
    "name": "Herald",
    "alpha": 12.0
  },
  {
    "name": "Hersbrucker",
    "alpha": 2.8
  },
  {
    "name": "Horizon",
    "alpha": 13.0
  },
  {
    "name": "Liberty",
    "alpha": 4.5
  },
  {
    "name": "Lublin",
    "alpha": 5.0
  },
  {
    "name": "Magnum",
    "alpha": 12.5
  },
  {
    "name": "Mapuche",
    "alpha": 7.7
  },
  {
    "name": "Marco Polo",
    "alpha": 12.0
  },
  {
    "name": "Millennium",
    "alpha": 14.4
  },
  {
    "name": "Mt. Hood",
    "alpha": 5.2
  },
  {
    "name": "Nelson Sauvin",
    "alpha": 11.5
  },
  {
    "name": "Newport",
    "alpha": 11.0
  },
  {
    "name": "Northdown",
    "alpha": 8.1
  },
  {
    "name": "Northern Brewer",
    "alpha": 9.6
  },
  {
    "name": "Nugget",
    "alpha": 12
  },
  {
    "name": "Opal",
    "alpha": 10.0
  },
  {
    "name": "Orion",
    "alpha": 7.2
  },
  {
    "name": "Pacific Gem",
    "alpha": 13.7
  },
  {
    "name": "Pacific Hallertau",
    "alpha": 5.8
  },
  {
    "name": "Pacific Jade",
    "alpha": 15.2
  },
  {
    "name": "Palisade",
    "alpha": 7.3
  },
  {
    "name": "Perle",
    "alpha": 6.0
  },
  {
    "name": "Phoenix",
    "alpha": 8.0
  },
  {
    "name": "Pilgrim",
    "alpha": 10.4
  },
  {
    "name": "Pioneer",
    "alpha": 9.5
  },
  {
    "name": "Pride of Ringwood",
    "alpha": 8.3
  },
  {
    "name": "Progress",
    "alpha": 7.3
  },
  {
    "name": "Saaz",
    "alpha": 3.6
  },
  {
    "name": "Santiam",
    "alpha": 6.7
  },
  {
    "name": "Saphire",
    "alpha": 4.5
  },
  {
    "name": "Simcoe",
    "alpha": 12.2
  },
  {
    "name": "Smaragd",
    "alpha": 8.0
  },
  {
    "name": "Sorachi",
    "alpha": 11.8
  },
  {
    "name": "Southern Cross",
    "alpha": 14.8
  },
  {
    "name": "Spalt",
    "alpha": 4.0
  },
  {
    "name": "Sterling",
    "alpha": 7.5
  },
  {
    "name": "Stickebract",
    "alpha": 14.0
  },
  {
    "name": "Strisselspalt",
    "alpha": 2.0
  },
  {
    "name": "Styrian Golding",
    "alpha": 4.4
  },
  {
    "name": "Sun",
    "alpha": 14.0
  },
  {
    "name": "Super Alpha",
    "alpha": 12.0
  },
  {
    "name": "Super Pride",
    "alpha": 13.0
  },
  {
    "name": "Target",
    "alpha": 9.0
  },
  {
    "name": "Tarus",
    "alpha": 13.0
  },
  {
    "name": "Tettnanger",
    "alpha": 4.0
  },
  {
    "name": "Tomahawk",
    "alpha": 14.5
  },
  {
    "name": "Topaz",
    "alpha": 16.2
  },
  {
    "name": "Tradition",
    "alpha": 6.0
  },
  {
    "name": "Ultra",
    "alpha": 3.3
  },
  {
    "name": "Vanguard",
    "alpha": 5.0
  },
  {
    "name": "Warrior",
    "alpha": 15.8
  },
  {
    "name": "Willamette",
    "alpha": 7.1
  },
  {
    "name": "Zeus",
    "alpha": 13.5
  }
]);
print("Were inserted " + db.hops.count({}) + " hops");
/* eslint-enable no-undef */
