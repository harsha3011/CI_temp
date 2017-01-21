import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import React,{Component} from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CircularProgress from 'material-ui/CircularProgress';

class ConsoleOutputList extends Component
{
  constructor() {
    super();
  }

  render() {
    const inputField = (
      <div>
      <CircularProgress/>
      </div>
    );
    return (
      <div>
          {inputField}
      </div>
    );
  } 
}

export default ConsoleOutputList;
