import React, { Component } from 'react';
import './App.css';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {Grid,Row,Col} from 'react-flexbox-grid';

class BuildReport extends Component {
   render() 
   {
      return(
        
            <BuildList/>
        
      );
   }
}

const title = {
    fontSize: 20,
    marginBottom: 22,
    marginTop: 100,
}

class BuildList extends Component {

   render() {

   return(
         
      <Grid>
      <Row center="xs">
      <Col xs={12}>
        <Paper style={title} zDepth={3}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pe
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.llentesque lobortis odio.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pe
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.llentesque lobortis odio.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pe
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.llentesque lobortis odio.
        </Paper>
      
      </Col>
      </Row>   
      </Grid>
      );
   } 
}
export default BuildReport;
