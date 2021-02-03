import React from 'react'
import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../components/Theme'

export default class MyDocument extends Document {
    render() {
        return <Html lang={'en'} style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content={'#ffffff'} />
                <link rel="apple-touch-icon" href="/logo512.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body style={{ overflowX: 'hidden' }}>
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