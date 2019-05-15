import React from 'react';
import Prority from './Prority';



export default class Todo extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      id : this.props.todo.id,
      num: this.props.todo.num,
      context : this.props.data,
      isComplete: this.props.isComplete,
      isEdit: false,
      pre: ""
    }
    this.onChangePro = this.onChangePro.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleNewChange = this.handleNewChange.bind(this)

  }
  onChangePro(proNum){
    //alert(proNum.pro);
    this.setState({
      num: proNum.pro
    });
    this.props.onChange({
      pro: proNum.pro,
      id: this.state.id
    })
  }
  handleEdit(e){
    const preValue = e.target.value
    console.log(preValue)
    this.setState({
      pre: preValue,
      isEdit: true

    })
  }
  handleCancel(){
    //const current = this.state.text
    this.setState({
      context: this.state.pre,
      isEdit: false

    })
  }
  handleNewChange(e){

    const newText = e.target.value
    this.setState({
      context: newText,
    })
  }

  handleSave(e){
    const newText = e.target.name
    this.setState({
      context: newText,
      isEdit:false
    })
  }

  render(){

    let editBar;
    editBar = this.state.isEdit ?
              <React.Fragment>
                <input type="text" value={this.state.context} onChange={this.handleNewChange} />
                <button onClick ={this.handleCancel}> Cancel </button>
                <button name={this.state.context} onClick ={this.handleSave}> Save </button>
              </React.Fragment> : undefined
    return(
      <li>
        <Prority data={this.state.num} onChange={this.onChangePro}  />
        <p
          style={{
            margin: "10px",
            display:this.state.isEdit ? "none": "inline",
            color: this.props.todo.complete? "gray":"black",
            textDecoration: this.props.todo.complete? "line-through":""
          }}
          onClick={this.props.toggleComplete}>
          {this.state.context}
        </p>
        {editBar}
        <button value={this.state.context} onClick ={this.handleEdit}> Edit </button>
        <button onClick ={this.props.onDelete}> Delete </button>
      </li>
    );
  }
}
