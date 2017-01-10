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
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
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
}
class BuildList extends Component 
{
   render()
   {
      return(
         
            <Grid>
               <Row center="xs" between="sm">
                  <Col xs={12} sm={6}>
                     <h1>Build Report</h1>
                  </Col>
                  <Col xs={12} sm={6}>
                     <Link to="/App/test">
                        <IconButton><Setting/></IconButton>
                     </Link>
                  </Col>
               </Row>
            
            <Row center="xs">
               <Col xs={12}>
                     <Paper style={{height:60,margin:20}} zDepth={5}>
                     Do you want to re-run last build?
                     <RaisedButton label="Yes" />
                     </Paper>
               </Col>     
            </Row>
            <List className="listbox">
               <Row>
                  <Col xs={12}>
                     <ListItem>
                        <Card >      
                           <CardHeader
                           title="Build ID:347568"
                           subtitle="Build Time: 12/12/2016"
                           actAsExpander={true}
                           showExpandableButton={true}>
                              <Row middle="xs">
                                 <Col xs={5}  sm={12}>
                                 Status: <CircularProgress size={20}/> 
                                 <IconButton size={15}><Delete /></IconButton>
                                 </Col>
                              </Row>
                           </CardHeader>
                        </Card>
                     </ListItem>
                  </Col>
               </Row>
               
               <Row middle="xs">
                  <Col xs={12}>
                     <ListItem>
                        <Card >
                           <CardHeader title="Build ID:347568"
                           subtitle="Build Time: 12/12/2016"
                           actAsExpander={true}
                           showExpandableButton={true}>
                              
                              <Row middle="xs">
                                 <Col xs={12} sm={3}>
                                    Status: <FullHeart style={icon}
                                    color={'green'}/>
                                    Error: <Check color={'green'}/>
                                    Warning: <Happy style={icon} color={'green'}/>
                                    <IconButton style={icon} ><Delete /></IconButton>
                                 </Col>
                              </Row>
                              
                           </CardHeader>
                           <CardText expandable={true}>
                              <Table>
                                 <TableBody stripedRows  displayRowCheckbox={false}>
                                    <TableRow>
                                       <TableRowColumn>1</TableRowColumn>
                                       <TableRowColumn>Testing Environment</TableRowColumn>
                                        <TableRowColumn><Check size={30} color={'green'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>2</TableRowColumn>
                                       <TableRowColumn>Cloning</TableRowColumn>
                                        <TableRowColumn><Check size={30} color={'green'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>3</TableRowColumn>
                                       <TableRowColumn>Linting</TableRowColumn>
                                        <TableRowColumn><Check size={30} color={'green'}/></TableRowColumn>
                                    </TableRow>
                                 </TableBody>
                              </Table> 
                           </CardText>
                        </Card>
                     </ListItem>
                  </Col>
               </Row>
               <Row middle="xs">
                  <Col xs={12}>
                     <ListItem>
                        <Card >
                           <CardHeader
                           title="Build ID:347456"
                           subtitle="Build Time: 1/12/2016"
                           actAsExpander={true}
                           showExpandableButton={true}>
                              
                              <Row middle="xs">
                                 <Col xs={12} sm={3} >
                                 Status:<FullHeart color={'red'} style={icon}/>
         
                                 Error:<Badge badgeContent={4} primary={true}>
                                          <Warning color={'red'} style={icon}/>
                                          </Badge>
                                 Warning:<Sad color={'red'} style={icon}/>
                                         
                                 <IconButton><Delete /></IconButton>
                                 </Col>
                              </Row>
                           </CardHeader>
                           <CardText expandable={true}>
                              <Table>
                                 <TableBody stripedRows  displayRowCheckbox={false}>
                                    <TableRow>
                                       <TableRowColumn>1</TableRowColumn>
                                       <TableRowColumn>Testing Environment</TableRowColumn>
                                        <TableRowColumn><Error color={'red'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>2</TableRowColumn>
                                       <TableRowColumn>Cloning</TableRowColumn>
                                        <TableRowColumn><Error color={'red'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>3</TableRowColumn>
                                       <TableRowColumn>Linting</TableRowColumn>
                                        <TableRowColumn><Error color={'red'}/></TableRowColumn>
                                    </TableRow>
                                     <TableRow>
                                       <TableRowColumn>4</TableRowColumn>
                                       <TableRowColumn>Parsing</TableRowColumn>
                                        <TableRowColumn><Error color={'red'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>5</TableRowColumn>
                                       <TableRowColumn>Object Not Used</TableRowColumn>
                                        <TableRowColumn><Warning color={'red'}/></TableRowColumn>
                                    </TableRow>
                                 </TableBody>
                              </Table>
                           </CardText>         
                        </Card>
                     </ListItem>
                  </Col>
               </Row> 
               <Row middle="xs">
                  <Col xs={12}>
                     <ListItem>
                        <Card>
                           <CardHeader
                           title="Build ID:347456"
                           subtitle="Build Time: 1/12/2016"
                           actAsExpander={true}
                           showExpandableButton={true}>
                              
                              <Row middle="xs">
                                 <Col xs={12} sm={3} >
                                    Status: <FullHeart style={icon} color={'green'}/>
                                     
                                    Error: <Check style={icon} color={'green'}/>
                                    Warning: <Senti style={icon} color={'green'}/>
                                             
                                    <IconButton tooltip="Delete"><Delete /></IconButton>
                                 </Col>
                              </Row> 
                           </CardHeader>
                           <CardText expandable={true}>
                              <Table>
                                 <TableBody stripedRows  displayRowCheckbox={false}>
                                    <TableRow>
                                       <TableRowColumn>1</TableRowColumn>
                                       <TableRowColumn>Testing Environment</TableRowColumn>
                                        <TableRowColumn><Check color={'green'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>2</TableRowColumn>
                                       <TableRowColumn>Cloning</TableRowColumn>
                                        <TableRowColumn><Check color={'green'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>3</TableRowColumn>
                                       <TableRowColumn>Linting</TableRowColumn>
                                        <TableRowColumn><Check color={'green'}/></TableRowColumn>
                                    </TableRow>
                                     <TableRow>
                                       <TableRowColumn>4</TableRowColumn>
                                       <TableRowColumn>Parsing</TableRowColumn>
                                        <TableRowColumn><Check color={'green'}/></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                       <TableRowColumn>5</TableRowColumn>
                                       <TableRowColumn>Object Not Used</TableRowColumn>
                                        <TableRowColumn><Warning color={'red'}/></TableRowColumn>
                                    </TableRow>
                                 </TableBody>
                              </Table>
                           </CardText>
                        </Card>
                     </ListItem>
                  </Col>
               </Row>
            </List>
         
      </Grid>
      );
   } 
}
export default BuildReport;
