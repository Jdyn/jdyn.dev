import React from 'react';
import App from 'next/app';
import ReactGA from 'react-ga';
import SEO from '../components/Reusable/SEO';

((): void => {
  ReactGA.initialize('UA-135635293-1');
  ReactGA.pageview('/');
})();

class Application extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <SEO>
        <Component {...pageProps} />
      </SEO>
    );
  }
}

export default Application;
