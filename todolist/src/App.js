import React,{Component} from 'react';
import "./App.css";
import TodoLists from "./Component/TodoLists";

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      count:0
    };
  }
  render(){
    return(
      <div className="App">
        <TodoLists />
      </div>
    );
  }
}
export default App;
