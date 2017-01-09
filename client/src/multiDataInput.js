import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React,{Component} from 'react';
class MultiInputComp extends Component
{
  constructor(props) {
    super(props);
    this.state = {chipData: [],
    count:1,
    lint:''};
  }

  handleRequestDelete = (key) => {
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
    this.props.makeChange(this.state.htmlData);
  };

  renderChip(data) {
    return (
      <Chip style={{margin:5}}
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        >
        {data.label}
      </Chip>

    );
  }
  handleRequestAdd=(e)=>
  {

    this.chipData = this.state.chipData;
    var k=this.state.count;
    var obj={
      key: ++k,
      label:this.state.lint
    }
    this.setState(
      {
        lint:'',
        count:k
      }
    );
    this.chipData.push(obj);
    this.setState({chipData: this.chipData});
      this.props.makeChange(this.state.chipData);
    this.state.chipData.map(this.renderChip, this);
  }
  changeText=(e)=>
  {
    this.setState({
      lint:e.target.value
    })
  }
  render() {
    return (
      <div >
            <TextField style={{margin:20}}
          floatingLabelText="Enter file names"
          onChange={this.changeText}
          value={this.state.lint}
        />
        <RaisedButton label="Add"
         onClick={this.handleRequestAdd}
         />
        <br />
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {this.state.chipData.map(this.renderChip, this)}
        </div>
      </div>
    );
  }
}

export default MultiInputComp;
