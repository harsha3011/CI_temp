import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';


const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});

class ScriptConfig extends Component{

    constructor(props) {
        super(props);
        this.handleChangeCommands=this.handleChangeCommands.bind(this)
        this.handleChangeTitle=this.handleChangeTitle.bind(this)
      }
      static get propTypes() {
        return {
          value: React.PropTypes.object.isRequired,
          onChange: React.PropTypes.func.isRequired
        }
      }
    
       handleChangeCommands=(event)=>{;
        const newCmd=event.target.value;
        
        const obj = {"title":this.props.value.title,"cmd":newCmd};
         this.props.onChange(obj);

      }
      handleChangeTitle=(event)=>{
        const newTitle=event.target.value
        const obj = {"title":newTitle,"cmd":this.props.value.cmd};
         this.props.onChange(obj);
      }
     
      

 render(){
    return(
      <Grid>
        <Row start="xs">
          <Col xs={12}>
            <Card>
              <CardHeader
                title="Add your own shell script"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
              <TextField 
                floatingLabelText="Add a title"
                value={this.props.value.title}
                onChange={this.handleChangeTitle}
              />
              <br/>
              <Paper style={{backgroundColor:'black'}}>
                <MuiThemeProvider muiTheme={muiTheme}>
                 <Grid>
                  <Row start="xs">
                    <Col xs={6} xsOffset={3}>
                     <TextField
                      multiLine={true}
                      value={this.props.value.cmd}
                      floatingLabelText="Add Commands"
                      fullWidth={true}
                      onChange={this.handleChangeCommands}
                     />
                    </Col>
                  </Row>
                 </Grid>
                </MuiThemeProvider>
              </Paper>
              <br/>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
 }

  export default ScriptConfig;