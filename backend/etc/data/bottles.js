/* eslint-disable no-undef */
print("About to remove " + db.bottles.count({}) + " bottles...");
db.bottles.remove({});
print("Inserting bottles...");
db.bottles.insert([{
    _id: 'Porron_330',
    name: 'Porron 330cc (Ambar)',
    size: 0.33,
    colour: 'Ambar'
  },
  {
    _id: 'Botella_500',
    name: 'Botella 500c (Ambar)',
    size: 0.5,
    colour: 'Ambar'
  },
  {
    _id: 'Botella_660',
    name: 'Botella 660cc (Ambar)',
    size: 0.66,
    colour: 'Ambar'
  },
  {
    _id: 'Botella_750',
    name: 'Botella 750cc (Ambar)',
    size: 0.75,
    colour: 'Ambar'
  },
  {
    _id: 'Botella_1000',
    name: 'Botella Litro (Ambar)',
    size: 0.97,
    colour: 'Ambar'
  },
  {
    _id: 'Botella_1000_verde',
    name: 'Botella Litro (Verde)',
    size: 0.97,
    colour: 'Verde'
  },
  {
    _id: 'Porron_250',
    name: 'Porron 250cc (Ambar)',
    size: 0.25,
    colour: 'Ambar'
  },
  {
    _id: 'Corni_2.5',
    name: 'Corni 2.5 Gal (9L)',
    size: 9.46,
    colour: 'Metal'
  },
  {
    _id: 'Corni_5',
    name: 'Corni 5 Gal (19L)',
    size: 18.9,
    colour: 'Metal'
  }
]);
print("Were inserted " + db.bottles.count({}) + " bottles");
/* eslint-enable no-undef */
