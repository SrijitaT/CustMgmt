import React, { Component } from 'react';
import './customerlist.css';
import Displayrows from './displayrows';
import searchingFor from './searchdetails';
import axios from 'axios';
//import data from './customerinfo';

class TabList extends Component {
     constructor(props) 
     {
      super(props);
      this.state={
      data : this.props.initialCust,
       term : '',
       toggle: false,
       }   
       this.handleCustDelete=this.handleCustDelete.bind(this) ; 
       this.searchHandler=this.searchHandler.bind(this);   
      }
      componentDidMount()
      {
        axios.get('/api/customers').then(resp=> {
           this.setState({data:resp.data.customer});
        }).catch(console.error)
      }
       handleCustDelete(cust)
        {
           var customer=this.state.data;
           for(var i=0;i<customer.length;i++)
           {
             if(customer[i].id==cust.value.id){
               customer.splice(i,1);
             }           
           this.setState({customer:customer});
          }
        }
        searchHandler(event)
         {
             this.setState({term : event.target.value});
         }

        
   render()
   {
    return (
<div className="container green-container">
 <div className="row">
 <div className="col-md-4"><p>Showing 4 of 920 entries</p></div>
 <div className="col-md-5">
   <input type="text" name="search" placeholder="Refine Results(Name,DOB,Email)" id="search" 
   onChange={this.searchHandler}/>
   </div>
 <div className="col-md-3">
   <button type="button" className="btn btn-outline-secondary" id="newcust">New Customer</button></div>
 </div><br/>
 <div className="row">
 <div className="col-md-10 btn-group filter-btn">
 <div className="col-md-2"><p>Toggle display:</p></div>
<button type="button" className="btn btn-outline-secondary" id="Lastname" onClick={this.handleClick}>LAST NAME</button>
<button type="button" className="btn btn-outline-secondary" id="DOB">DOB</button>
<button type="button" className="btn btn-outline-secondary" id="Email">EMAIL</button>
<button type="button" className="btn btn-outline-secondary" id="Postalcode">POSTAL CODE</button>
<button type="button" className="btn btn-outline-secondary" id="Contact">CONTACT #</button>
 </div>
 </div><br/>
 <table className="table table-striped cust-list">
    <thead>
      <tr>
        <th className="Firstname">Firstname</th>
        <th className="Lastname">Lastname</th>
		       <th className="DOB">DOB</th>
		<th className="Email">Email</th>
		<th className="Postalcode">Postal code</th>
		<th className="Contact">Contact #</th>
		<th></th>
		<th></th>
      </tr>
    </thead>
    <tbody>
       {this.state.data.filter(searchingFor(this.state.term)).map((cust)=>
       <Displayrows key={cust.id} value={cust} deleteCust={this.handleCustDelete}/>)}        

    </tbody>
  </table>
  </div>
    );
  }
}



export default TabList;
