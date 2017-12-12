import React, { Component,PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import '../titlebar.css';

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
     <IndexLink to="/" activeClassName="active"><button type="button" className="btn btn-default">Dashboard</button></IndexLink>
     <Link to="/customerlist" activeClassName="active"><button type="button" className="btn btn-default">Customer List</button></Link>
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