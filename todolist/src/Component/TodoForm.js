import React from 'react';
import shortid from 'shortid';

 export default class TodoForm extends React.Component{
   constructor(props){
     super(props)
     console.log(this.props)
     this.state = {
       text: "",
       num: "1"
     };
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange(event){
     this.setState({
       [event.target.name]: event.target.value
     });
   };
   handleSubmit(event){
     event.preventDefault();
     this.props.onSubmit({
       id:shortid.generate(),
       num: this.state.num,
       text: this.state.text,
       complete: false
     });
     this.setState({
       text:""
     });
   }

   render(){
     return(

     <form onSubmit={this.handleSubmit}>
      <input
         name = "text"
         value ={this.state.text}
         onChange = {this.handleChange}
         placeholder="add to do..."
      />
      <button onClick={this.handleSubmit}>add</button>
     </form>
   );
   }
 }
