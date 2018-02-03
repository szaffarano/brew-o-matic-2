/* eslint-disable no-undef */
print("About to remove " + db.grains.count({}) + " grains...");
db.grains.remove({});
print("Inserting grains...");
db.grains.insert([{
    "name": "Biscuit (Ba-Malt)",
    "type": "Grain",
    "colour": 20,
    "potential": 1.036
  },
  {
    "name": "Caramelo 30 (Ba-Malt)",
    "type": "Grain",
    "colour": 30,
    "potential": 1.035
  },
  {
    "name": "Caramelo 30 (Ba-Malt)",
    "type": "Grain",
    "colour": 30,
    "potential": 1.035
  },
  {
    "name": "Caramelo 60 (Ba-Malt)",
    "type": "Grain",
    "colour": 60,
    "potential": 1.034
  },
  {
    "name": "Caramelo 120 (Ba-Malt)",
    "type": "Grain",
    "colour": 120,
    "potential": 1.033
  },
  {
    "name": "Caramelo Dark (Ba-Malt)",
    "type": "Grain",
    "colour": 140,
    "potential": 1.033
  },
  {
    "name": "Black Patent (Ba-Malt)",
    "type": "Grain",
    "colour": 500,
    "potential": 1.025
  },
  {
    "name": "Malta chocolate (Ba-Malt)",
    "type": "Grain",
    "colour": 400,
    "potential": 1.029
  },
  {
    "name": "Malta pale-chocolate (Ba-Malt)",
    "type": "Grain",
    "colour": 350,
    "potential": 1.03
  },
  {
    "name": "Brown Malt (Ba-Malt)",
    "type": "Grain",
    "colour": 150,
    "potential": 1.032
  },
  {
    "name": "Melanoidin Malt (Ba-Malt)",
    "type": "Grain",
    "colour": 30,
    "potential": 1.037
  },
  {
    "name": "Smoked Malt (Ba-Malt)",
    "type": "Grain",
    "colour": 4,
    "potential": 1.037
  },
  {
    "name": "Cebada Tostada (Ba-Malt)",
    "type": "Grain",
    "colour": 500,
    "potential": 1.028
  },
  {
    "name": "Trigo Malteado (Ba-Malt)",
    "type": "Grain",
    "colour": 3,
    "potential": 1.038
  },
  {
    "name": "Trigo Caramelo (Ba-Malt)",
    "type": "Grain",
    "colour": 60,
    "potential": 1.034
  },
  {
    "name": "Trigo Tostado (Ba-Malt)",
    "type": "Grain",
    "colour": 500,
    "potential": 1.025
  }
]);
print("Were inserted " + db.grains.count({}) + " grains");
/* eslint-enable no-undef */
