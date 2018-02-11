export const recalculate = (currentVolume, currentGravity, desiredGravity) => {
  let newVolume = ((currentGravity - 1) / (desiredGravity - 1)) * currentVolume;
  newVolume = rounddecimal(newVolume, 2);
  if (isNaN(newVolume)) {
    newVolume = 0
  }
  return newVolume;
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
