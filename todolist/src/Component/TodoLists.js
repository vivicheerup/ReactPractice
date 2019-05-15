/*
This is the to do list

*/
import React from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state ={
      todos:[],
      todosToshow: "all",
      prefix: ""
    }
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.updateTodoToShow = this.updateTodoToShow.bind(this);
    this.handleProChange = this.handleProChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  addTodo(todo){

    this.setState({
      todos:[todo,...this.state.todos]
    })
  }
handleSearchChange(e){
  const pre = e.target.value;
  this.setState({
    prefix: pre
  })
}

handleProChange(proNum){


  this.setState({
    todos: this.state.todos.map(todo =>{

      if (todo.id === proNum.id){
        // supposed to update
        return{
          ...todo,
          num: proNum.pro
        };
      }
      else{
        return todo;
      }
    })
  })

}


  updateTodoToShow(label){
    this.setState({
      todosToshow: label
    })

  }

  handleDelete(id){
    //alert(id);
    this.setState({
      todos: this.state.todos.filter(todo=> todo.id !== id)
    })

  }


  toggleComplete(id){

    this.setState({
      todos: this.state.todos.map(todo =>{

        if (todo.id === id){
          // supposed to update
          return{
            ...todo,
            complete: !todo.complete
          };
        }
        else{
          return todo;
        }
      })
    })
  }
  render(){
    console.log(this.state.todos)
    let todos = [];
    if(this.state.todosToshow === "all"){
      todos = this.state.todos;
    }
    else if (this.state.todosToshow === "processing"){
      todos = this.state.todos.filter(todo=> !todo.complete);
    }
    else if (this.state.todosToshow === "done"){
      todos = this.state.todos.filter(todo=> todo.complete);
    }
    let statusBar;
    let searchBar;
    if(this.state.todos.length > 0){
      statusBar = <div style={{margin:"5px"}}>
                    <button onClick={()=>this.updateTodoToShow('all')}> All </button>
                    <button onClick={()=>this.updateTodoToShow('processing')}> Processing </button>
                    <button onClick={()=>this.updateTodoToShow('done')}> Done </button>
                  </div>
      searchBar = <div style ={{margin:"5px"}}>
                    <input type="search" value = {this.state.prefix} placeholder="search..." onChange={this.handleSearchChange} />
                  </div>

      if(this.state.prefix !== ""){
          //alert("aa");
              todos = todos.filter(todo =>
              todo.text.startsWith(this.state.prefix)
          )
        }

    }
    // sort the todo list by prority number
    todos.sort((a, b)=>{
    var keyA = parseInt(a.num), keyB = parseInt(b.num);
    // Compare the 2 dates
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
  //  use prefix to search from todo TodoList

  });

    return(
      <React.Fragment>
        <div style={{margin:"5px"}}>
          <TodoForm onSubmit={this.addTodo} />
        </div>
        <div>
          {searchBar}
          <div>
          {todos.map(todo => (
            <Todo key={todo.id}

             dataPro = {this.state.todos.num}
             toggleComplete={()=>this.toggleComplete(todo.id)}
             onDelete={()=>this.handleDelete(todo.id)}
             onChange = {this.handleProChange}
             data={todo.text}
             todo={todo}
            />
          ))}
          {statusBar}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
