export const getByData = (wrapper, selector) => {
  return wrapper.find(`[data-test="${selector}"]`);
};
