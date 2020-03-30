# QRCode: React Native

Renders QR Codes into a React Native view

## Installation

```sh
npm install --save @qrcode/react-native
```

## Usage

```js
const QRCode = require('@qrcode/react-native')

const MyApp = () => (
  <QRCode value='http://example.com' />
)
```

## Props

### `color: string`

Sets the color of the QR Code dark patches. Defaults to `black`.

### `backgroundColor: string`

Sets the color of the QR Code light patches. Defaults to `white`.

Note: you can set this value to `transparent` to not have a background at all.

### `margin: number`

If this prop is set, the resulting image will have additional "points" of the background color on each side.

### `size: number`

If this prop is set, the resulting view will have it's `width` and `height` property set to this value.

### `value: string`

The data to render the QR Code from.
