import * as bfUtil from 'util'

/**
 * @param in {
 *   dilution  Numeric % of dilution
 *   mashvolume Numeric
 *   mashunits gallons / quarts / liters
 *   source  Numeric[0..7] (source[6] is out)
 *   target Numeric[0..7] (target[6] is out)
 *   CaCO3 Numeric
 *   NaHCO3 Numeric
 *   CaSO4 Numeric
 *   CaCl2 Numeric
 *   MgSO4 Numeric
 *   NaCl Numeric
 * }
 * @param out {
 *   diluted: same as startwater but for read
 * }
 */
export const recalculate = (input, output) => {
  input.mashunits = input.mashunits || 'liters';
  let mashvolume = input.mashvolume;
  if (input.mashunits === 'quarts') {
    mashvolume = mashvolume * 0.25;
  }
  if (input.mashunits === 'liters') {
    mashvolume = mashvolume * 0.264172052;
  }
  output.startwater = new Array(6);
  for (let i = 0; i <= 5; i++) {
    output.diluted[i] = rounddecimal(input.source[i] * ((100 - input.dilution) / 100), 0);
    // diluteddiv[i].innerHTML = rounddecimal(diluted[i], 0);
    output.startwater[i] = input.source[i] * ((100 - input.dilution) / 100)
  }
  for (let i = 0; i <= 5; i++) {
    output.diff[i] = rounddecimal(output.startwater[i] - input.target[i], 0)
  }
  input.source[6] = rounddecimal((input.source[5] * (50 / 61)), 0);
  output.diluted[6] = rounddecimal(((input.source[5] * ((100 - input.dilution) / 100)) * (50 / 61)), 0);
  // diluteddiv[6].innerHTML = rounddecimal(diluted[6], 0);
  input.target[6] = rounddecimal((input.target[5] * (50 / 61)), 0);
  output.diff[6] = rounddecimal(((input.source[5] - input.target[5]) * (50 / 61)), 0);
  if (input.CaCO3 > 0) {
    output.CaCO3_tsp = input.CaCO3 / 3.8;
  } else {
    output.CaCO3_tsp = 0;
  }
  if (input.NaHCO3 > 0) {
    output.NaHCO3_tsp = input.NaHCO3 / 4.4;
  } else {
    output.NaHCO3_tsp = 0;
  }
  if (input.CaSO4 > 0) {
    output.CaSO4_tsp = input.CaSO4 / 4;
  } else {
    output.CaSO4_tsp = 0;
  }
  if (input.CaCl2 > 0) {
    output.CaCl2_tsp = input.CaCl2 / 3.4;
  } else {
    output.CaCl2_tsp = 0;
  }
  if (input.MgSO4 > 0) {
    output.MgSO4_tsp = input.MgSO4 / 4.5;
  } else {
    output.MgSO4_tsp = 0;
  }
  if (input.NaCl > 0) {
    output.NaCl_tsp = input.NaCl / 6;
  } else {
    output.NaCl_tsp = 0;
  }
  let adjCa = 0;
  let adjMg = 0;
  let adjSO4 = 0;
  let adjNa = 0;
  let adjCl = 0;
  let adjHCO3 = 0;
  let CaCO3 = input.CaCO3 / 2;
  if (CaCO3 > 0) {
    adjCa = adjCa + ((105 * CaCO3) / mashvolume);
    adjHCO3 = adjHCO3 + ((321 * CaCO3) / mashvolume)
  }
  if (input.NaHCO3 > 0) {
    adjNa = adjNa + ((75 * input.NaHCO3) / mashvolume);
    adjHCO3 = adjHCO3 + ((191 * input.NaHCO3) / mashvolume)
  }
  if (input.CaSO4 > 0) {
    adjCa = adjCa + ((61.5 * input.CaSO4) / mashvolume);
    adjSO4 = adjSO4 + ((147.4 * input.CaSO4) / mashvolume)
  }
  if (input.CaCl2 > 0) {
    adjCa = adjCa + ((72 * input.CaCl2) / mashvolume);
    adjCl = adjCl + ((127 * input.CaCl2) / mashvolume)
  }
  if (input.MgSO4 > 0) {
    adjMg = adjMg + ((26 * input.MgSO4) / mashvolume);
    adjSO4 = adjSO4 + ((103 * input.MgSO4) / mashvolume)
  }
  if (input.NaCl > 0) {
    adjNa = adjNa + ((104 * input.NaCl) / mashvolume);
    adjCl = adjCl + ((160 * input.NaCl) / mashvolume)
  }
  output.salts[0] = rounddecimal(adjCa, 0);
  output.salts[1] = rounddecimal(adjMg, 0);
  output.salts[2] = rounddecimal(adjSO4, 0);
  output.salts[3] = rounddecimal(adjNa, 0);
  output.salts[4] = rounddecimal(adjCl, 0);
  output.salts[5] = rounddecimal(adjHCO3, 0);
  output.salts[6] = rounddecimal((adjHCO3 * (50 / 61)), 0);
  output.accuracy = {
    value: 0,
    allin: true
  };
  for (let i = 0; i <= 5; i++) {
    const resultinglevel = rounddecimal(parseFloat(rounddecimal(output.diff[i], 10)) + parseFloat(rounddecimal(output.salts[i], 10)), 0);
    output.result[i] = {
      value: resultinglevel,
      range: true
    };
    output.adjusted[i] = rounddecimal(parseFloat(rounddecimal(output.diluted[i], 10)) + parseFloat(rounddecimal(output.salts[i], 10)), 0);
    output.result[i].range = !(resultinglevel < -20 || resultinglevel > 20);
    output.accuracy.value += Math.abs(resultinglevel);
    output.accuracy.allin = output.accuracy.allin && output.result[i].range;
  }
  output.adjusted[6] = rounddecimal((rounddecimal(output.adjusted[5], 10) * (50 / 61)), 0);
  output.result[6] = {
    value: rounddecimal((rounddecimal(output.result[5].value, 10) * (50 / 61)), 0),
    range: true
  };
  output.accuracy.distance = bfUtil.distance(output.adjusted, input.target);
  output.accuracy.value += Math.abs(output.result[6].value);
  const CaValue = rounddecimal(output.adjusted[0], 10);
  if (CaValue < 50) {
    output.Ca_balance = Balance.LOW;
  }
  if (CaValue >= 50 && CaValue <= 150) {
    output.Ca_balance = Balance.NORMAL;
  }
  if (CaValue > 150) {
    output.Ca_balance = Balance.HIGH;
  }
  if (CaValue > 250) {
    output.Ca_balance = Balance.HARMFUL;
  }
  const MgValue = rounddecimal(output.adjusted[1], 10);
  if (MgValue >= 0 && MgValue <= 30) {
    output.Mg_balance = Balance.NORMAL;
  }
  if (MgValue > 30) {
    output.Mg_balance = Balance.HIGH;
  }
  if (MgValue > 50) {
    output.Mg_balance = Balance.HARMFUL;
  }
  const SO4Value = rounddecimal(output.adjusted[2], 10);
  if (SO4Value < 50) {
    output.SO4_balance = Balance.LOW;
  }
  if (SO4Value >= 50 && SO4Value <= 150) {
    output.SO4_balance = Balance.NORMAL;
  }
  if (SO4Value > 150 && SO4Value <= 350) {
    output.SO4_balance = Balance.NORMAL;
  }
  if (SO4Value > 350) {
    output.SO4_balance = Balance.HIGH;
  }
  if (SO4Value > 750) {
    output.SO4_balance = Balance.HARMFUL;
  }
  const NaValue = rounddecimal(output.adjusted[3], 10);
  if (NaValue >= 0 && NaValue <= 150) {
    output.Na_balance = Balance.NORMAL;
  }
  if (NaValue > 150) {
    output.Na_balance = Balance.HIGH;
  }
  if (NaValue > 200) {
    output.Na_balance = Balance.HARMFUL;
  }
  let ClValue = rounddecimal(output.adjusted[4], 10);
  if (ClValue >= 0 && ClValue <= 250) {
    output.Cl_balance = Balance.NORMAL;
  }
  if (ClValue > 250) {
    output.Cl_balance = Balance.HIGH;
  }
  if (ClValue > 300) {
    output.Cl_balance = Balance.HARMFUL;
  }
  if (ClValue <= 0) {
    ClValue = 1
  }
  const SO4Clratio = SO4Value / ClValue;
  if (SO4Clratio > 0 && SO4Clratio <= 0.5) {
    output.SO4Cl_balance = Ratio.HIGHLY_MALTY;
  }
  if (SO4Clratio > 0.5 && SO4Clratio <= 0.7) {
    output.SO4Cl_balance = Ratio.MALTY;
  }
  if (SO4Clratio > 0.7 && SO4Clratio <= 1.3) {
    output.SO4Cl_balance = Ratio.BALANCE;
  }
  if (SO4Clratio > 1.3 && SO4Clratio <= 2) {
    output.SO4Cl_balance = Ratio.BITTER;
  }
  if (SO4Clratio > 2) {
    output.SO4Cl_balance = Ratio.HIGHLY_BITTER;
  }
  if (ClValue <= 5 && SO4Value <= 5) {
    output.SO4Cl_balance = Ratio.LOW_VALUES;
  }
  const AlkalinityValue = rounddecimal(output.adjusted[6], 10);
  if (AlkalinityValue >= 0 && AlkalinityValue <= 50) {
    output.Alkalinity_balance = Alkalinity.PALE;
  }
  if (AlkalinityValue > 50 && AlkalinityValue <= 150) {
    output.Alkalinity_balance = Alkalinity.AMBER;
  }
  if (AlkalinityValue > 150 && AlkalinityValue <= 300) {
    output.Alkalinity_balance = Alkalinity.DARK;
  }
  if (AlkalinityValue > 300) {
    output.Alkalinity_balance = Alkalinity.HIGH;
  }
}

/* eslint-disable no-unused-vars */
// @TODO See with Lautaro, output parameter is never used
export const suggest = (input, output) => {
  const best = {
    CaCO3: 0,
    lastCaCO3: 0,
    NaHCO3: 0,
    lastNaHCO3: 0,
    CaSO4: 0,
    lastCaSO4: 0,
    CaCl2: 0,
    lastCaCl2: 0,
    MgSO4: 0,
    lastMgSO4: 0,
    NaCl: 0,
    lastNaCl: 0,
    distance: 10000,
    calculations: 0
  };

  function setBest(input, output) {
    best.CaCO3 = input.CaCO3;
    best.NaHCO3 = input.NaHCO3;
    best.CaSO4 = input.CaSO4;
    best.CaCl2 = input.CaCl2;
    best.MgSO4 = input.MgSO4;
    best.NaCl = input.NaCl;
    best.distance = output.accuracy.distance;
  }

  best.lastCaCO3 = 10000;
  for (input.CaCO3 = 0; input.CaCO3 < 1000; input.CaCO3++) {
    best.lastNaHCO3 = 10000
    for (input.NaHCO3 = 0; input.NaHCO3 < 1000; input.NaHCO3++) {
      best.lastCaSO4 = 10000;
      for (input.CaSO4 = 0; input.CaSO4 < 1000; input.CaSO4++) {
        best.lastCaCl2 = 10000;
        for (input.CaCl2 = 0; input.CaCl2 < 1000; input.CaCl2++) {
          best.lastMgSO4 = 10000;
          for (input.MgSO4 = 0; input.MgSO4 < 1000; input.MgSO4++) {
            best.lastNaCl = 10000;
            for (input.NaCl = 0; input.NaCl < 1000; input.NaCl++) {
              // console.log('input', input.CaCO3, input.NaHCO3, input.CaSO4, input.CaCl2, input.MgSO4, input.NaCl);
              let output = dummyOutput();
              recalculate(input, output);
              best.calculations++;
              // console.log('distance', output.accuracy.distance);
              if (output.accuracy.distance > best.lastNaCl) {
                break;
              }
              best.lastNaCl = output.accuracy.distance;

              if (output.accuracy.distance < best.distance) {
                setBest(input, output);
              }
            }
            if (best.lastNaCl > best.lastMgSO4) {
              break;
            }
            best.lastMgSO4 = best.lastNaCl;
          }
          if (best.lastMgSO4 > best.lastCaCl2) {
            break;
          }
          best.lastCaCl2 = best.lastMgSO4;
        }
        if (best.lastCaCl2 > best.lastCaSO4) {
          break;
        }
        best.lastCaSO4 = best.lastCaCl2;
      }
      if (best.lastCaSO4 > best.lastNaHCO3) {
        break;
      }
      best.lastNaHCO3 = best.lastCaSO4;
    }
    if (best.lastNaHCO3 > best.lastCaCO3) {
      break;
    }
    best.lastCaCO3 = best.lastNaHCO3;
  }
  return best;
}

export const rounddecimal = (n, places) => {
  if (n === null) {
    return false
  }
  if (n === '') {
    return false
  }
  if (isNaN(n)) {
    return false
  }
  if (places < 0) {
    return false
  }
  if (places > 10) {
    return false
  }
  let rounded = Math.round(n * Math.pow(10, places)) / Math.pow(10, places);
  let decimalPointPosition = (rounded + "").lastIndexOf(".");
  if (decimalPointPosition == 0) {
    rounded = "0" + rounded;
    decimalPointPosition = 1
  }
  if (places != 0) {
    decimalPointPosition = (rounded + "").lastIndexOf(".");
    if (decimalPointPosition == -1 || decimalPointPosition == rounded.length - 1) {
      rounded += "."
    }
  }
  decimalPointPosition = (rounded + "").lastIndexOf(".");
  const currentPlaces = ((rounded + "").length - 1) - decimalPointPosition;
  if (currentPlaces < places) {
    for (let x = currentPlaces; x < places; x++) {
      rounded += "0"
    }
  }
  return rounded
}

export const Balance = {
  LOW: 'LOW',
  HIGH: 'HIGH',
  NORMAL: 'NORMAL',
  HARMFUL: 'HARMFUL'
};

export const Ratio = {
  HIGHLY_MALTY: 'HIGHLY_MALTY',
  MALTY: 'MALTY',
  BALANCE: 'BALANCE',
  BITTER: 'BITTER',
  HIGHLY_BITTER: 'HIGHLY_BITTER',
  LOW_VALUES: 'LOW_VALUES'
};

export const Alkalinity = {
  PALE: 'PALE',
  AMBER: 'AMBER',
  DARK: 'DARK',
  HIGH: 'HIGH'
};

function dummyOutput() {
  return {
    diluted: new Array(6),
    diff: new Array(6),
    salts: new Array(6),
    result: new Array(6),
    adjusted: new Array(6)
  };
}
