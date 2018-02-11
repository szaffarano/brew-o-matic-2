export const distance = (p1, p2) => {
  // console.log('p1',p1);
  // console.log('p2',p2);
  let result = 0;
  for (let i = 0; i < p1.length; i++) {
    result += Math.pow(p1[i] - p2[i], 2);
  }
  return rounddecimal(Math.sqrt(result), 2);
};

export const rounddecimal = (n, places) => {
  return Math.round(n * Math.pow(10, places)) / Math.pow(10, places);
};
