import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/companySearch" activeClassName="active">Company Search</Link>
      {" | "}
      <Link to="/customerlist" activeClassName="active">Customer List</Link>
    </nav>
  );
};


export default Header;
