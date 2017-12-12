import React, { Component } from 'react';
import TitleBar from './titlebar.js';
import TabList from './customerInfoView.js';
import custinfo from './../../../api/customerinfo';
class CustomerList extends Component
{
     render() 
     {
    return (
          <TabList initialCust={[]}/>     
        );
      }
}

export default CustomerList;