export const valueOf = (name) => {
  for (let i = 0; i < this.query().length; i++) {
    if (name === this.query()[i].name) {
      return this.query()[i];
    }
  }
  return null;
}

export const query = () => {
  return [{
    name: 'Mash',
    mash: true
  }, {
    name: 'Recirculating',
    mash: true
  }, {
    name: 'Boil',
    mash: false
  }, {
    name: 'Fermentation',
    mash: false
  }];
}
