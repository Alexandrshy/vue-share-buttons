/**
 * Create a sharing window.
 *
 * @param {number} width - Window width.
 * @param {number} height - Window height.
 * @param {string} params - Other window options.
 * @returns {string} - Configuration string.
 */
export const createWindow = (width = 500, height = 500, params = "") => {
  const left = screen.width / 2 - width / 2;
  const top = screen.height / 2 - height / 2;
  return `width=${width},height=${height},left=${left},top=${top},${params}`;
};
