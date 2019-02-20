import React, { Component } from 'react';

class ToDoList extends Component {
    state = {hide: "false"};
    hideList= ()=>{ // function that marks the item as complete
      
      if (this.state.hide==="false"){
          this.setState({hide:'hidden'})
      }else{
          this.setState({hide:"false"})
      }
    //   console.log('hello');
    }

    onClearItemClick = () => { //function that deletes one item 
      console.log('onClearItemClick')
      this.props.clearItem(this.props.index);
    }

    render() {
     
   
      return (
        
            <li className={this.state.hide}>
            <span onClick={this.hideList}>
              {this.props.mylist.task}
            </span>
             <button onClick={this.onClearItemClick}> clear item</button>
            </li>   
           
       
      );
    }
  }
  
  export default ToDoList;
  