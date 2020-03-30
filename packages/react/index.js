const React = require('react')
const qrcodeSvg = require('@qrcode/svg')

module.exports = function QRCode (properties) {
  const xml = qrcodeSvg(properties.value, {
    backgroundColor: properties.backgroundColor,
    color: properties.color,
    margin: properties.margin,
    size: properties.size
  })

  return React.createElement('img', {
    height: properties.size,
    src: 'data:image/svg+xml,' + encodeURIComponent(xml),
    width: properties.size
  })
}
