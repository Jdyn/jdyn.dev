import React from 'react';
import App from 'next/app';
import Baseline from '../components/Reusable/Baseline';
import SEO from '../components/Reusable/SEO';
import ReactGA from 'react-ga';

(() => {
  ReactGA.initialize('UA-135635293-1');
  ReactGA.pageview('/');
})();

class Application extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Baseline>
        <SEO />
        <Component {...pageProps} />
      </Baseline>
    );
  }
}

export default Application;
