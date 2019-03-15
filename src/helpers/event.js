/**
 * Trigger an event.
 *
 * @param {object} vm - VueComponent.
 * @param {object} option - Custom options.
 * @return {object} - Event.
 */
export const eventEmit = (vm, option) => vm.$emit("onClick", { ...option });
