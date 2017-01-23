import React, { Component } from 'react';
import Request from 'superagent';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Table, TableBody,  TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

const muiTheme = getMuiTheme({
 palette: {
   textColor: white,
 }
});

class Executions extends Component {

 constructor() {
          super();
          this.state = {
             expanded: false,
            consoleOutput:[]
          };
      }
      handleExpand = () => {
    this.setState({expanded: true});
  };

 componentWillMount()
      {

        var getFiles1=localStorage.getItem("repoName");
         const reponame=JSON.parse(JSON.stringify(getFiles1));
          var getFiles2=localStorage.getItem("repoBranch");
         const repobranch=JSON.parse(JSON.stringify(getFiles2));
          var getFiles3=localStorage.getItem("owner");
         const ownername=JSON.parse(JSON.stringify(getFiles3));

        const url='http://localhost:9080/api/'+ownername+'/'+reponame+'/'+repobranch+'/executions';
        Request
       .get(url)
       .end((err,resp) => {
              this.setState({
                consoleOutput:resp.body
              })
            });
      }



render() {

    var consoleRows=[];

        consoleRows.push(this.state.consoleOutput.map((obj)=>
        {

          var output=[];
          if(obj.state=="Completed")
          {
            output=obj.stdout;
            output=output.split(/[\n,]+/);
            var list=output.map(function(data)
            {
              return  (<li>{data}</li>);
            })
          }
          else if(obj.state=="Running")
          {

          }
          else
          {
            output=obj.stderr;
            output=output.split(',');
            var list=output.map(function(data)
            {
              return  (<li>{data}</li>);
            })
          }

          return(
            <Row>
            <Col xs={12}>
            <Card >
              <CardHeader style={{fontSize:20}}
              actAsExpander={this.state.expanded}
              >Build Date : {obj.starttime} Status : {obj.state}
              <RaisedButton style={{marginLeft:50}} label="Show Console" onTouchTap={this.handleExpand} />
              <Link to="ownerName/repoName/branch/branchName"><RaisedButton label="Build Report" style={{marginLeft:50,width:170}}/></Link>

              </CardHeader>
              <CardText expandable={true} style={{background:'black'}}>
                      <Row>
                        <Col>
                          <ul style={{listStyle:'none', color:'white',fontSize:16}}>{list}</ul>
                        </Col>
                      </Row>
              </CardText>
            </Card>
            </Col>
            </Row>
            );
        }));

  return(
    <div style={{marginTop:20}}>
        <h1 style={{color:'white',marginLeft:600}}>BUILDS</h1>
          {consoleRows}

    </div>
    );

 }
}

export default Executions;
