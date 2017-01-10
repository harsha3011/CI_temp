import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import React,{Component} from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
class MultiInputComp extends Component
{
  constructor() {
    super();
    this.state = {
      inputValue: [],
      index:-1
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
        floatingLabelText="Enter Filenames"
        value={this.state.inputValue}
        onChange={this.handleInputValueChange.bind(this)} />
    );
    const addButton = (
      <FlatButton
        icon={<ContentAdd />}
        onTouchTap={this.handleAddValue.bind(this)}
        />
    )
    const values = this.props.values.map((value, index) => {

      return (
        <Chip onRequestDelete={this.handleRemoveValue.bind(this, index)}
        >{value.data}</Chip>
      );
    });
    return (
      <div>
      {inputField}
      {addButton}
      {values}
      </div>
    );
  }

  handleInputValueChange(event) {
    const newInputValue = event.target.value;
    this.setState({inputValue: newInputValue});
  }

  handleAddValue() {
    var key=this.state.index;
    key++;
    const values = this.props.values;
    var obj={key:key,
    data:this.state.inputValue}
    values.push(obj);
    this.setState({index: key,
    inputValue:''});
    this.props.onChange(values);

  }

  handleRemoveValue(valueIndex) {
    const values = this.props.values;
    const valueToDelete = values.map((data) => data.key).indexOf(valueIndex);
    values.splice(valueToDelete,1);
    this.props.onChange(values);
  }
}

export default MultiInputComp;
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import React,{Component} from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
class MultiInputComp extends Component
{
  constructor() {
    super();
    this.state = {
      inputValue: [],
      index:-1
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
        floatingLabelText="Enter Filenames"
        value={this.state.inputValue}
        onChange={this.handleInputValueChange.bind(this)} />
    );
    const addButton = (
      <FlatButton
        icon={<ContentAdd />}
        onTouchTap={this.handleAddValue.bind(this)}
        />
    )
    const values = this.props.values.map((value, index) => {

      return (
        <Chip onRequestDelete={this.handleRemoveValue.bind(this, index)}
        >{value.data}</Chip>
      );
    });
    return (
      <div>
      {inputField}
      {addButton}
      {values}
      </div>
    );
  }

  handleInputValueChange(event) {
    const newInputValue = event.target.value;
    this.setState({inputValue: newInputValue});
  }

  handleAddValue() {
    var key=this.state.index;
    key++;
    const values = this.props.values;
    var obj={key:key,
    data:this.state.inputValue}
    values.push(obj);
    this.setState({index: key,
    inputValue:''});
    this.props.onChange(values);

  }

  handleRemoveValue(valueIndex) {
    const values = this.props.values;
    const valueToDelete = values.map((data) => data.key).indexOf(valueIndex);
    values.splice(valueToDelete,1);
    this.props.onChange(values);
  }
}

export default MultiInputComp;
