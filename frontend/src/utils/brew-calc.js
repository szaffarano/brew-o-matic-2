import * as BrewHelper from 'brew-helper'
import * as FermentableUses from 'fermentable-uses'
import { bfWater, bfHydrometer, bfRefractometer, bfDilution, bfYeast } from 'brewers-friend'

const ABV_COHEF = 0.131;

/**
 * Calcula el porcentaje final de evaporacion.
 * Evaporacion horaria extendida a todo el tiempo de coccion
 *
 * @param BOIL_TIME tiempo total de hervor en minutos.
 * @param EvapPerHour porcentaje de evaporacion por hora.
 */
export const evapTotal = (BOIL_TIME, EvapPerHour) => {
  let hours = Math.floor(BOIL_TIME / 60);
  let rest = (BOIL_TIME % 60) / 60;

  let percentageEvap = 1 - rest * EvapPerHour / 100;

  for (let i = 0; i < hours; i++) {
    percentageEvap *= 1 - EvapPerHour / 100;
  }
  return 1 - percentageEvap;
}
export const calculateBoilSize = (BATCH_SIZE, TrubChillerLosses, BOIL_TIME, PercentEvap, TopUpWater) => {
  let ltsAfterBoil = BATCH_SIZE / 0.96 + TrubChillerLosses;

  let percentageEvap = this.evapTotal(BOIL_TIME, PercentEvap);
  let tuw = TopUpWater ? TopUpWater : 0;
  return ltsAfterBoil / (1 - percentageEvap) + tuw;
}
export const initialMashVolume = (StrikeWater, totalAmount) => {
  return StrikeWater + totalAmount;
}
export const actualMashVolume = ($index, initVol, steps) => {
  let liters = initVol;
  for (let i = 0; i <= $index; i++) {
    let it = steps[i];
    if (it.infuse) {
      liters += it.INFUSE_AMOUNT;
    }
  }
  return liters;
}
export const estimateLiters = ($index, BATCH_SIZE, stages) => {
  let liters = BATCH_SIZE;
  for (let i = 0; i < $index; i++) {
    let it = stages[i];
    if (it.transferring) {
      liters -= it.losses;
    }
  }
  return liters;
}
export const bottledLiters = (volumeByCarbonatationType, bottles) => {
  let liters = 0;
  volumeByCarbonatationType.sugar = 0;
  volumeByCarbonatationType.must = 0;
  volumeByCarbonatationType.co2 = 0;

  bottles.forEach(bottle => {
    liters += bottle.size * bottle.amount;
    volumeByCarbonatationType[bottle.carbonatationType] += bottle.size * bottle.amount;
  });

  return liters;
}
export const fixEmptyValues = (recipe, defaultValues) => {
  recipe.TrubChillerLosses = recipe.TrubChillerLosses || 0;
  recipe.mashTemp = recipe.mashTemp || 66;
  recipe.GrainTemp = recipe.GrainTemp || 25;
  recipe.SpargeTempDesired = recipe.SpargeTempDesired || 75;
  recipe.SpargeDeadSpace = recipe.SpargeDeadSpace || 0;
  recipe.lossMashTemp = recipe.lossMashTemp || 0;
  recipe.PercentEvap = recipe.PercentEvap || 10;
  recipe.pitchRate = recipe.pitchRate || 0.75;
  if (!recipe.WatertoGrainRatio) {
    recipe.WatertoGrainRatio = 3;
    recipe.StrikeWater = BrewHelper.round(recipe.WatertoGrainRatio * recipe.totalAmountMash, 10);
  }
  //Fermentables Uses in mash
  let amountMash = 0;
  recipe.FERMENTABLES.FERMENTABLE.forEach((ferm) => {
    ferm.USE = ferm.USE || FermentableUses.defaultValue;
    if (FermentableUses.valueOf(ferm.USE).mash) {
      amountMash += ferm.AMOUNT;
    }
  });
  //fix recipe.StrikeWater issue #136
  //Only when totalAmountMash is empty (First time)
  if (!recipe.totalAmountMash) {
    recipe.StrikeWater = BrewHelper.round(recipe.WatertoGrainRatio * amountMash, 10);
  }
  recipe.totalAmountMash = recipe.totalAmountMash || amountMash;
  recipe.OG_exclude = recipe.OG;
  if (recipe.YEASTS.YEAST) {
    recipe.YEASTS.YEAST[0].density = recipe.YEASTS.YEAST[0].density || 10;
    recipe.YEASTS.YEAST[0].packageSize = recipe.YEASTS.YEAST[0].packageSize || 11;
  }

  defaultValues = defaultValues || {};
  recipe.timeWaterMash = recipe.timeWaterMash || defaultValues.timeWaterMash || 60;
  recipe.spargeDuration = recipe.spargeDuration || defaultValues.spargeDuration || 45;
  recipe.preBoilTime = recipe.preBoilTime || defaultValues.preBoilTime || 60;
  recipe.coolingTime = recipe.coolingTime || defaultValues.coolingTime || 30;
}
export const totalCations = (cations) => {
  if (!cations) return null;
  const B4 = cations.calcium || 0;
  const B5 = cations.magnesium || 0;
  const B6 = cations.sodium || 0;
  const B7 = cations.potassium || 0;
  const B8 = cations.iron || 0;
  return (B4 / 20.05) + (B5 / 12.15) + (B6 / 23) + (B7 / 39.1) + (B8 / 28);
}
export const totalHardness = (cations) => {
  if (!cations) return null;
  const B4 = cations.calcium || 0;
  const B5 = cations.magnesium || 0;
  return ((B4 / 20.04) + (B5 / 12.15)) * 50;
}
export const permanentHardness = (water) => {
  if (!water) return null;
  return this.totalHardness(water.cations) - this.temporaryHardness(water);
}
export const temporaryHardness = (water) => {
  if (!water) return null;
  return Math.min(this.totalHardness(water.cations), this.alkalinity(water.anions));
}
export const alkalinity = (anions) => {
  if (!anions) return null;
  const C4 = anions.bicarbonate || 0;
  const C5 = anions.carbonate || 0;
  return (C4 + (C5 / 0.6)) * (50 / 61) * (1 + (2 * Math.pow(10, -2.4)));
}
export const effectiveHardness = (cations) => {
  if (!cations) return null;
  const B4 = cations.calcium || 0;
  const B5 = cations.magnesium || 0;
  return ((B4 / 20) + (B5 / 24.3)) * 50;
}
export const residualAlkalinity = (water) => {
  if (!water || !water.cations) return null;
  const B4 = water.cations.calcium || 0;
  const B5 = water.cations.magnesium || 0;
  return (this.alkalinity(water.anions) - ((B4 * 0.7143) + (B5 * 0.5879)));
}
export const totalAnions = (anions) => {
  if (!anions) return null;
  const C4 = anions.bicarbonate || 0;
  const C5 = anions.carbonate || 0;
  const C6 = anions.sulfate || 0;
  const C7 = anions.chloride || 0;
  const C8 = anions.nitrate || 0;
  const C9 = anions.nitrite || 0;
  const C10 = anions.fluoride || 0;
  return (C4 / 61) + (C5 / 30) + (C6 / 48) + (C7 / 35.45) + (C8 / 62) + (C9 / 46) + (C10 / 19);
}
export const waterBalance = (water) => {
  if (!water) return null;
  return Math.abs(this.totalAnions(water.anions) - this.totalCations(water.cations));
}
export const waterCalculation = (input, output) => {
  return bfWater.recalculate(input, output);
}

export const suggestWaterCalculation = (input) => {
  return bfWater.suggest(input);
}

export const calculateABV = (og, fg) => {
  const OG = BrewHelper.toPpg(og);
  const FG = BrewHelper.toPpg(fg);
  return BrewHelper.round((OG - FG) * ABV_COHEF, 100);
}

export const calculateOG = (fg, abv) => {
  const FG = BrewHelper.toPpg(fg);
  const OG = abv / ABV_COHEF + FG;
  return BrewHelper.toPotential(OG);
}

export const calculateFG = (og, abv) => {
  const OG = BrewHelper.toPpg(og);
  const FG = OG - abv / ABV_COHEF;
  return BrewHelper.toPotential(FG);
}

export const attenuation = (og, fg) => {
  const OG = BrewHelper.toPpg(og);
  const FG = BrewHelper.toPpg(fg);
  return ((OG - FG) / OG) * 100;
}

export const toPlato = (sg) => {
  return BrewHelper.round((-1 * 616.868) + (1111.14 * sg) - (630.272 * Math.pow(sg, 2)) + (135.997 * Math.pow(sg, 3)), 100);
}

export const fromPlato = (plato) => {
  // console.log("plato", plato);
  const r = 1 + (plato / (258.6 - ((plato / 258.2) * 227.1)));
  // console.log("r", r);
  const result = BrewHelper.round(r, 10000);
  // console.log("result", result);
  return result;
}

export const adjustHydrometer = (gravity, reading, calibration) => {
  return bfHydrometer.recalculate(gravity, reading, calibration);
}

export const adjustRefractometer = (og, fg, correction) => {
  return bfRefractometer.recalculate(og, fg, correction);
}

export const dilution = (currentGrav, currentVol, finalGrav) => {
  return bfDilution.recalculate(currentVol, currentGrav, finalGrav);
}

export const yeastDiff = (volume, gravity, grams, density, pitchRate) => {
  return bfYeast.recalculate(
    volume,
    gravity,
    pitchRate || 0.75,
    'dry',
    grams,
    density || 10
  ).yeastDifference;
}

//In grams
export const yeastNeed = (volume, gravity, grams, density, pitchRate) => {
  density = density || 10;
  const diff = bfYeast.recalculate(
    volume,
    gravity,
    pitchRate || 0.75,
    'dry',
    grams,
    density
  ).yeastDifference;
  //diff is billon of cells
  return Math.ceil(diff / density); //10 is density (it may change)
}

/**
 * @param items [{size, gravity}]
 */
export const calculateMix = (items) => {
  items = items || [];
  let sumGrav = 0;
  let sumSize = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    sumGrav += (item.gravity * 1000 - 1000) * item.size;
    sumSize += item.size;
  }
  if (sumSize === 0 || isNaN(sumSize)) return 0;

  const v = (sumGrav / sumSize + 1000) / 1000;
  // console.log(v, BrewHelper.round(v, 1000));
  return BrewHelper.round(v, 1000);
}
