export default function() {
  let fns = new Set()

  return {
    add(fn) {
      fns.add(fn)
    },

    remove(fn) {
      fns.delete(fn)
    },

    dispatch(data) {
      fns.forEach(fn => {
        fn(data)
      })
    },

    destroy() {
      fns.clear()
    },
  }
}
