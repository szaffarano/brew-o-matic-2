export const recalculate = (hydro, temp, calibration) => {
  const tempunit = "C";
  if (tempunit == "F") {
    temp = fahrenheitToCelsius(temp);
    calibration = fahrenheitToCelsius(calibration)
  }
  const difference = calculateHydrometerCorrection(temp, calibration);
  const result = rounddecimal(difference + hydro, 3);
  return result;
}

export const isNumber = (s) => {
  if (s === null) {
    return false
  }
  if (s === 0) {
    return true
  }
  if (s == '') {
    return false
  }
  if (isNaN(s)) {
    return false
  }
  let i;
  for (i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (!((c >= "0") && (c <= "9")) && c != '.') {
      return false
    }
  }
  return true
}

function calculateHydrometerCorrection(temp, calibration) {
  temp = parseFloat(temp);
  calibration = parseFloat(calibration);
  if (temp < 0 || temp > 71) {
    return 0
  }
  if (calibration < 10 || calibration > 24) {
    return 0
  }
  let C = [];
  let delta = [];
  for (let i = 0; i <= 71; i++) {
    C[i] = i
  }
  let calibrationOffset = 15 - Math.round(calibration);
  let difference = 0;
  delta[0] = -0.0009;
  delta[1] = -0.0009;
  delta[2] = -0.0009;
  delta[3] = -0.0009;
  delta[4] = -0.0009;
  delta[5] = -0.0009;
  delta[6] = -0.0008;
  delta[7] = -0.0008;
  delta[8] = -0.0007;
  delta[9] = -0.0007;
  delta[10] = -0.0006;
  delta[11] = -0.0005;
  delta[12] = -0.0004;
  delta[13] = -0.0003;
  delta[14] = -0.0001;
  delta[15] = 0;
  delta[16] = 0.0002;
  delta[17] = 0.0003;
  delta[18] = 0.0005;
  delta[19] = 0.0007;
  delta[20] = 0.0009;
  delta[21] = 0.0011;
  delta[22] = 0.0013;
  delta[23] = 0.0016;
  delta[24] = 0.0018;
  delta[25] = 0.0021;
  delta[26] = 0.0023;
  delta[27] = 0.0026;
  delta[28] = 0.0029;
  delta[29] = 0.0032;
  delta[30] = 0.0035;
  delta[31] = 0.0038;
  delta[32] = 0.0041;
  delta[33] = 0.0044;
  delta[34] = 0.0047;
  delta[35] = 0.0051;
  delta[36] = 0.0054;
  delta[37] = 0.0058;
  delta[38] = 0.0061;
  delta[39] = 0.0065;
  delta[40] = 0.0069;
  delta[41] = 0.0073;
  delta[42] = 0.0077;
  delta[43] = 0.0081;
  delta[44] = 0.0085;
  delta[45] = 0.0089;
  delta[46] = 0.0093;
  delta[47] = 0.0097;
  delta[48] = 0.0102;
  delta[49] = 0.0106;
  delta[50] = 0.0110;
  delta[51] = 0.0114;
  delta[52] = 0.0118;
  delta[53] = 0.0122;
  delta[54] = 0.0126;
  delta[55] = 0.0130;
  delta[56] = 0.0135;
  delta[57] = 0.0140;
  delta[58] = 0.0145;
  delta[59] = 0.0150;
  delta[60] = 0.0155;
  delta[61] = 0.0160;
  delta[62] = 0.0165;
  delta[63] = 0.0171;
  delta[64] = 0.0177;
  delta[65] = 0.0183;
  delta[66] = 0.0189;
  delta[67] = 0.0195;
  delta[68] = 0.0201;
  delta[69] = 0.0207;
  delta[70] = 0.0213;
  delta[71] = 0.0219;
  delta[72] = 0.0225;
  delta[73] = 0.0231;
  delta[74] = 0.0237;
  delta[75] = 0.0243;
  delta[76] = 0.0249;
  delta[77] = 0.0255;
  delta[78] = 0.0261;
  delta[79] = 0.0267;
  delta[80] = 0.0273;
  for (let i = 0; i < C.length; i++) {
    if (C[i] == temp) {
      let calibrationOffsetBounded = calibrationOffset;
      if ((i + calibrationOffsetBounded) < 0) {
        calibrationOffsetBounded = 0
      }
      difference = delta[i + calibrationOffsetBounded];
      break
    }
    if (temp >= C[i] && temp < C[i + 1]) {
      let calibrationOffsetBounded = calibrationOffset;
      if ((i + calibrationOffsetBounded) < 0) {
        calibrationOffsetBounded = 0
      }
      difference = (delta[i + calibrationOffsetBounded] + delta[i + calibrationOffsetBounded + 1]) / 2;
      break
    }
  }
  return difference
}

function rounddecimal(n, places) {
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
  let currentPlaces = ((rounded + "").length - 1) - decimalPointPosition;
  if (currentPlaces < places) {
    for (let x = currentPlaces; x < places; x++) {
      rounded += "0"
    }
  }
  return rounded
}

function fahrenheitToCelsius(fahrenheit) {
  fahrenheit = parseFloat(fahrenheit);
  if (fahrenheit === '') {
    return false
  }
  if (isNaN(fahrenheit)) {
    return false
  }
  return (5 / 9) * (fahrenheit - 32)
}
