declare namespace qrcodeSvg {
  interface Options {
    backgroundColor?: string
    color?: string
    margin?: number
    size?: number
  }
}

declare function qrcodeSvg (input: string, options?: qrcodeSvg.Options): string

export = qrcodeSvg
