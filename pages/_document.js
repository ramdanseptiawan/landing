import React from 'react'
import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../components/Theme'

export default class MyDocument extends Document {
    render() {
        return <Html lang={'en'}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content={theme.palette.primary.main} />
                <meta name="description" content="Landing page of PT. Langgeng Cipta Solusi." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PT. Langgeng Cipta Solusi - Empowering the Future" />
                <meta property="og:description" content="Landing page of PT. Langgeng Cipta Solusi." />
                <meta property="og:url" content="/" />
                <meta property="og:site name" content="PT. Langgeng Cipta Solusi - Empowering the Future" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content="Landing page of PT. Langgeng Cipta Solusi." />
                <meta name="twitter:title" content="PT. Langgeng Cipta Solusi - Empowering the Future" />
                <meta name="twitter:image" content="/logo512.png" />
                <link rel="apple-touch-icon" href="/logo512.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="canonical" href="/" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};