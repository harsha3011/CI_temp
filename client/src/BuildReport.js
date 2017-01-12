import React, { Component } from 'react';
import './App.css';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import FullHeart from 'material-ui/svg-icons/action/favorite';
import Warning from 'material-ui/svg-icons/action/report-problem';
import Check from 'material-ui/svg-icons/action/done';
import Happy from 'material-ui/svg-icons/social/mood';
import Error from 'material-ui/svg-icons/content/clear';
import Senti from 'material-ui/svg-icons/social/sentiment-neutral';
import Sad from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import Badge from 'material-ui/Badge';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import Setting from 'material-ui/svg-icons/action/settings';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Delete from 'material-ui/svg-icons/action/delete';
import {Grid,Row,Col} from 'react-flexbox-grid';
import {Card, CardHeader, CardText, CardMedia, CardTitle, CardActions} from 'material-ui/Card';

class BuildReport extends Component {
   render() 
   {
      return(
        
            <BuildList/>
        
      );
   }
}
const icon=
{
   width:'20',height:'20'
};
const style = {
  margin: 30,
  display: 'inherit',
};
const title = {
    fontSize: 20,
    marginLeft: 81,
    marginBottom: 22,
    marginTop: 20,
}

class BuildList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      executeAction: false
    };
    this.executeAction = this.executeAction.bind(this);
  }
  executeAction() {
    this.setState({executeAction: true});
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

   render() {
    var cardStyle = {
        height: '55px'
    }
    let executeButton = '',
        executeButtonReport = '';
    if(this.state.expanded) {
        executeButton = <RaisedButton label="Execute" primary={true} style={style} onClick={this.executeAction} />
        cardStyle = {
            height: '250px'
        }
    }
    if(this.state.executeAction){
        executeButtonReport = <Paper expandable={true} style={style} zDepth={5} rounded={true}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </Paper>
    }
      return(
         
            <Grid>
               <Row center="xs" between="sm">
                  <Col xs={12} sm={6}>
                     <h2>Build Report</h2>
                  </Col>
                  <Col xs={12} sm={6}>
                     <Link to="/App/pipelineSettings">
                        <IconButton><Setting color={'white'} size={80}/></IconButton>
                     </Link>
                  </Col>
               </Row>
            
            <Row center="xs">
               <Col xs={12}>
                     <Card style={cardStyle} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                        <CardHeader
                          title="Pipeline Commands"
                          actAsExpander={true}
                          showExpandableButton={true}
                          style={title}
                        />

                        <CardText expandable={true} >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pe
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.llentesque lobortis odio.
                        </CardText>
                        {executeButton}
                      </Card>
                        {executeButtonReport}
                </Col>
            </Row>
      </Grid>
      );
   } 
}
export default BuildReport;
