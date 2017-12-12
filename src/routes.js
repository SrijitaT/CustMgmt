import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/homePage/HomePage';
import AboutPage from './components/aboutPage/AboutPage';
import CompanyInfo from './components/companyInfo/companyInfo';
import CustomerList from './components/customerdetails/customerlist.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="companySearch" component={CompanyInfo} />
    <Route path="customerlist" component={CustomerList}/>
  </Route>
);
