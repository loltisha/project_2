# **To-Do List**
It is a website were the user can add thier list of tasks and mark it as completed.

**Clear item button:**
In App.js there is a function that clears one item from the list, it has an index as a parameter and specifiy the number of the items to be removed from the list. Then modified the map method to have a listData and index as parameter to call  it in the ToDoList ans use it for the clear item button.
```js
clearItem = (index)=>{ // clears one item from the list
    const copyItem = this.state.myList.splice(index,1); // remove one item from the array
    this.setState({
     task:copyItem //  update the state with the new copy
    })
  }
```

```js
const toDoList = this.state.myList.map((listData,index) => { // map the myList array to the new variable toDoList
    return (
    
    <ToDoList mylist={listData} index = {index} clearItem={this.clearItem}/> // creates object for the component ToDoList to use it in onother component
    );
})
```



**Check the To-Do list if it is empty or not:**
```js
 { toDoList.length === 0 ? "" : toDoList} {/* check if toDoList is empty or not */}
```