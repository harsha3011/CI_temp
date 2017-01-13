import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { IndexLink } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Grid, Row, Col} from'react-flexbox-grid';
import {Link} from 'react-router';
const styles={
       bar:{
           marginTop:'120',
           marginBottom:'100',
       },
   };
const style = {
   marginLeft: -100,
};
   class Branch extends Component{
       constructor(props) {
           super(props);
           this.state = {
             value: 'a',
             expanded: false,
           };
       }
       render(){
           return(
               <Grid>
               <Paper style={styles.bar}>
                         <div>
                         <Tabs>
                           <Tab label="Branches" >
                           <List>
                               <ListItem primaryText="master(protected)"
                               rightIcon={<Link to="/App/Ruberic">
                               <RaisedButton label="Execute" primary={true} style={style} />
                               </Link>}/>
                               <ListItem primaryText="Integration(protected)"
                               rightIcon={<Link to="/App/Ruberic">
                               <RaisedButton label="Execute" primary={true} style={style} />
                               </Link>}/>
                               <ListItem primaryText="dev"
                               rightIcon={<Link to="/App/Ruberic">
                               <RaisedButton label="Execute" primary={true} style={style} />
                               </Link>}/>
                               <ListItem primaryText="testing"
                               rightIcon={<Link to="/App/Ruberic">
                               <RaisedButton label="Execute" primary={true} style={style} />
                               </Link>}/>
                           </List>
                           </Tab>
                           </Tabs>
                         </div>
               </Paper>
               </Grid>


               );
           }
       }

export default Branch;
