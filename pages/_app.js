import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../components/Theme';
import NProgress from 'nprogress';
import '../styles/section.scss';

const MyApp = ({ Component, pageProps }) => {
	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
		Router.onRouteChangeStart = () => {
			console.log('onRouteChangeStart triggered');
			NProgress.start();
		};

		Router.onRouteChangeComplete = () => {
			console.log('onRouteChangeComplete triggered');
			NProgress.done();
		};

		Router.onRouteChangeError = () => {
			console.log('onRouteChangeError triggered');
			NProgress.done();
		};
	}, []);

	return (
		<React.Fragment>
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<style jsx global>
					{`
						#nprogress {
							pointer-events: none;
						}
						
						#nprogress .bar {
							background: #29d;
						
							position: fixed;
							z-index: 1200;
							top: 0;
							left: 0;
						
							width: 100%;
							height: 2px;
						}
						
						#nprogress .peg {
							display: block;
							position: absolute;
							right: 0px;
							width: 100px;
							height: 100%;
							box-shadow: 0 0 10px #29d, 0 0 5px #29d;
							opacity: 1.0;
						
							-webkit-transform: rotate(3deg) translate(0px, -4px);
								-ms-transform: rotate(3deg) translate(0px, -4px);
									transform: rotate(3deg) translate(0px, -4px);
						}
						
						#nprogress .spinner {
							display: block;
							position: fixed;
							z-index: 1200;
							top: 15px;
							right: 15px;
						}
						
						#nprogress .spinner-icon {
							width: 18px;
							height: 18px;
							box-sizing: border-box;
						
							border: solid 2px transparent;
							border-top-color: #29d;
							border-left-color: #29d;
							border-radius: 50%;
						
							-webkit-animation: nprogress-spinner 400ms linear infinite;
									animation: nprogress-spinner 400ms linear infinite;
						}
						
						.nprogress-custom-parent {
							overflow: hidden;
							position: relative;
						}
						
						.nprogress-custom-parent #nprogress .spinner,
						.nprogress-custom-parent #nprogress .bar {
							position: absolute;
						}
						
						@-webkit-keyframes nprogress-spinner {
							0%   { -webkit-transform: rotate(0deg); }
							100% { -webkit-transform: rotate(360deg); }
						}
						@keyframes nprogress-spinner {
							0%   { transform: rotate(0deg); }
							100% { transform: rotate(360deg); }
						}
      				`}
				</style>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
};

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;