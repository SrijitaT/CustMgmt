import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      options:this.props.content,
       visible: false
    }
  }
componentDidMount(){
     var comp_id=this.props.id;
     var inputid="input_"+comp_id;
     var saved_val=this.props.single[comp_id];
     if(saved_val)
        ReactDOM.findDOMNode(this.refs[inputid]).value=saved_val;
      //document.getElementById(inputid).value=saved_val;

  /*  window.addEventListener("mouseup",function(event){
     var search_list=document.getElementById(comp_id);
     var inputsearch=document.getElementById(inputid);
     if(event.target!=search_list && event.target!=inputsearch){
         //search_list.style.display = "none";
         //this.setState({visible:false});
          this.resetState();
      }
      console.log(event);
  });*/
  window.addEventListener("mouseup",function(event){
    var search_list=ReactDOM.findDOMNode(this.refs[comp_id]);
    var inputsearch=ReactDOM.findDOMNode(this.refs[inputid]);
    if(event.target!=search_list && event.target!=inputsearch){
      search_list.style.display = "none";
    }
  });
}

handleFocus(e){
  this.setState({options: this.props.content,visible: !this.state.visible});
}

menutoggle(){
          this.setState({visible: !this.state.visible});
}

handleClick(e)
{
      var comp_id=this.props.id;
      var selected=e.target.attributes.value.value;
      var inputid="input_"+comp_id;
      this.props.onDropdownChange(e.target.attributes.value.value,comp_id);
      ReactDOM.findDOMNode(this.refs[inputid]).value=selected;
      window.removeEventListener("mouseup",function(event){
          this.menutoggle();
       });
}
resetState(){
  if(!this.state.visible)
  {
    this.setState({visible:true});
  }
}
updatedList(event){
     var updatedList=this.props.content;
     updatedList=updatedList.filter(function(option){
          return option.label.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        });
    this.setState({options: updatedList});
    this.resetState();
}



render(){
      var optionsArr=this.state.options;
      var inputid="input_"+this.props.id;
      const listItems = optionsArr.map((option) =>
        <li onClick={(e)=>this.handleClick(e)}
         key={option.id} value={option.label}>{option.label}</li>
      );

  return(
    <div>
    <input type="text" id={inputid} ref={inputid} className="form_control input_search" placeholder="Search.."
     onChange={(e)=>this.updatedList(e)}
      onFocus={(e)=>this.handleFocus(e)}
      />
      {(this.state.visible)?<ul
        id={this.props.id} className="search_list">{listItems}</ul>:""}
    </div>
  );
}

}

export default SearchDropdown;
