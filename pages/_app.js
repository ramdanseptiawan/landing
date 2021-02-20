import '../styles/globals.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    Router.onRouteChangeStart = () => {
      console.log('s')
      NProgress.start();
    };

    Router.onRouteChangeComplete = () => {
      console.log('s')
      NProgress.done();

    };

    Router.onRouteChangeError = () => {
      console.log('s')
      NProgress.done();
    };
  }, []);
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
