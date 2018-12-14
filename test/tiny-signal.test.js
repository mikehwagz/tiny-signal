const signal = require('../dist/tiny-signal')

describe('tiny-signal:', () => {
  it('should be a function', () => {
    expect(typeof signal).toBe('function')
  })

  let instance = signal()

  it('should return an object', () => {
    expect(typeof instance).toBe('object')
  })

  let foo = () => 'foo'
  let bar = () => 'bar'
  let baz = () => 'baz'

  describe('add()', () => {
    it('should be a function', () => {
      expect(typeof instance.add).toBe('function')
    })

    it('should add a listener', () => {
      instance.add(foo)
      expect(instance._listeners.length).toBe(1)
    })

    it('should not add a duplicate listener', () => {
      instance.add(foo)
      expect(instance._listeners.length).toBe(1)
    })
  })

  describe('remove()', () => {
    it('should be a function', () => {
      expect(typeof instance.remove).toBe('function')
    })

    it('should remove a listener', () => {
      instance.remove(foo)
      expect(instance._listeners.length).toBe(0)
    })
  })

  describe('dispatch()', () => {
    it('should be a function', () => {
      expect(typeof instance.dispatch).toBe('function')
    })

    it('should invoke added listener', () => {
      let data = { a: 'b' }

      instance.add((one, two) => {
        expect(one).toBe(data)
        expect(two).toBe(undefined)
      })

      instance.dispatch(data)
    })
  })

  describe('destroy()', () => {
    it('should be a function', () => {
      expect(typeof instance.destroy).toBe('function')
    })

    it('should remove all listeners', () => {
      expect(instance._listeners.length).toBe(1)

      instance.add(foo)
      instance.add(bar)
      instance.add(baz)

      expect(instance._listeners.length).toBe(4)

      instance.destroy()

      expect(instance._listeners.length).toBe(0)
    })
  })
})
