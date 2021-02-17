const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity != "string")
    return false
  if (Number(sampleActivity) != NaN && Number(sampleActivity) <= 15 && Number(sampleActivity) > 0)
    return Math.ceil(MODERN_ACTIVITY / Number(sampleActivity) * HALF_LIFE_PERIOD)
  return false
};

/*function test(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity != "string")
    return false
  if (Number(sampleActivity) != NaN && Number(sampleActivity) <= 15 && Number(sampleActivity) > 0)
    return Math.ceil(MODERN_ACTIVITY / Number(sampleActivity) * HALF_LIFE_PERIOD)
  return false
}

console.log(test('ACTIVITY OVER 9000'));*/