import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Customer and Goal Mangement Project</h1>
        <p>Project Objective: Setting Customer and Goal Listing</p>
        <Link to="about" className="btn btn-primary btn-lg">About Us</Link>
      </div>
    );
  }
}

export default HomePage;
