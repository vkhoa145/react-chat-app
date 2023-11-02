import { Html, Head, Main, NextScript } from 'next/document'
const bodyStyle = {
  background: 'none'
}
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={bodyStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
