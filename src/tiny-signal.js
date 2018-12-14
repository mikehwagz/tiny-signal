export default () => {
  let listeners = []

  return {
    _listeners: listeners,
    add(fn) {
      listeners.indexOf(fn) < 0 && listeners.push(fn)
    },

    remove(fn) {
      let i = listeners.indexOf(fn)
      i > -1 && listeners.splice(i, 1)
    },

    dispatch(data) {
      for (let i = 0; i < listeners.length; i++) listeners[i](data)
    },

    destroy() {
      this._listeners = []
    },
  }
}
