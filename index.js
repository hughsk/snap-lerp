module.exports = snapLerp

function snapLerp (a, b, t, min, force) {
  var diff = b - a

  if (diff === 0) {
    return b
  } else
  if (diff > 0) {
    if (diff <= +min) return force || t >= 0.5 ? b : a
  } else {
    if (diff >= -min) return force || t >= 0.5 ? b : a
  }

  return a + diff * t
}
