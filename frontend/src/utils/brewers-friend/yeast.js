/**
 * @param wortVolume Liters
 * @param wortGravity in gravity units
 * @param pitchRate grams of yeast by liters
 * @param yeastType 'dry'||'liquid'||'slurry'
 * @param yeast_dry_grams grams of yeast
 * @param yeast_dry_cells_per_gram density of yeast
 *
 * @return {
 *  yeastNeeded yeast you need
 *  yeastCount actual amout of yeast
 *  yeastDifference difference (>0 is ok, <0 you need more)
 *  actualPitchRate actual pitch rate
 * }
 */
export const recalculate = () => {
  // @TODO review original code!
  return {
    yeastNeeded: 0,
    yeastCount: 0,
    yeastDifference: 0,
    actualPitchRate: 0
  }
}
