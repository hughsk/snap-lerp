# snap-lerp
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/snap-lerp.svg?style=flat)
![](http://img.shields.io/npm/dm/snap-lerp.svg?style=flat)
![](http://img.shields.io/npm/l/snap-lerp.svg?style=flat)

Linearly interpolate two numbers, but snap to the closest value if the
difference between them is small enough. Comes in handy if you're running an
animation but don't want to keep making unnecessary updates to a value as it
approaches JS's limits in numerical precision.

## Usage

[![NPM](https://nodei.co/npm/snap-lerp.png)](https://nodei.co/npm/snap-lerp/)

### `snapLerp(a, b, t, min, [forceSnapToB])`

Linearly interpolate between `a` and `b` for a given range `t`:

``` javascript
a + (b - a) * t
```

However, if `Math.abs(a - b) <= min`, snap to the closest value:

``` javascript
const snapLerp = require('snap-lerp')

15 === snapLerp(10, 20, 0.50, 1)
20 === snapLerp(10, 20, 0.50, 10)
10 === snapLerp(10, 20, 0.49, 10)
```

If required, you may also pass `forceSnapToB` as `true` to ensure that the value
snapped will always be the second supplied:

``` javascript
const snapLerp = require('snap-lerp')

15 === snapLerp(10, 20, 0.50, 1, true)
20 === snapLerp(10, 20, 0.50, 10, true)
20 === snapLerp(10, 20, 0.49, 10, true)
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/snap-lerp/blob/master/LICENSE.md) for details.
