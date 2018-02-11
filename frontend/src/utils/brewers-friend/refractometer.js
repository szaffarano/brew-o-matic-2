export const recalculate = (og2, fg2, wortcorrection2) => {
  let part2ogunit = "brixwri";

  let part2OGInBrix;
  // let part2OGInSG;
  if (part2ogunit == "brixwri") {
    part2OGInBrix = og2 / wortcorrection2;
    // part2OGInSG = convertPlatoToGravity(part2OGInBrix)
  }
  if (part2ogunit == "plato") {
    part2OGInBrix = og2;
    // part2OGInSG = convertPlatoToGravity(og2)
  }
  if (part2ogunit == "sg") {
    part2OGInBrix = convertGravityToPlato(og2, 10);
    // part2OGInSG = og2
  }
  let part2CorrectedFGInBrix = fg2 / wortcorrection2;
  let part2FGInSG = getFGFromBrix(part2OGInBrix, part2CorrectedFGInBrix);
  let part2FGInBrix = convertGravityToPlato(part2FGInSG, 10);

  // console.log("divPart2OGCorrectedBrix",rounddecimal(part2OGInBrix, 2) + " ºP, " + rounddecimal(part2OGInSG, 3));
  // let valueStr = rounddecimal(part2FGInBrix, 2) + " ºP, " + rounddecimal(part2FGInSG, 3);
  // console.log("divPart2FGCorrectedBrix",valueStr);
  // let abw = 76.08 * (part2OGInSG - part2FGInSG) / (1.775 - part2OGInSG);
  // let abv = abw * (part2FGInSG / 0.794);
  // console.log("divPart2ABV",rounddecimal(abv, 2) + "%");
  return part2FGInBrix;
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
  const currentPlaces = ((rounded + "").length - 1) - decimalPointPosition;
  if (currentPlaces < places) {
    for (let x = currentPlaces; x < places; x++) {
      rounded += "0"
    }
  }
  return rounded
}

// function convertPlatoToGravity(plato) {
//   return (plato / (258.6 - ((plato / 258.2) * 227.1))) + 1
// }

function convertGravityToPlato(sg, n) {
  if (!n) {
    n = 1
  }
  const plato = (-1 * 616.868) + (1111.14 * sg) - (630.272 * Math.pow(sg, 2)) + (135.997 * Math.pow(sg, 3));
  return rounddecimal(plato, n)
}

function getFGFromBrix(brixOg, brixFg) {
  return 1.0000 - 0.0044993 * brixOg + 0.011774 * brixFg + 0.00027581 * Math.pow(brixOg, 2) - 0.0012717 * Math.pow(brixFg, 2) - 0.0000072800 * Math.pow(brixOg, 3) + 0.000063293 * Math.pow(brixFg, 3)
}
