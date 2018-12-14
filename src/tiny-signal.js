module.exports = function() {
  let listeners = new Set();

  return {
    _listeners: listeners,
    add(fn) {
      !listeners.has(fn) && listeners.add(fn);
    },

    remove(fn) {
      listeners.has(fn) && listeners.delete(fn);
    },

    dispatch(data) {
      listeners.forEach(function(l) {
        return l(data);
      });
    },

    destroy() {
      listeners.clear();
    },
  };
};
