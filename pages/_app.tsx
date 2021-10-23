import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { THEME } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  )

}
export default MyApp
