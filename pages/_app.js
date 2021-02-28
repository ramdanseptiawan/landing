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
      NProgress.start();
    };

    Router.onRouteChangeComplete = () => {
      NProgress.done();

    };

    Router.onRouteChangeError = () => {
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
