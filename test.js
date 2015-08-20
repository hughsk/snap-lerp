import test from 'tape'
import lerp from './'

test('snap-lerp', t => {
  t.equal(lerp(1, 3, 0.5, 0.01), 2)
  t.equal(lerp(1, 3, 0.5, 2, false), 3)
  t.equal(lerp(1, 3, 0.5, 2, true), 3)
  t.equal(lerp(3, 1, 0.5, 0.01), 2)
  t.equal(lerp(3, 1, 0.5, 2, false), 1)
  t.equal(lerp(3, 1, 0.5, 2, true), 1)

  t.equal(lerp(1, 3, 0.6, 1), 2.2)
  t.equal(lerp(3, 1, 0.6, 1), 1.8)
  t.equal(lerp(1, 3, 0.4, 1), 1.8)
  t.equal(lerp(3, 1, 0.4, 1), 2.2)

  t.equal(lerp(1, 3, 0.6, 2, false), 3)
  t.equal(lerp(1, 3, 0.6, 2, true), 3)
  t.equal(lerp(3, 1, 0.6, 2, false), 1)
  t.equal(lerp(3, 1, 0.6, 2, true), 1)
  t.equal(lerp(1, 3, 0.4, 2, false), 1)
  t.equal(lerp(1, 3, 0.4, 2, true), 3)
  t.equal(lerp(3, 1, 0.4, 2, false), 3)
  t.equal(lerp(3, 1, 0.4, 2, true), 1)

  t.equal(lerp(1, 3, 0.6, 2), 3)
  t.equal(lerp(3, 1, 0.6, 2), 1)
  t.equal(lerp(1, 3, 0.4, 2), 1)
  t.equal(lerp(3, 1, 0.4, 2), 3)

  t.equal(lerp(10, 20, 0.5, 1), 15)
  t.equal(lerp(10, 20, 0.5, 10), 20)
  t.equal(lerp(10, 20, 0.4, 10), 10)

  t.end()
})
