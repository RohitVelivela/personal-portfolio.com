import '../src/styles/globals.css' 
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Ramyashree Velivela | Senior Performance Analyst</title>
        <meta name="description" content="Senior Performance Analyst specializing in SCADA systems, Power BI, and industrial analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
