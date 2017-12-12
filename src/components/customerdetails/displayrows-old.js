import React from 'react';

const displayrows=(props)=>
{
     return(
        <tr>
        <td>{props.value.Firstname}</td>
        <td>{props.value.Lastname}</td>
		<td>{props.value.DOB}</td>
        <td>{props.value.Email}</td>
		<td>{props.value.Postalcode}</td>
		<td>{props.value.Contact}</td>
		<td><a href="/"><span className="glyphicon glyphicon-pencil"></span><br/>
          <span className="glyphicon-class">VIEW AND EDIT</span></a></td>
		  <td><a href="/"><span className="glyphicon glyphicon-trash"></span><br/>
		  <span className="glyphicon-class">DELETE</span></a>
		  </td>
      </tr>
    );
}

export default displayrows;