/**
 * Get random number.
 *
 * @param {number} min - Lower possible number.
 * @param {number} max - Largest possible number.
 * @returns {number} - Random number.
 */
export const getRandomNumber = (min = 1, max = 9000) =>
  Math.floor(Math.random() * (max - min + 1) + min);
