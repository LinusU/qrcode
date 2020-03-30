const React = require('react')
const { SvgXml } = require('react-native-svg')
const qrcodeSvg = require('@qrcode/svg')

module.exports = function QRCode (properties) {
  const xml = qrcodeSvg(properties.value, {
    backgroundColor: properties.backgroundColor,
    color: properties.color,
    margin: properties.margin,
    size: properties.size
  })

  return React.createElement(SvgXml, { xml })
}
