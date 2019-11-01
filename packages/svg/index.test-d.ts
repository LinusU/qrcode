import {expectType} from 'tsd'
import qrcodeSvg = require('./')

expectType<string>(qrcodeSvg('test'))
expectType<string>(qrcodeSvg('test', { size: 10 }))
expectType<string>(qrcodeSvg('test', { color: 'red' }))
expectType<string>(qrcodeSvg('test', { backgroundColor: 'green' }))
expectType<string>(qrcodeSvg('test', { color: 'red', backgroundColor: 'green' }))
expectType<string>(qrcodeSvg('test', { color: 'red', size: 10 }))
expectType<string>(qrcodeSvg('test', { color: 'red', backgroundColor: 'green', size: 10 }))
