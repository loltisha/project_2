import React, { Component } from 'react';
import ToDoList from './ToDoList'
import './App.css';
import axios from 'axios';
class App extends Component {
  state = { //save the data 
   list:{
     task: '',
    },
    myList: [],
    quotes: ""
  }
  updateForm = (event) => {

    const newData = event.target.value; //get new value the user typed
    const originalState = this.state.list; // get the old value
    const copy = Object.assign({}, originalState);// make a copy of the original state
    const key = event.target.name;// get the key form the name of input
    copy[key] = newData; // update the copy with the data the user typed
    console.log(copy);// update the state with the new copy
    this.setState({
      list: copy 
    })
  }
  submitForm = (event) => {
   
    event.preventDefault(); // prevent the user to refresh the page
    console.log("submit" , this.state.list);
    const copy = this.state.myList.slice(0);  //make a copy of the myList array 
    if( this.state.list.task !== ""){ // check the if the task empty or not before print it to the user screen
    copy.push(this.state.list);     // add the new myList data to the array
    //update the state with our new copy 
    this.setState({
      myList:copy,
      list: {
        task: ''
      }
    })
  }

  }
  clearList = ()=>{ //clears all the list from the array
    this.setState({
      myList: [] // let the array empty
    })
  }
  clearItem = (index)=>{ // clears one item from the list
    const copyItem = this.state.myList.splice(index,1); // remove one item from the array
    this.setState({
     task:copyItem //  update the state with the new copy
    })
  }
  componentDidMount(){ //it like axios method
    console.log('hi');
    axios({
      method: 'get',
      url: "https://quotes.rest/qod.json" // the url for the quote that changes everday
    }).then((response) => {
      console.log(response.data.contents.quotes[0].quote) // print the quotes in the console
      this.setState({
        quotes: response.data.contents.quotes[0].quote, // update the new value for the qoutes
      })
      // console.log(response)
    })
  .catch((error) => {console.log(error)});
  
}

  render() {
    const toDoList = this.state.myList.map((listData,index) => { // map the myList array to the new variable toDoList
      return (
        
        <ToDoList mylist={listData} index = {index} clearItem={this.clearItem}/> // creates object for the component ToDoList to use it in onother component
      );
    })
    return (
      <div className="container">
         <form onSubmit={this.submitForm}> {/*call the function submitForm */}
          <h1>To-Do List</h1>
          <label>My Tasks</label>
          <input type='text' name='task' onChange={this.updateForm} value={this.state.list.task} placeholder="Type Your Tasks"   />
          <button type='submit'> Add</button> 
          <button onClick={this.clearList} type="button"> Remove List</button>
        </form>
        
        <div className="list">
          
          <div>
          <ul>
         { toDoList.length === 0 ? "" : toDoList} {/* check if toDoList is empty or not */}
         </ul>
        </div>
        </div>
       <div className = " containerQuotes"> <p>{this.state.quotes}</p></div>
       
      </div>
      
    );
  }
}

export default App;
