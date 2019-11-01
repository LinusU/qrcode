# QRCode: SVG

Renders QR Codes into SVG strings

## Installation

```sh
npm install --save @qrcode/svg
```

## Usage

```js
const qrcodeSvg = require('@qrcode/svg')

console.log(qrcodeSvg('http://example.com'))
// => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" shape-rendering="crispEdges"><path stroke="black" ...
```

## API

### `qrcodeSvg(input: string, options?: Options): string`

Renders a QR Code with the data in `input`. Returns a string with the SVG content.

#### `options.color: string`

Sets the color of the QR Code dark patches. Defaults to `black`.

#### `options.backgroundColor: string`

Sets the color of the QR Code light patches. Defaults to `white`.

Note: you can set this value to `transparent` to not have a background at all.

#### `options.margin: number`

If this option is set, the resulting image will have additional "points" of the background color on each side.

#### `options.size: number`

If this option is set, the resulting `svg`-tag will have it's `width` and `height` property set to this value.
