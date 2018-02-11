import { SRM, U_gravity, U } from 'constants'
import * as util from 'util'

export const toLbs = (kg) => {
  return kg / 0.45359;
}

export const toOz = (kg) => {
  return kg * 1000 * 0.035274;
}

export const toGal = (liters) => {
  return liters * 0.264172052637296;
}

export const toPpg = (potential) => {
  return potential * 1000 - 1000;
}

export const toPotential = (ppg) => {
  return this.round((ppg + 1000) / 1000, 1000);
}

export const round = (value, zeros) => {
  return Math.round(value * zeros) / zeros;
}

export const pad = (value, zeros) => {
  return util.pad(value, zeros);
}

export const calculateU = (gravity, time) => {
  let g = this.toPpg(gravity);
  let m = 30;
  let M = 120;
  for (let i = 0; i < U_gravity.length; i++) {
    if (g < U_gravity[i]) {
      M = U_gravity[i];
      break;
    } else {
      m = U_gravity[i];
    }
  }
  let diff = M - m;
  let p = (g - m) / diff; //proporcion
  if (p == Infinity || isNaN(p)) {
    p = 0;
  }

  let valm;
  let valM;
  if (U[time.toString()]) {
    valm = U[time.toString()][m.toString()];
    valM = U[time.toString()][M.toString()];
  } else {
    valm = 0;
    valM = 0;
  }

  let valDiff = valM - valm; //Diff de valores
  let valP = valDiff * p;
  return valm + valP;
}

export const convertColor = (srm) => {
  if (srm > 40) {
    return "black";
  } else if (srm < 1) {
    return "white";
  } else {
    return SRM[Math.round(srm)];
  }
}

export const complementary = (color) => {
  let hexa = color.replace('#', '0x');
  let colorDec = 0xffffff ^ hexa;
  return '#' + colorDec.toString(16);
}
