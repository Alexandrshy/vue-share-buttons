/**
 * Trigger an event.
 *
 * @param {object} vm - VueComponent.
 * @param {string} eventName - Nameof the emitted events.
 * @param {object} option - Custom options.
 * @return {object} - Event.
 */
export const eventEmit = (vm, eventName = "", option = {}) =>
  vm.$emit(eventName, option);
