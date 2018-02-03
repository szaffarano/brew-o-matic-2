/* eslint-disable no-undef */
print("About to remove " + db.miscs.count({}) + " miscs...");
db.miscs.remove({});
print("Inserting miscs...");
db.miscs.insert([{
    "name": "Black Pepper",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Calcium Chloride",
    "type": "Water Agent",
    "use": "Mash"
  },
  {
    "name": "Caraway Seed",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Cardamom Seed",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Chamomile",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Chili Pepper",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Cinnamon",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Cinnamon Stick",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Citric Acid",
    "type": "Water Agent",
    "use": "Mash"
  },
  {
    "name": "Cocoa Powder",
    "type": "Other",
    "use": "Boil"
  },
  {
    "name": "Coriander Seed",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Corriander Seed",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Dried Elderberries",
    "type": "Other",
    "use": "Secondary"
  },
  {
    "name": "Dried Elderflowers",
    "type": "Other",
    "use": "Secondary"
  },
  {
    "name": "Epsom Salt (MgSO4)",
    "type": "Water Agent",
    "use": "Mash"
  },
  {
    "name": "Fennel Seed",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Gelatin",
    "type": "Fining",
    "use": "Secondary"
  },
  {
    "name": "Ginger Root",
    "type": "Herb",
    "use": "Boil"
  },
  {
    "name": "Grains of Paradise",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Gypsum (Calcium Sulfate)",
    "type": "Water Agent",
    "use": "Mash"
  },
  {
    "name": "Irish Moss",
    "type": "Fining",
    "use": "Boil"
  },
  {
    "name": "Isinglass (Liquid)",
    "type": "Fining",
    "use": "Secondary"
  },
  {
    "name": "Jamaican Peper",
    "type": "Other",
    "use": "Boil"
  },
  {
    "name": "Juniper Berries",
    "type": "Other",
    "use": "Secondary"
  },
  {
    "name": "Lactic Acid",
    "type": "Water Agent",
    "use": "Mash"
  },
  {
    "name": "Lavender",
    "type": "Herb",
    "use": "Boil"
  },
  {
    "name": "Licorice Root",
    "type": "Other",
    "use": "Boil"
  },
  {
    "name": "Malto-Dextrine",
    "type": "Other",
    "use": "Boil"
  },
  {
    "name": "Mugwort",
    "type": "Herb",
    "use": "Boil"
  },
  {
    "name": "Oak Chips",
    "type": "Flavor",
    "use": "Secondary"
  },
  {
    "name": "Orange Peel",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Papain",
    "type": "Fining",
    "use": "Secondary"
  },
  {
    "name": "PH 5.2",
    "type": "Water Agent",
    "use": "Mash"
  },
  {
    "name": "Polyclar",
    "type": "Fining",
    "use": "Secondary"
  },
  {
    "name": "Red Peper",
    "type": "Other",
    "use": "Boil"
  },
  {
    "name": "Rosemary",
    "type": "Herb",
    "use": "Boil"
  },
  {
    "name": "Spruce Tips",
    "type": "Other",
    "use": "Boil"
  },
  {
    "name": "Star Anise",
    "type": "Spice",
    "use": "Boil"
  },
  {
    "name": "Vanilla",
    "type": "Other",
    "use": "Boil"
  },
  {
    "name": "Whirlfloc Tablet",
    "type": "Fining",
    "use": "Boil"
  },
  {
    "name": "Yarrow",
    "type": "Herb",
    "use": "Boil"
  },
  {
    "name": "Yeast Nutrient",
    "type": "Other",
    "use": "Boil"
  }
]);
print("Were inserted " + db.miscs.count({}) + " miscs");
/* eslint-enable no-undef */
