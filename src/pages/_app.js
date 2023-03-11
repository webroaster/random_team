import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import "../styles/globals.css"

export default function App(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>サクッとチーム錬成 | ランダムチーム</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content='サクッとチーム錬成 | メンバーと組数を指定して、ランダムにメンバーを振り分けます。'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "light" }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
