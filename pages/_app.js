import '../styles/globals.css'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Theme from '../components/Theme'

const MyApp = ({ Component, pageProps }) => {
	return <>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	</>
}

export default MyApp
