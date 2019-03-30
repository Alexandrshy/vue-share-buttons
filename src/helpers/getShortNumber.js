/**
 * Format the number in a short record.
 *
 * @param {number} number - Initial number.
 * @param {number} digits - The number of digits to appear after the decimal point.
 * @returns {number|string} - Formatted number.
 */
export const getShortNumber = (number, digits = 0) => {
  const units = ["k", "m", "g", "t", "p", "e", "z", "y"];

  for (let index = units.length - 1; index >= 0; index--) {
    const decimal = Math.pow(1000, index + 1);

    if (number <= -decimal || number >= decimal) {
      return `${Number(number / decimal).toFixed(digits)}${units[index]}`;
    }
  }

  return number;
};
