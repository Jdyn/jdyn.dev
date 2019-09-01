import React from "react";
import HomeContainer from "../containers/HomeContainer";

class index extends React.Component {
  render() {
    return <HomeContainer {...this.props} />;
  }
}

export default index;
