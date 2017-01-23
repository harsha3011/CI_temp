import React, { Component } from 'react';
import Request from 'superagent';
import ConsoleOutput from './ConsoleOutput';
import RaisedButton from 'material-ui/RaisedButton'

class Executions extends Component {

 constructor(props) {
          super(props);
          this.state = {
            owner:'',
            repoName:'',
            repoBranch:'',
            consoleOutput:[]
          };
      }

 componentWillMount()
      {
        var getFiles1=localStorage.getItem("repoName");
         const reponame=JSON.parse(JSON.stringify(getFiles1));
          var getFiles2=localStorage.getItem("repoBranch");
         const repobranch=JSON.parse(JSON.stringify(getFiles2));
          var getFiles3=localStorage.getItem("owner");
         const ownername=JSON.parse(JSON.stringify(getFiles3));
        this.setState({
          owner:ownername,
          repoName:reponame,
          repoBranch:repobranch
         });
      }

 showConsole=(event)=>{
        const owner=this.state.owner;
        const repoName=this.state.repoName;
        const repoBranch=this.state.repoBranch;
        const url='http://172.23.238.223:9080/api/'+owner+'/'+repoName+'/'+repoBranch+'/executions';
        Request
       .get(url)
       .end((err,resp)=>
       {
         console.log(resp.body);
         this.setState({
            consoleOutput:resp.body
         });

      });
 }

render() {
console.log(this.state.consoleOutput);
  return(
    <div>
      <RaisedButton onClick={this.showConsole.bind(this)}>show</RaisedButton>
    </div>
    );

 }
}

export default Executions;
