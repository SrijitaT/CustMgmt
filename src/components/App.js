// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import TitleBar from './common/titlebar';
//import Header from './common/header';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <TitleBar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;
