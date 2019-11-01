const core = require('@qrcode/core')

function createPath (data, size, margin) {
  let path = ''
  let moveBy = 0
  let newRow = false
  let lineLength = 0

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size)
    const row = Math.floor(i / size)

    if (col === 0) {
      newRow = true
    }

    if (!data[i]) {
      moveBy++
      continue
    }

    lineLength++

    if (!(i > 0 && col > 0 && data[i - 1])) {
      path += newRow ? `M${margin + col},${margin + 0.5 + row}` : `m${moveBy},0`
      moveBy = 0
      newRow = false
    }

    if (!(col + 1 < size && data[i + 1])) {
      path += `h${lineLength}`
      lineLength = 0
    }
  }

  return path
}

module.exports = function qrcodeSvg (input, options = {}) {
  const { size, data } = core.create(input).modules

  const margin = options.margin || 0
  const fullSize = (size + (margin * 2))

  const viewBox = `viewBox="0 0 ${fullSize} ${fullSize}"`
  const dimensions = options.size ? ` width="${options.size}" height="${options.size}"` : ''
  const bg = options.backgroundColor === 'transparent' ? '' : `<path fill="${options.backgroundColor || 'white'}" d="M0,0h${fullSize}v${fullSize}H0z"/>`
  const path = `<path stroke="${options.color || 'black'}" d="${createPath(data, size, margin)}"/>`

  return `<svg xmlns="http://www.w3.org/2000/svg" ${viewBox}${dimensions} shape-rendering="crispEdges">${bg}${path}</svg>`
}
