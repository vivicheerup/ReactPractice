import React from 'react';

export default class Prority extends React.Component{

  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      num: this.props.data
    }
    this.handleNumber = this.handleNumber.bind(this)
  }
  handleNumber(e){
    this.setState({
      num: e.target.value
    })
    this.props.onChange({
      pro: e.target.value
    })
    //this.props.data = e.target.value
  }
  render(){
    return (
      <input type = "number" value = {this.state.num} onChange={this.handleNumber} />
    );
  }

}
