import React,{Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MultiInputComp from './multiDataInput';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class LintTest extends Component
{
    constructor()
    {
      super();
      this.state={
        includeFiles:[],
        excludeFiles:[]
      }
      this.handleIncludeChange=this.handleIncludeChange.bind(this);
      this.handleExcludeChange=this.handleExcludeChange.bind(this);
    }
    handleIncludeChange(values)
    {
      this.setState({
        includeFiles:values}
      );
    }
    handleExcludeChange(values)
    {
      this.setState({
        excludeFiles:values}
      );
    }
    render()
    {
      return(
        <div>
        <Grid>
        <Card>
          <CardHeader
           title="EsLint"
            actAsExpander={true}
            showExpandableButton={true}
          >
          </CardHeader>
          <CardText expandable={true}>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={6}>
                  Include files to test
                  <MultiInputComp values={this.state.includeFiles} onChange={this.handleIncludeChange} />
                </Col>
                <Col xs={6}>
                  Exclude files from test
                  <MultiInputComp values={this.state.excludeFiles}
                  onChange={this.handleExcludeChange} />
                </Col>
              </Row>
            </Col>
          </Row>
          </CardText>
        </Card>
        </Grid>
        </div>
      );
    }

}
export default LintTest;
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
