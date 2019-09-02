import React from 'react';
import HomeContainer from '../containers/HomeContainer';

class Index extends React.PureComponent {
  public render(): JSX.Element {
    return <HomeContainer {...this.props} />;
  }
}

export default Index;
