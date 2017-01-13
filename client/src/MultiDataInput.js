import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import React,{Component} from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Grid, Row, Col} from 'react-flexbox-grid';
class MultiInputComp extends Component
{
  constructor() {
    super();
    this.state = {
      inputValue: [],
    }
  }

  static get propTypes() {
    return {
      values: React.PropTypes.array.isRequired,
      onChange: React.PropTypes.func.isRequired
    }
  }

  render() {
    const inputField = (
      <TextField
        floatingLabelText="Enter files names"
        value={this.state.inputValue}
        onChange={this.handleInputValueChange.bind(this)} />
    );
    const addButton = (
      <input type="submit" value="Submit"/>
    )
    const values = this.props.values.map((value,index) => {

      return (
        <Chip style={{margin:4}} onRequestDelete=
          {this.handleRemoveValue.bind(this, index)}
        >{value}</Chip>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleAddValue.bind(this)}>
          {inputField}
          {addButton}
          <div style={{display:'flex',flexWrap:'wrap'}}>
          {values}
          </div>
        </form>
      </div>
    );
  }

  handleInputValueChange(event) {
    const newInputValue = event.target.value;
    this.setState({inputValue: newInputValue});
  }

  handleAddValue(e) {
    e.preventDefault();
    if(this.state.inputValue=='')
    {
      alert('Cannot add empty filename');
    }
    else {
      const values = this.props.values;
      console.log()

      values.push(this.state.inputValue);
      this.setState({
      inputValue:''});
      this.props.onChange(values);
    }

  }

  handleRemoveValue(valueIndex) {
    console.log(valueIndex);
    const values = this.props.values;
    values.splice(valueIndex,1);
    this.props.onChange(values);
  }
}

export default MultiInputComp;
