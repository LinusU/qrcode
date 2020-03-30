declare namespace QRCode {
  interface Props {
    backgroundColor?: string
    color?: string
    margin?: number
    size?: number
    value: string
  }
}

declare const QRCode: React.FC<QRCode.Props>

export = QRCode
