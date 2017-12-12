import React, { Component } from 'react';
import './customerlist.css';

class TitleBar extends Component {
  render() {
    return (
        <div>
    <div className="container-fluid">
  <div className="row title-bar">
  <div className="col-md-7">
   <h6>Application Logo</h6>      
    <p>Welcome Srijita Thakur</p>
  </div>
  <div className="col-md-5">
  <div className="btn-group">
    <button type="button" className="btn btn-default">Dashboard</button>
    <button type="button" className="btn btn-default">Customer</button>
    <button type="button" className="btn btn-default">My Profile</button>
	<button type="button" className="btn btn-default">Francis</button>
	<button type="button" className="btn btn-default">Log Out</button>
  </div>
  </div> 
</div>
  </div>
  <hr/>
  </div>
    );
  }
}

export default TitleBar;