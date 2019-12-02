const signal = require('../dist/tiny-signal')

describe('tiny-signal:', () => {
  it('should be a function', () => {
    expect(typeof signal).toBe('function')
  })

  let instance = signal()

  it('should return an object', () => {
    expect(typeof instance).toBe('object')
  })

  let foo = jest.fn().mockName('foo')
  let bar = jest.fn().mockName('bar')
  let baz = jest.fn().mockName('baz')

  describe('add()', () => {
    it('should be a function', () => {
      expect(typeof instance.add).toBe('function')
    })

    it('should add a listener', () => {
      instance.add(foo)
      instance.dispatch()
      expect(foo).toHaveBeenCalledTimes(1)
    })
    
    it('should not add duplicate listener', () => {
      instance.add(foo)
      instance.dispatch()
      expect(foo).toHaveBeenCalledTimes(2)
    })
  })

  describe('remove()', () => {
    it('should be a function', () => {
      expect(typeof instance.remove).toBe('function')
    })

    it('should remove a listener', () => {
      instance.remove(foo)
      instance.dispatch()
      expect(foo).toHaveBeenCalledTimes(2)
    })
  })

  describe('dispatch()', () => {
    it('should be a function', () => {
      expect(typeof instance.dispatch).toBe('function')
    })

    it('should invoke added listener with provided arguments', () => {
      let data = { a: 'b' }
      instance.add(bar)
      instance.dispatch(data)
      expect(bar).toHaveBeenLastCalledWith(data)
    })
  })

  describe('destroy()', () => {
    it('should be a function', () => {
      expect(typeof instance.destroy).toBe('function')
    })

    it('should remove all listeners', () => {
      expect(foo).toHaveBeenCalledTimes(2)
      expect(bar).toHaveBeenCalledTimes(1)
      expect(baz).toHaveBeenCalledTimes(0)

      instance.add(foo)
      instance.add(baz)
      instance.dispatch()

      expect(foo).toHaveBeenCalledTimes(3)
      expect(bar).toHaveBeenCalledTimes(2)
      expect(baz).toHaveBeenCalledTimes(1)

      instance.destroy()
      instance.dispatch()

      expect(foo).toHaveBeenCalledTimes(3)
      expect(bar).toHaveBeenCalledTimes(2)
      expect(baz).toHaveBeenCalledTimes(1)
    })
  })
})
