# tiny-signal

tiny-signal is a minimal implementation of the observer design pattern in less than 300 bytes gzipped.

## Installation

```
npm i tiny-signal
```

## Usage

```js
import signal from 'tiny-signal'

const instance = signal()

const foo = data => console.log(`foo! ${data}`)
const bar = data => console.log(`bar! ${data}`)
const baz = data => console.log(`baz! ${data}`)

instance.add(foo)
instance.add(bar)
instance.add(baz)

instance.dispatch('hello world!')
// foo! hello world!
// bar! hello world!
// baz! hello world!

instance.remove(bar)
instance.dispatch('howdy!')
// foo! hello world!
// baz! hello world!

instance.destroy() // removes all listeners
```

## License

[MIT License](https://opensource.org/licenses/MIT) © [Mike Wagz](https://wagz.io)
