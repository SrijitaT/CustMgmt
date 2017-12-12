import React ,{Component}from 'react';
//import TabList from './customerInfoView.js';
 
class Displayrows extends Component{
constructor(props)
{
    super(props);
   
}
 onDelete(cust)
  {
        this.props.deleteCust(cust);
  }   
 
 render()
 {
      return(
        <tr>
        <td>{this.props.value.Firstname}</td>
        <td>{this.props.value.Lastname}</td>
		<td>{this.props.value.DOB}</td>
        <td>{this.props.value.Email}</td>
		<td>{this.props.value.Postalcode}</td>
		<td>{this.props.value.Contact}</td>
		<td><a href="/"><span className="glyphicon glyphicon-pencil"></span><br/>
          <span className="glyphicon-class">VIEW AND EDIT</span></a></td>
		  <td><a href="#" onClick={this.onDelete.bind(this,this.props)}><span className="glyphicon glyphicon-trash"></span><br/>
		  <span className="glyphicon-class">DELETE</span></a>
		  </td>
      </tr>
    )

};

   
}

export default Displayrows;