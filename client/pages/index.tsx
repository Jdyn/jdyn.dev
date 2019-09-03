import React from 'react';
import { NextPageContext } from 'next';
import HomeContainer from '../containers/HomeContainer';

class Index extends React.PureComponent {
  public static async getInitialProps(ctx: NextPageContext): Promise<object> {
    return {};
  }

  public render(): JSX.Element {
    return <HomeContainer {...this.props} />;
  }
}

export default Index;
