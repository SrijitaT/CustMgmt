
import React from 'react';
class FormDetails extends React.Component{

render(){
  return(
  <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text"  required />
    <button>Search</button>
    </form>
  </div>
  );
            }
};

export default FormDetails;
